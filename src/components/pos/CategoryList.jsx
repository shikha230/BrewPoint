const categories = [
  "Coffee",
  "Tea",
  "Burger",
  "Sandwich",
  "Dessert",
];

const CategoryList = () => {
  return (
    <div className="bg-white rounded-xl border p-4">
      <h3 className="font-semibold mb-4">
        Categories
      </h3>

      <div className="space-y-2">
        {categories.map((item) => (
          <button
            key={item}
            className="w-full text-left px-4 py-3 rounded-lg hover:bg-blue-50"
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;