import { Link } from "react-router-dom";

export const NavBar = () => {
    return (
        <div>
            <Link to="/?page=1&shop=1" className="text-xl p-3">
                Shop 1
            </Link>
            <Link to="/?page=1&shop=2" className="text-xl p-3">
                Shop 2
            </Link>
        </div>
    );
};
