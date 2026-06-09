import MenuRow from "./MenuRow";

const MenuTable = ({ items, setItems }) => {
  return (
    <div className="bg-white rounded-lg shadow">
      <table className="w-full">
        <thead>
          <tr className="border-b">
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {items.map((item) => (
            <MenuRow
              key={item.id}
              item={item}
              items={items}
              setItems={setItems}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MenuTable;