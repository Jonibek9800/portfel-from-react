import { Route, Routes } from 'react-router-dom';
import Home from './pages/homePage/Home';
import ProjectPage from './pages/projectPage/ProjectPage';
import Skills from './pages/Skills/Skills';
import Contacts from './pages/Contacts/Contacts';
import NavBar from './UI/NavBar/NavBar';
import Main from './components/main/Main';

function App() {
    return (
        <>
            <NavBar />
            <Routes>
                <Route path="/projectPage" element={<ProjectPage />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/projects" element={<Main/>} />
                <Route exect path="/" element={<Home />} />
            </Routes>
        </>
    );
}

export default App;
