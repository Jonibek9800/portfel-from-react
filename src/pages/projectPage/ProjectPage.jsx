const ProjectPage = () => {
    return (<>
        <section className="section">
            <div className="container">
                <div className="project-details">
                    <h1 className="title-1">Video service</h1>
                    <img
                        src="./img/projects/02-big.jpg"
                        alt=""
                        className="project-details__img"
                    />

                    <div className="project-details__desc">
                        <p>Skills: React, Node.js, MongoDB</p>
                    </div>

                    <a href="#!" className="btn-outline">
                        <img src="./img/icons/gitHub-black.svg" alt="github" />
                        Github repo
                    </a>
                </div>
            </div>
        </section>
    </>);
}

export default ProjectPage;