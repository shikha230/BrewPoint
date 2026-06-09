import useCart from "../../hooks/useCart";
import CartItem from "./CartItem";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();

  const {
    cartItems,
    subtotal,
    gst,
    discount,
    total,
  } = useCart();

  return (
    <div className="bg-white border rounded-xl p-4 h-full flex flex-col">
      <h3 className="font-semibold mb-4">
        Current Order
      </h3>

      {/* Cart Items */}
      <div className="space-y-3 flex-1 overflow-y-auto">
        {cartItems.length === 0 ? (
          <p className="text-gray-400 text-sm">
            No items added
          </p>
        ) : (
          cartItems.map((item) => (
            <CartItem
              key={item.id}
              item={item}
            />
          ))
        )}
      </div>

      {/* Summary */}
      <div className="border-t mt-6 pt-4">
        <div className="flex justify-between text-sm">
          <span>Subtotal</span>
          <span>
            ₹{subtotal.toFixed(2)}
          </span>
        </div>

        <div className="flex justify-between text-sm mt-2">
          <span>GST (5%)</span>
          <span>
            ₹{gst.toFixed(2)}
          </span>
        </div>

        {Number(discount) > 0 && (
          <div className="flex justify-between text-sm mt-2 text-red-500">
            <span>Discount</span>
            <span>
              - ₹{Number(discount).toFixed(2)}
            </span>
          </div>
        )}

        <div className="flex justify-between font-bold text-lg mt-4">
          <span>Total</span>
          <span>
            ₹{total.toFixed(2)}
          </span>
        </div>

        <button
          onClick={() =>
            navigate("/cashier/payment")
          }
          className="w-full mt-5 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition"
        >
          Proceed To Payment
        </button>
      </div>
    </div>
  );
};

export default Cart;