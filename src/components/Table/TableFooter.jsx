import { Link, useSearchParams } from "react-router-dom";

export const TableFooter = ({ shop, page }) => {
    const [searchParams, setSearchParams] = useSearchParams();

    return (
        <div className="flex mt-3 ml-16">
            <Link
                to={
                    parseInt(page) - 1 > 0
                        ? "/orders?shop=" +
                          shop +
                          "&page=" +
                          (parseInt(page) - 1)
                        : "#"
                }
                className={
                    parseInt(page) - 1 > 0
                        ? "border-2 border-cyan-700 text-white bg-cyan-700 transition ease-in-out duration-500 hover:bg-indigo-900 text-md py-2 px-4 mr-3"
                        : "pointer-events-none cursor-not-allowed border-2 border-cyan-700 text-white bg-cyan-700 transition ease-in-out duration-500 hover:bg-indigo-900 text-md py-2 px-4 mr-3"
                }
            >
                Prev
            </Link>
            <Link
                to={"/orders?shop=" + shop + "&page=" + (parseInt(page) + 1)}
                className={
                    "border-2 border-cyan-700 text-white bg-cyan-700 transition ease-in-out duration-500 hover:bg-indigo-900 text-md py-2 px-4 mr-3"
                }
            >
                Next
            </Link>
        </div>
    );
};
