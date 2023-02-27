import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getOrderReports } from "../functions/api";

export const Main = () => {
    const [data, setData] = useState(undefined);
    const [searchParams, setSearchParams] = useSearchParams();
    const shop = searchParams.get("shop") ? searchParams.get("shop") : 1;

    useEffect(() => {
        const cancelToken = axios.CancelToken.source();
        getOrderReports(setData, cancelToken, shop);

        return () => {
            cancelToken.cancel();
        };
    }, [shop]);

    if (data === undefined) {
        return <div>Loading...</div>;
    }

    return (
        <div className="md:w-10/12 w-full h-screen bg-slate-300">
            <div className="container mx-auto">
                <div className="grid grid-cols-4 gap-3 mt-20 ml-4">
                    <div className="border-2 border-black rounded-lg m-2 bg-white">
                        <p className="p-3 text-md font-medium">Completed</p>
                        <p className="px-3 pb-3 text-2xl font-semibold">
                            {data[3].total}
                        </p>
                        <div className="border-4 border-green-500 rounded-xl my-3 mx-2"></div>
                    </div>
                    <div className="border-2 border-black rounded-lg m-2 bg-white">
                        <p className="p-3 text-md font-medium">Pending</p>
                        <p className="px-3 pb-3 text-2xl font-semibold">
                            {data[0].total}
                        </p>
                        <div className="border-4 border-amber-500 rounded-xl my-3 mx-2"></div>
                    </div>
                    <div className="border-2 border-black rounded-lg m-2 bg-white">
                        <p className="p-3 text-md font-medium">On-hold</p>
                        <p className="px-3 pb-3 text-2xl font-semibold">
                            {data[2].total}
                        </p>
                        <div className="border-4 border-blue-500 rounded-xl my-3 mx-2"></div>
                    </div>
                    <div className="border-2 border-black rounded-lg m-2 bg-white">
                        <p className="p-3 text-md font-medium">Processing</p>
                        <p className="px-3 pb-3 text-2xl font-semibold">
                            {data[1].total}
                        </p>
                        <div className="border-4 border-orange-600 rounded-xl my-3 mx-2"></div>
                    </div>
                    <div className="border-2 border-black rounded-lg m-2 bg-white">
                        <p className="p-3 text-md font-medium">Refunded</p>
                        <p className="px-3 pb-3 text-2xl font-semibold">
                            {data[5].total}
                        </p>
                        <div className="border-4 border-red-600 rounded-xl my-3 mx-2"></div>
                    </div>
                    <div className="border-2 border-black rounded-lg m-2 bg-white">
                        <p className="p-3 text-md font-medium">Cancelled</p>
                        <p className="px-3 pb-3 text-2xl font-semibold">
                            {data[4].total}
                        </p>
                        <div className="border-4 border-red-700 rounded-xl my-3 mx-2"></div>
                    </div>
                    <div className="border-2 border-black rounded-lg m-2 bg-white">
                        <p className="p-3 text-md font-medium">Failed</p>
                        <p className="px-3 pb-3 text-2xl font-semibold">
                            {data[6].total}
                        </p>
                        <div className="border-4 border-red-800 rounded-xl my-3 mx-2"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};
