import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getOrder, setOrderStatus } from "../functions/api";

export const Order = () => {
    const [data, setData] = useState(undefined);
    const [searchParams, setSearchParams] = useSearchParams();

    const id = searchParams.get("id");
    const shop = searchParams.get("shop");

    const changeStatus = (status) => {
        setOrderStatus(shop, id, status, setData);
    };

    useEffect(() => {
        const source = axios.CancelToken.source();
        if (id !== undefined && shop !== undefined) {
            getOrder(setData, id, shop, source);
            console.log(data);
        } else {
            console.log("something bad happened");
        }
    }, []);

    if (data === undefined) {
        return (
            <div>
                <p>Loading....</p>
            </div>
        );
    }

    return (
        <div className="md:w-10/12 w-full h-screen bg-slate-300">
            <div className="m-4">
                <p className="text-xl font-normal">Order id - {data.id}</p>
                <p className="text-xl font-normal">
                    Order status - {data.status}
                </p>
                <p className="text-xl font-normal">
                    Name -{" "}
                    {data.billing.first_name + " " + data.billing.last_name}
                </p>
                <p className="text-xl font-normal">Total sum - {data.total}</p>
            </div>
            <div className="flex ml-4">
                <p
                    className="mx-2 p-3 font-semibold text-md border border-green-500 bg-green-500 cursor-pointer transition ease-in-out hover:bg-green-700 duration-500 rounded-lg"
                    onClick={() => changeStatus("completed")}
                >
                    Complete
                </p>

                <p
                    className="mx-2 p-3 font-semibold text-md border border-amber-500 bg-amber-500 cursor-pointer transition ease-in-out hover:bg-amber-700 duration-500 rounded-lg"
                    onClick={() => changeStatus("pending")}
                >
                    Pending
                </p>

                <p
                    className="mx-2 p-3 font-semibold text-md border border-blue-500 bg-blue-500 cursor-pointer transition ease-in-out hover:bg-blue-700 duration-500 rounded-lg"
                    onClick={() => changeStatus("on-hold")}
                >
                    On-hold
                </p>

                <p
                    className="mx-2 p-3 font-semibold text-md border border-orange-500 bg-orange-500 cursor-pointer transition ease-in-out hover:bg-orange-700 duration-500 rounded-lg"
                    onClick={() => changeStatus("processing")}
                >
                    Processing
                </p>

                <p
                    className="mx-2 p-3 font-semibold text-md border border-red-500 bg-red-500 cursor-pointer transition ease-in-out hover:bg-red-700 duration-500 rounded-lg"
                    onClick={() => changeStatus("refunded")}
                >
                    Refunded
                </p>

                <p
                    className="mx-2 p-3 font-semibold text-md border border-red-600 bg-red-600 cursor-pointer transition ease-in-out hover:bg-red-800 duration-500 rounded-lg"
                    onClick={() => changeStatus("cancelled")}
                >
                    Cancalled
                </p>

                <p
                    className="mx-2 p-3 font-semibold text-md border border-red-700 bg-red-700 cursor-pointer transition ease-in-out hover:bg-red-900 duration-500 rounded-lg"
                    onClick={() => changeStatus("failed")}
                >
                    Failed
                </p>
            </div>
        </div>
    );
};
