import { Link } from "react-router-dom";

export const TableBody = ({ data }) => {
    return (
        <tbody className="">
            {data.data.data.map((item) => {
                return (
                    <tr key={item.id} className="border-b border-slate-800">
                        <td className="p-2 pr-4">{item.id}</td>
                        <td className="p-2 pr-4 font-semibold">
                            {item.billing.first_name} {item.billing.last_name}
                        </td>
                        <td className="p-2 pr-4">
                            <p
                                className={
                                    item.status === "pending"
                                        ? "border border-amber-500 bg-amber-500 w-fit py-1 px-12 rounded-lg text-center"
                                        : item.status === "processing"
                                        ? "border border-orange-500 bg-orange-600 w-fit py-1 px-10 rounded-lg text-center"
                                        : item.status === "on-hold"
                                        ? "border border-blue-500 bg-blue-500 w-fit py-1 px-12 rounded-lg text-center"
                                        : item.status === "completed"
                                        ? "border border-green-500 bg-green-500 w-fit py-1 px-10 rounded-lg text-center"
                                        : item.status === "failed"
                                        ? "border border-red-500 bg-red-500 w-fit py-1 px-14 rounded-lg text-center"
                                        : "border border-red-500 bg-red-500 w-fit py-1 px-11 rounded-lg text-center"
                                }
                            >
                                {item.status}
                            </p>
                        </td>
                        <td className="p-2 pr-4">{item.total}</td>
                        <td className="p-2">
                            <Link
                                to={"/order?id=" + item.id}
                                className="cursor-pointer border border-cyan-600 bg-cyan-600 w-fit py-1 px-3 transition hover:bg-indigo-700 duration-500 ease-in-out"
                            >
                                Edit
                            </Link>
                        </td>
                    </tr>
                );
            })}
        </tbody>
    );
};
