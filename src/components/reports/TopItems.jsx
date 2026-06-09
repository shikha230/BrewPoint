const TopItems = ({ items }) => {
  return (
    <div className="bg-white shadow rounded-xl p-5">
      <h2 className="font-semibold mb-3">
        Top Selling Items
      </h2>

      <ul className="space-y-2">
        {items.map((item, i) => (
          <li
            key={i}
            className="bg-gray-100 px-3 py-2 rounded-lg"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopItems;