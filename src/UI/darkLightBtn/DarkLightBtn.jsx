import { useState, useEffect } from "react";

const DarkLightBtn = () => {
    const [isDark, setIsDark] = useState("light")
    const locaDarklItem = localStorage.getItem("darkMode");
    useEffect(() => {
        if (locaDarklItem === "dark") {
            document.body.classList.add("dark");
            setIsDark("dark")
        } else if (locaDarklItem === "light") {
            document.body.classList.remove("dark");
            setIsDark("light")
        }
    }, [locaDarklItem])
    const darkLightMode = (e) => {
        e.target.classList.toggle("dark-mode-btn--active")
        const isDark = document.body.classList.toggle("dark");
        setIsDark((prev) => prev === "light" ? "dark" : "light")
        if (isDark) {
            localStorage.setItem("darkMode", "dark");
        } else {
            localStorage.setItem("darkMode", "light");
        }
    }

    return (<button onClick={(e) => darkLightMode(e)} className="dark-mode-btn">
        {isDark === "light" ? <img src="./img/icons/sun.svg" alt="light mode" className="dark-mode-btn__icon" /> :
            <img src="./img/icons/moon.svg" alt="dark mode" className="dark-mode-btn__icon" />}
    </button>);
}

export default DarkLightBtn;