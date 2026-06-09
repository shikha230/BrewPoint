import { FiPlus, FiUserPlus, FiDownload } from "react-icons/fi";

const QuickActions = () => {
  return (
    <div className="bg-white border rounded-2xl p-5 shadow-sm">
      <h3 className="text-lg font-semibold text-gray-900 mb-5">
        Quick Actions
      </h3>

      {/* Stack on mobile, row on sm+ if needed — but keep full width buttons */}
      <div className="space-y-3 sm:space-y-4">

        <button className="w-full flex items-center gap-3 bg-gray-100 hover:bg-gray-200 transition rounded-xl px-4 py-3">
          <FiPlus className="text-blue-600 flex-shrink-0" size={18} />
          <span className="text-sm font-medium text-gray-800 text-left">
            Add Menu Item
          </span>
        </button>

        <button className="w-full flex items-center gap-3 bg-gray-100 hover:bg-gray-200 transition rounded-xl px-4 py-3">
          <FiUserPlus className="text-blue-600 flex-shrink-0" size={18} />
          <span className="text-sm font-medium text-gray-800 text-left">
            Add Staff
          </span>
        </button>

        <button className="w-full flex items-center gap-3 bg-gray-100 hover:bg-gray-200 transition rounded-xl px-4 py-3">
          <FiDownload className="text-blue-600 flex-shrink-0" size={18} />
          <span className="text-sm font-medium text-gray-800 text-left">
            Export Report
          </span>
        </button>

      </div>
    </div>
  );
};

export default QuickActions;