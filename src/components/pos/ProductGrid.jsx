import ProductCard from "./ProductCard";

const products = [
  {
    id: 1,
    name: "Latte",
    price: 150,
  },
  {
    id: 2,
    name: "Cappuccino",
    price: 180,
  },
  {
    id: 3,
    name: "Espresso",
    price: 120,
  },
];

const ProductGrid = () => {
  return (
    <div>
      <h3 className="font-semibold mb-4">
        Products
      </h3>

      <div className="grid grid-cols-3 gap-4">
        {products.map((item) => (
          <ProductCard
            key={item.id}
            product={item}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;