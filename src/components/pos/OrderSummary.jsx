const OrderSummary = ({
  subtotal,
  gst,
  discount,
  total,
}) => {
  return (
    <div className="border-t mt-4 pt-4">
      <div className="flex justify-between mb-2">
        <span>Subtotal</span>
        <span>₹{subtotal}</span>
      </div>

      <div className="flex justify-between mb-2">
        <span>GST</span>
        <span>₹{gst}</span>
      </div>

      <div className="flex justify-between mb-2">
        <span>Discount</span>
        <span>₹{discount}</span>
      </div>

      <div className="flex justify-between font-bold text-lg">
        <span>Total</span>
        <span>₹{total}</span>
      </div>

      <button className="w-full mt-4 bg-blue-600 text-white py-3 rounded-lg">
        Proceed To Payment
      </button>
    </div>
  );
};

export default OrderSummary;