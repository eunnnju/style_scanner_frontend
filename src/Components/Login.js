import styles from '../css/Login.module.css';


export default function Register() {
    return (
        <body>
            <header>
                메뉴바
            </header>

            <div className={styles.content}>
                <h1>Style Scanner</h1>
                <p> 당신의 취향을 만들어 드릴게요! </p>

                <form>
                    <label for="email" >이메일 주소</label>
                    <input type="text" name="email" />

                    <label for="password" >비밀번호</label>
                    <input type="password" name="password" />

                    <input className={styles.submitButton} type="submit" value="로그인"></input>
                </form>
                <div>
                    <a href='/'>이메일 가입</a>
                    <a href='/'>이메일 찾기</a>
                    <a href='/'>비밀번호 찾기</a>
                </div>

            </div>
        </body >

    );
}