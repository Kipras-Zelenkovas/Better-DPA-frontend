import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Orders } from "./components/Orders";
import { NavBar } from "./components/NavBar";
import { Table } from "./components/Table/Table";
import { Main } from "./components/Main";
import { Order } from "./components/Order";

function App() {
    return (
        <div className="w-screen h-screen md:flex">
            <NavBar />
            <Routes>
                <Route path="/orders" element={<Table />} />
                <Route path="/" element={<Main />} />
                <Route path="/order" element={<Order />} />
            </Routes>
        </div>
    );
}

export default App;
