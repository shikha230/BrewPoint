const items = [
  { name: "Caramel Latte", sales: 38, width: "90%" },
  { name: "Croissant", sales: 29, width: "75%" },
  { name: "Flat White", sales: 24, width: "60%" },
  { name: "Espresso", sales: 21, width: "50%" },
];

const TopSellingItems = () => {
  return (
    <div className="bg-white border rounded-xl p-4 sm:p-5">
      <h3 className="font-semibold mb-4 sm:mb-5">Top Selling</h3>

      <div className="space-y-3 sm:space-y-4">
        {items.map((item) => (
          <div key={item.name}>
            <div className="flex justify-between text-sm mb-1">
              <span className="truncate pr-2">{item.name}</span>
              <span className="text-gray-500 flex-shrink-0">{item.sales}</span>
            </div>
            <div className="h-2 bg-gray-200 rounded-full">
              <div
                style={{ width: item.width }}
                className="h-2 bg-blue-500 rounded-full"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopSellingItems;