import { useState } from "react";

const AddMenuModal = ({
  setItems,
  setShowModal,
}) => {
  const [name, setName] = useState("");
  const [category, setCategory] =
    useState("");
  const [price, setPrice] = useState("");

  const handleSave = () => {
    setItems((prev) => [
      ...prev,
      {
        id: Date.now(),
        name,
        category,
        price,
        status: "Active",
      },
    ]);

    setShowModal(false);
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg w-96">
        <h2 className="text-xl font-bold mb-4">
          Add Menu Item
        </h2>

        <input
          placeholder="Dish Name"
          className="border w-full p-2 mb-3"
          onChange={(e) =>
            setName(e.target.value)
          }
        />

        <input
          placeholder="Category"
          className="border w-full p-2 mb-3"
          onChange={(e) =>
            setCategory(e.target.value)
          }
        />

        <input
          placeholder="Price"
          className="border w-full p-2 mb-3"
          onChange={(e) =>
            setPrice(e.target.value)
          }
        />

        <div className="flex justify-end gap-3">
          <button
            onClick={() =>
              setShowModal(false)
            }
          >
            Cancel
          </button>

          <button
            onClick={handleSave}
            className="bg-black text-white px-4 py-2 rounded"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddMenuModal;