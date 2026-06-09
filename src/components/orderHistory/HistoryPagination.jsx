const HistoryPagination = () => {
  return (
    <div className="flex justify-end gap-2 mt-6">
      <button className="px-4 py-2 border rounded">
        Previous
      </button>

      <button className="px-4 py-2 bg-black text-white rounded">
        1
      </button>

      <button className="px-4 py-2 border rounded">
        Next
      </button>
    </div>
  );
};

export default HistoryPagination;