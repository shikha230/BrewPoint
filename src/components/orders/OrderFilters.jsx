import { FiSearch } from "react-icons/fi";

const OrderFilters = () => {
  return (
    <div className="flex justify-between items-center mb-4">
      
      {/* Tabs */}
      <div className="flex gap-2">
        <button className="bg-blue-100 text-blue-600 px-3 py-1 rounded-lg text-sm">
          All Orders 84
        </button>

        <button className="bg-gray-100 px-3 py-1 rounded-lg text-sm">
          Completed 71
        </button>

        <button className="bg-gray-100 px-3 py-1 rounded-lg text-sm">
          Pending 9
        </button>

        <button className="bg-gray-100 px-3 py-1 rounded-lg text-sm">
          Cancelled 4
        </button>
      </div>

      {/* Search */}
      <div className="relative">
        <FiSearch className="absolute left-3 top-2.5 text-gray-400" />

        <input
          type="text"
          placeholder="Search orders..."
          className="pl-9 pr-3 py-2 border rounded-lg text-sm focus:outline-none"
        />
      </div>
    </div>
  );
};

export default OrderFilters;