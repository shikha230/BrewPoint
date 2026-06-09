const StatCard = ({ title, value, sub }) => {
  return (
    <div className="bg-white shadow rounded-xl p-5">
      <h3 className="text-gray-500 text-sm">
        {title}
      </h3>

      <h1 className="text-2xl font-bold mt-2">
        {value}
      </h1>

      {sub && (
        <p className="text-xs text-gray-400 mt-1">
          {sub}
        </p>
      )}
    </div>
  );
};

export default StatCard;