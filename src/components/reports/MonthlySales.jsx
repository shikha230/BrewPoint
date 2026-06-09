const MonthlySales = ({ data }) => {
  return (
    <div className="bg-white shadow rounded-xl p-5">
      <h2 className="font-semibold mb-3">
        Monthly Sales
      </h2>

      <div className="space-y-3">
        {data.map((item, i) => (
          <div
            key={i}
            className="flex justify-between border-b pb-2"
          >
            <span>{item.month}</span>
            <span className="font-medium">
              ₹{item.revenue}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MonthlySales;