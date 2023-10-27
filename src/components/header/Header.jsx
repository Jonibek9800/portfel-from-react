import style from "./header.module.css"

const Header = () => {
    return (
        <header className={style.header}>
            <div className={style.header__wrapper}>
                <h1 className={style.header__title}>
                    <strong>Hi, my name is <em>Jonibek</em> </strong><br />
                    a frontend developer
                </h1>
                <div className={style.header__text}>
                    <p>with passion for learning and creating.</p>
                </div>
                <a href="https://github.com/Jonibek9800" className={style.btn}>GitHub profile</a>
            </div>
        </header>
    );
}

export default Header;