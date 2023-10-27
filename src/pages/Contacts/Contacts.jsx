const Contacts = () => {
    return (
        <section className="section">
            <div className="container">
                <h1 className="title-1">Contacts</h1>
                <ul className="content-list">
                    <li className="content-list__item">
                        <h2 className="title-2">Location</h2>
                        <p>Dushanbe, Tajikistan</p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Telegram / WhatsApp</h2>
                        <p><a href="tel:+992001777786">(+992)00 177 7786</a></p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Email</h2>
                        <p>
                            <a href="mailto:Jonibek.mahmudov1998@mail.ru"
                            >Jonibek.mahmudov1998@mail.ru</a>
                        </p>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Contacts;