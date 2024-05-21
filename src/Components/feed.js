import React, { useState } from 'react';
import styles from "../css/feed.module.css";
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';
import FeedPopup from './FeedPopup';

function Feed({ media_url_list, profile_url, username, media_id }) {
    const navigate = useNavigate();
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    //하드코딩..
    // const images = [
    //     // "http://via.placeholder.com/370X465",
    //     // "http://via.placeholder.com/370X465",
    //     // "http://via.placeholder.com/370X465"
    //     'img/feed1.png',
    //     'img/feed2.png',
    //     'img/feed3.png'
    // ];
    const images = media_url_list;

    const openPopup = () => {
        setIsPopupOpen(true); 
    };

    const closePopup = () => {
        setIsPopupOpen(false);
    };
    // 이미지 클릭 -> 아이템 정보창으로 이동
    const navigateToHomeInfo = () => {
        navigate("/HomeInfo");
    };
    const goToFeedPopup = () => {
        navigate("FeedPopup")
    };
    const goToNextImage = () => {
        setCurrentImageIndex((prevIndex) => {
            const nextIndex = prevIndex === images.length - 1 ? 0 : prevIndex + 1;
            console.log(`다음 이미지 index: ${nextIndex}`);
            return nextIndex;
        });
    };

    const goToPrevImage = () => {
        setCurrentImageIndex((prevIndex) => {
            //0번 인덱스에서 이전 x
            const nextIndex = prevIndex === 0 ? 0 : prevIndex - 1;
            console.log(`이전 이미지 index: ${nextIndex}`);
            return nextIndex;
        });
    };
    return (
        <div className={styles.completeFeed}>
            {/* header */}
            <div className={styles.profile} onClick={openPopup}>
                {/* 셀럽 피드에 media id 보내기 */}
                {isPopupOpen && <FeedPopup onClose={closePopup} media_id={media_id}/>} 

                <div className={styles.ImageBox}>
                    <img id={styles.profileImage} src={profile_url} alt="Profile"></img>
                </div>
                <p className={styles.profileId} id={styles.name}>{username}</p>
            </div>

            {/* carousel 구현 */}
            <div className={styles.feedMain}>
                <div className={styles.imageWrapper} onClick={navigateToHomeInfo}>
                    <img src={images[currentImageIndex]} alt={`Feed ${currentImageIndex}`} />
                </div>
                <div className={styles.dirBtn}>
                     {/* 사진 넘어가는 버튼 */}
                    {images.length > 1 && ( // 이미지가 2개 이상 일 때만 버튼 표시
                        <>
                            {currentImageIndex !== 0 && ( // 첫 번째 사진이 아닐 때만 왼쪽 버튼 표시
                                <button className={styles.prevBtn} onClick={goToPrevImage}>{'<'}</button>
                            )}
                            {currentImageIndex !== images.length - 1 && ( // 마지막 사진이 아닐 때만 오른쪽 버튼 표시
                                <button className={styles.nextBtn} onClick={goToNextImage}>{'>'}</button>
                            )}
                        </>
                    )}
                </div>
            </div>

           
            
        </div>
    );
}

export default Feed;
