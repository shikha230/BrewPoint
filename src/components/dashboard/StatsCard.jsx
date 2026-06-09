const StatsCard = ({ title, value, subtitle, icon, change, changeColor = "blue" }) => {
  const badgeColor = {
    blue: "bg-blue-100 text-blue-600",
    green: "bg-green-100 text-green-600",
    red: "bg-red-100 text-red-600",
  };

  return (
    <div className="bg-white border rounded-2xl p-4 sm:p-5 shadow-sm hover:shadow-md transition">

      {/* Top Section */}
      <div className="flex justify-between items-start">
        <div className="bg-blue-50 p-2.5 sm:p-3 rounded-lg text-blue-600">
          {icon}
        </div>
        {change && (
          <span className={`text-xs px-2 py-1 rounded-full font-medium ${badgeColor[changeColor]}`}>
            {change}
          </span>
        )}
      </div>

      {/* Value */}
      <div className="mt-3 sm:mt-4">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
          {value}
        </h2>
      </div>

      <div className="border-t border-gray-200 my-3"></div>

      {/* Bottom */}
      <div>
        <p className="text-sm text-gray-500">{title}</p>
        <p className="text-xs text-gray-400 mt-1">{subtitle}</p>
      </div>

    </div>
  );
};

export default StatsCard;