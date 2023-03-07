import { redirect, Route, Routes } from "react-router-dom";
import "./App.css";
import { Orders } from "./components/Orders";
import { NavBar } from "./components/NavBar";
import { Table } from "./components/Table/Table";
import { Main } from "./components/Main";
import { Order } from "./components/Order";
import { Login } from "./components/Auth/Login";
import { Register } from "./components/Auth/Register";

function App() {
    return (
        <div className="w-screen h-screen md:flex">
            <NavBar />
            <Routes>
                <Route
                    path="/orders"
                    element={
                        localStorage.getItem("key") !== null ? (
                            <Table />
                        ) : (
                            <Login />
                        )
                    }
                />
                <Route
                    path="/"
                    element={
                        localStorage.getItem("key") !== null ? (
                            <Main />
                        ) : (
                            <Login />
                        )
                    }
                />
                <Route
                    path="/order"
                    element={
                        localStorage.getItem("key") !== null ? (
                            <Order />
                        ) : (
                            <Login />
                        )
                    }
                />
                {localStorage.getItem("key") !== null ? (
                    ""
                ) : (
                    <Route path="/register" element={<Register />} />
                )}
            </Routes>
        </div>
    );
}

export default App;
