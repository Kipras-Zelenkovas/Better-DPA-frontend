import { useEffect, useState } from "react";
import { TableBody } from "./TableBody";
import { TableHeader } from "./TableHeader";
import { useSearchParams } from "react-router-dom";
import { getData } from "../../functions/api";
import axios from "axios";
import { TableFooter } from "./TableFooter";

export const Table = () => {
    const [data, setData] = useState(undefined);
    const [searchParams, setSearchParams] = useSearchParams();
    const columns = ["id", "name", "status", "total", "edit"];
    const [sorting, setSorting] = useState("desc");

    const page = searchParams.get("page") ? searchParams.get("page") : 1;
    const shop = searchParams.get("shop") ? searchParams.get("shop") : 1;

    useEffect(() => {
        const cancelToken = axios.CancelToken.source();
        getData(setData, cancelToken, page, shop, sorting);

        return () => {
            cancelToken.cancel();
        };
    }, [page, sorting]);

    if (data === undefined) {
        return <div>Loading....</div>;
    }

    return (
        <div className="md:w-10/12 w-full h-screen bg-slate-300">
            <table className="table-fixed w-11/12 p-3 ml-16 mt-24 bg-white rounded-lg">
                <TableHeader
                    columns={columns}
                    sorting={sorting}
                    sortTable={setSorting}
                />
                <TableBody data={data} shop={shop} />
            </table>
            <TableFooter page={page} shop={shop} />
        </div>
    );
};
