
import { Link, NavLink } from "react-router-dom";
import DarkLightBtn from "../darkLightBtn/DarkLightBtn";
const NavBar = () => {

    const patnName = [
        { id: 1, path: "projects" },
        { id: 2, path: "skills" },
        { id: 3, path: "contacts" },
    ]

    return (
        <nav className="nav">
            <div className="container">
                <div className="nav-row">
                    <Link to="/" className="logo"
                    ><strong>Freelancer</strong> portfolio</Link>
                    <DarkLightBtn />

                    <ul className="nav-list">
                        {patnName.map(link => {
                            return (
                                <li key={link.id} className="nav-list__item">
                                    <NavLink
                                        id={link.id}
                                        to={"/" + link.path}
                                        className="nav-list__link"
                                    >{link.path}</NavLink>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;