const HistoryFilters = () => {
  return (
    <div className="bg-white p-4 rounded-xl shadow-sm mb-6">
      <div className="flex gap-4 flex-wrap">
        <input
          type="text"
          placeholder="Search Invoice..."
          className="border px-4 py-2 rounded-lg"
        />

        <input
          type="date"
          className="border px-4 py-2 rounded-lg"
        />

        <select className="border px-4 py-2 rounded-lg">
          <option>All Payments</option>
          <option>Cash</option>
          <option>UPI</option>
          <option>Card</option>
        </select>
      </div>
    </div>
  );
};

export default HistoryFilters;