import useCart from "../../hooks/useCart";

const InvoiceItems = () => {
  const { cartItems } = useCart();

  return (
    <div className="space-y-3">
      {cartItems.map((item) => (
        <div
          key={item.id}
          className="flex justify-between"
        >
          <span>
            {item.name} x{item.quantity}
          </span>

          <span>
            ₹
            {item.price *
              item.quantity}
          </span>
        </div>
      ))}
    </div>
  );
};

export default InvoiceItems;