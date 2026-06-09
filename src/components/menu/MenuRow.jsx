const MenuRow = ({
  item,
  items,
  setItems,
}) => {
  const handleDelete = () => {
    setItems(
      items.filter(
        (menu) => menu.id !== item.id
      )
    );
  };

  return (
    <tr className="border-b text-center">
      <td>{item.name}</td>
      <td>{item.category}</td>
      <td>₹{item.price}</td>
      <td>{item.status}</td>

      <td>
        <button className="text-blue-500 mr-3">
          Edit
        </button>

        <button
          onClick={handleDelete}
          className="text-red-500"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default MenuRow;