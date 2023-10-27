import style from "./footer.module.css"

const Footer = () => {
    return (
        <footer className={style.footer}>
            <div className={style.container}>
                <div className={style.footer__wrapper}>
                    <ul className={style.social}>
                        <li className={style.social__item}>
                            <a href="#!"><img src="./img/icons/vk.svg" alt="vkontakte" /></a>
                        </li>
                        <li className={style.social__item}>
                            <a href="#!"
                            ><img src="./img/icons/instagram.svg" alt="instagram"
                                /></a>
                        </li>
                        <li className={style.social__item}>
                            <a href="#!"
                            ><img src="./img/icons/twitter.svg" alt="twitter"
                                /></a>
                        </li>
                        <li className={style.social__item}>
                            <a href="#!"><img src="./img/icons/gitHub.svg" alt="github" /></a>
                        </li>
                        <li className={style.social__item}>
                            <a href="#!"
                            ><img src="./img/icons/linkedIn.svg" alt="linkedin"
                                /></a>
                        </li>
                    </ul>
                    <div className={style.copyright}>
                        <p>© 2022 frontend-dev</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;