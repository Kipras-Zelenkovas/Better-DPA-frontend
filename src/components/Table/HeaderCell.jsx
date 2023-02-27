export const HeaderCell = ({ column, sorting, sortTable }) => {
    const isDescending = "id" === column && sorting === "desc";
    const isAscending = "id" === column && sorting === "asc";
    const futureSorting = isDescending ? "asc" : "desc";

    return (
        <th
            key={column}
            onClick={
                column === "id"
                    ? () => {
                          sortTable(futureSorting);
                      }
                    : null
            }
            className={
                column !== "id"
                    ? "cursor-not-allowed p-2"
                    : "p-2 cursor-pointer"
            }
        >
            {column}
            {isDescending && column === "id" ? <span>▼</span> : ""}
            {isAscending && column === "id" ? <span>▲</span> : ""}
        </th>
    );
};
