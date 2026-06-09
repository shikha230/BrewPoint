import useCart from "../../hooks/useCart";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="bg-white border rounded-xl p-4 hover:border-blue-500">
      <h4 className="font-medium">
        {product.name}
      </h4>

      <p className="text-blue-600 mt-2">
        ₹{product.price}
      </p>

      <button
        onClick={() => addToCart(product)}
        className="w-full mt-4 bg-blue-600 text-white py-2 rounded-lg"
      >
        Add
      </button>
    </div>
  );
};

export default ProductCard;