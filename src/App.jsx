import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Main } from "./components/Main";
import { NavBar } from "./components/NavBar";

function App() {
    return (
        <div>
            <NavBar />
            <Routes>
                <Route path="/" element={<Main />} />
            </Routes>
        </div>
    );
}

export default App;
