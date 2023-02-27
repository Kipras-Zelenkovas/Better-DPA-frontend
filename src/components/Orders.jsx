import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { getData } from "../functions/api";

export const Orders = () => {
    const [data, setData] = useState(undefined);
    const [searchParams, setSearchParams] = useSearchParams();

    const page = searchParams.get("page") ? searchParams.get("page") : 1;
    const shop = searchParams.get("shop") ? searchParams.get("shop") : 1;

    useEffect(() => {
        const cancelToken = axios.CancelToken.source();
        getData(setData, cancelToken, page, shop);

        return () => {
            cancelToken.cancel();
        };
    }, [page]);

    if (data === undefined) {
        return (
            <div>
                <h1 className="text-red-600">Loading.....</h1>
            </div>
        );
    }

    return (
        <div className="md:w-10/12 w-full h-screen">
            <div className="m-3">
                {data.data.data.map((item, index) => {
                    return (
                        <p className="text-green-500" key={index}>
                            {item.id}
                        </p>
                    );
                })}
            </div>

            <div>
                <Link
                    to={"?page=" + (parseInt(page) - 1) + "&shop=" + shop}
                    className="m-2 p-1 border-2 border-black"
                >
                    Back
                </Link>
                <Link
                    to={"?page=" + (parseInt(page) + 1) + "&shop=" + shop}
                    className="m-2 p-1 border-2 border-black"
                >
                    Forward
                </Link>
            </div>
        </div>
    );
};
