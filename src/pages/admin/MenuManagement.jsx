import { useState } from "react";
import { menuItems } from "../../data/menuData";
import MenuTable from "../../components/menu/MenuTable";
import AddMenuModal from "../../components/menu/AddMenuModal";

const MenuManagement = () => {
  const [items, setItems] = useState(menuItems);
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold">
            Menu Management
          </h1>

          <p className="text-gray-500 mt-1">
            Manage dishes available in the café
          </p>
        </div>

        <button
          onClick={() => setShowModal(true)}
          className="bg-black text-white px-5 py-3 rounded-xl hover:bg-gray-800"
        >
          + Add New Dish
        </button>
      </div>

      {/* Menu Table */}
      <MenuTable
        items={items}
        setItems={setItems}
      />

      {/* Add Modal */}
      {showModal && (
        <AddMenuModal
          setItems={setItems}
          setShowModal={setShowModal}
        />
      )}
    </div>
  );
};

export default MenuManagement;