import useCart from "../../hooks/useCart";

const PaymentSummary = () => {
  const {
    subtotal,
    gst,
    discount,
    total,
  } = useCart();

  return (
    <div className="bg-white border rounded-xl p-5">
      <h3 className="font-semibold text-lg mb-5">
        Invoice Summary
      </h3>

      <div className="space-y-3">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>₹{subtotal.toFixed(2)}</span>
        </div>

        <div className="flex justify-between">
          <span>GST (5%)</span>
          <span>₹{gst.toFixed(2)}</span>
        </div>

        <div className="flex justify-between text-red-500">
          <span>Discount</span>
          <span>
            - ₹{Number(discount).toFixed(2)}
          </span>
        </div>

        <div className="border-t pt-3 flex justify-between font-bold text-lg">
          <span>Total</span>
          <span>₹{total.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};

export default PaymentSummary;