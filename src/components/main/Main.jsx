import { Link } from "react-router-dom";
import style from "./main.module.css"

const Main = () => {
    return (
        <main className="section">
            <div className="container">
                <h2 className="title-1">Projects</h2>
                <ul className={style.projects}>
                    <li className={style.project}>
                        <Link to="/projectPage">
                            <img
                                src="./img/projects/01.jpg"
                                alt="project img"
                                className={style.project__img}
                            />
                            <h3 className={style.project__title}>Gaming streaming portal</h3>
                        </Link>
                    </li>
                    <li className={style.project}>
                        <Link to="/projectPage">
                            <img
                                src="./img/projects/02.jpg"
                                alt="project img"
                                className={style.project__img}
                            />
                            <h3 className={style.project__title}>Video service</h3>
                        </Link>
                    </li>
                    <li className={style.project}>
                        <Link to="/projectPage">
                            <img
                                src="./img/projects/03.jpg"
                                alt="project img"
                                className={style.project__img}
                            />
                            <h3 className={style.project__title}>Video portal</h3>
                        </Link>
                    </li>
                    <li className={style.project}>
                        <Link to="/projectPage">
                            <img
                                src="./img/projects/04.jpg"
                                alt="project img"
                                className={style.project__img}
                            />
                            <h3 className={style.project__title}>Dating app</h3>
                        </Link>
                    </li>
                    <li className={style.project}>
                        <Link to="/projectPage">
                            <img
                                src="./img/projects/05.jpg"
                                alt="project img"
                                className={style.project__img}
                            />
                            <h3 className={style.project__title}>Landing</h3>
                        </Link>
                    </li>
                    <li className={style.project}>
                        <Link to="/projectPage">
                            <img
                                src="./img/projects/06.jpg"
                                alt="project img"
                                className={style.project__img}
                            />
                            <h3 className={style.project__title}>Gaming community</h3>
                        </Link>
                    </li>
                </ul>
            </div>
        </main>
    );
}

export default Main;