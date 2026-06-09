import useCart from "../../hooks/useCart";

const DiscountBox = () => {
  const {
    discount,
    setDiscount,
  } = useCart();

  return (
    <div className="bg-white border rounded-xl p-4">
      <h3 className="font-semibold mb-4">
        Discount
      </h3>

      <input
        type="number"
        value={discount}
        onChange={(e) =>
          setDiscount(e.target.value)
        }
        placeholder="Enter Discount"
        className="w-full border rounded-lg px-3 py-2"
      />
    </div>
  );
};

export default DiscountBox;