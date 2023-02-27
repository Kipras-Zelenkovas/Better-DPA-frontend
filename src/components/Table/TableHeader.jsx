import { HeaderCell } from "./HeaderCell";

export const TableHeader = ({ columns, sorting, sortTable }) => {
    return (
        <thead className="border-b border-slate-800 text-left">
            <tr>
                {columns.map((column) => {
                    return (
                        <HeaderCell
                            column={column}
                            sorting={sorting}
                            sortTable={sortTable}
                            key={column}
                        />
                    );
                })}
            </tr>
        </thead>
    );
};
