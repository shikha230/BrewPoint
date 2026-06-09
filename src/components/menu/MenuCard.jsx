import { FiEdit, FiTrash2 } from "react-icons/fi";

const MenuCard = ({
  item,
  onEdit,
  onDelete,
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-4 hover:shadow-lg transition">
      <img
        src={item.image}
        alt={item.name}
        className="h-40 w-full object-cover rounded-xl"
      />

      <div className="mt-3">
        <h3 className="font-bold text-lg">
          {item.name}
        </h3>

        <span className="text-xs bg-orange-100 text-orange-600 px-2 py-1 rounded-full">
          {item.category}
        </span>

        <p className="mt-2 text-xl font-semibold">
          ₹{item.price}
        </p>
      </div>

      <div className="flex gap-3 mt-4">
        <button
          onClick={() => onEdit(item)}
          className="flex-1 bg-blue-500 text-white py-2 rounded-lg"
        >
          <FiEdit />
        </button>

        <button
          onClick={() => onDelete(item.id)}
          className="flex-1 bg-red-500 text-white py-2 rounded-lg"
        >
          <FiTrash2 />
        </button>
      </div>
    </div>
  );
};

export default MenuCard;