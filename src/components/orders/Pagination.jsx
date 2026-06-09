const Pagination = () => {
  return (
    <div className="flex justify-between items-center mt-4 text-sm text-gray-500">
      <p>Showing 1-10 of 84 orders</p>

      <div className="flex gap-2">
        <button className="px-3 py-1 border rounded">1</button>
        <button className="px-3 py-1 border rounded bg-blue-500 text-white">
          2
        </button>
        <button className="px-3 py-1 border rounded">3</button>
      </div>
    </div>
  );
};

export default Pagination;