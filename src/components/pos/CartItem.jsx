import {
  FiPlus,
  FiMinus,
  FiTrash2,
} from "react-icons/fi";

import useCart from "../../hooks/useCart";

const CartItem = ({ item }) => {
  const {
    increaseQty,
    decreaseQty,
    removeItem,
  } = useCart();

  return (
    <div className="border rounded-lg p-3">
      <div className="flex justify-between items-start">
        <div>
          <h4 className="font-medium">
            {item.name}
          </h4>

          <p className="text-sm text-gray-500">
            ₹{item.price}
          </p>
        </div>

        <button
          onClick={() =>
            removeItem(item.id)
          }
          className="text-red-500"
        >
          <FiTrash2 />
        </button>
      </div>

      <div className="flex items-center justify-between mt-3">
        <div className="flex items-center gap-3">
          <button
            onClick={() =>
              decreaseQty(item.id)
            }
            className="w-8 h-8 border rounded"
          >
            <FiMinus />
          </button>

          <span>
            {item.quantity}
          </span>

          <button
            onClick={() =>
              increaseQty(item.id)
            }
            className="w-8 h-8 border rounded"
          >
            <FiPlus />
          </button>
        </div>

        <span className="font-medium">
          ₹
          {item.price *
            item.quantity}
        </span>
      </div>
    </div>
  );
};

export default CartItem;