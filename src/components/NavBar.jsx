import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { data } from "../functions/shops";

export const NavBar = () => {
    const [open, setOpen] = useState(true);
    const [searchParams, setSearchParams] = useSearchParams();

    const shops = data;

    useEffect(() => {
        console.log(open);
    }, [open]);

    return (
        <div className="md:w-1/5 w-full md:h-screen bg-violet-700 ">
            <div className="w-full h-20 md:flex justify-between flex-wrap">
                <p className="p-4 text-4xl text-white">Menu</p>
                <svg
                    className="mt-5 mr-10 cursor-pointer"
                    viewBox="0 0 100 80"
                    width="40"
                    height="40"
                    onClick={() => setOpen(!open)}
                >
                    <rect width="100" height="20"></rect>
                    <rect y="30" width="100" height="20"></rect>
                    <rect y="60" width="100" height="20"></rect>
                </svg>
            </div>
            <div className="border-b-2 border-black p-1"></div>
            <div className="h-20 w-full flex items-center">
                {shops.map((item) => {
                    return (
                        <a key={item} className="m-4" href={"/?shop=" + item}>
                            <svg
                                width="2rem"
                                height="2rem"
                                fill="currentColor"
                                className="text-white transition ease-in-out duration-500 hover:w-10 hover:h-10"
                                viewBox="0 0 16 16"
                            >
                                {" "}
                                <path
                                    d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.371 2.371 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976l2.61-3.045zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0zM1.5 8.5A.5.5 0 0 1 2 9v6h1v-5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v5h6V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5zM4 15h3v-5H4v5zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3zm3 0h-2v3h2v-3z"
                                    fill="white"
                                ></path>{" "}
                            </svg>
                        </a>
                    );
                })}
            </div>
            {searchParams.get("shop") ? (
                <div>
                    <div className="border-b-2 border-black "></div>
                    <div className="w-full p-3 bg-violet-800 h-30">
                        <Link
                            to={"/orders?shop=" + searchParams.get("shop")}
                            className="block text-2xl text-white w-full hover:bg-violet-600 p-1 transition hover:ease-in-out duration-500"
                        >
                            Orders
                        </Link>
                        <Link
                            to={"/top-sellers?shop=" + searchParams.get("shop")}
                            className="block text-2xl text-white w-full hover:bg-violet-600 p-1 transition hover:ease-in-out duration-500"
                        >
                            Top Sellers
                        </Link>
                        <Link
                            to={"/?shop=" + searchParams.get("shop")}
                            className="block text-2xl text-white w-full hover:bg-violet-600 p-1 transition hover:ease-in-out duration-500"
                        >
                            Orders Reports
                        </Link>
                    </div>
                </div>
            ) : (
                ""
            )}
        </div>
    );
};
