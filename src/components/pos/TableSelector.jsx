const tables = [
  "Table 1",
  "Table 2",
  "Table 3",
  "Table 4",
  "Table 5",
];

const TableSelector = ({
  selectedTable,
  setSelectedTable,
}) => {
  return (
    <div className="bg-white border rounded-xl p-4">
      <h3 className="font-semibold mb-4">
        Select Table
      </h3>

      <div className="grid grid-cols-2 gap-3">
        {tables.map((table) => (
          <button
            key={table}
            onClick={() =>
              setSelectedTable(table)
            }
            className={`border rounded-lg py-2 ${
              selectedTable === table
                ? "bg-blue-600 text-white"
                : ""
            }`}
          >
            {table}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TableSelector;