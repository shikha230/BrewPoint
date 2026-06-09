import HistoryRow from "./HistoryRow";

const HistoryTable = ({ data }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
      <table className="w-full">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-4 text-left">Invoice No</th>
            <th className="p-4 text-left">Date</th>
            <th className="p-4 text-left">Amount</th>
            <th className="p-4 text-left">Payment Type</th>
            <th className="p-4 text-left">Status</th>
            <th className="p-4 text-left">Actions</th>
          </tr>
        </thead>

        <tbody>
          {data.map((order) => (
            <HistoryRow key={order.id} order={order} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HistoryTable;