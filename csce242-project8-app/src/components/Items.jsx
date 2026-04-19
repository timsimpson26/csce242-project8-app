import { useState, useEffect } from "react";
import axios from "axios";
import Item from "./Item";
import ItemModal from "./ItemModal";
import AddItemForm from "./addItemForm";
import "../css/Items.css";

const Items = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const [deleteSuccess, setDeleteSuccess] = useState("");

  useEffect(() => {
    axios
      .get("https://swiss-server-yvo6.onrender.com/api/items")
      .then((res) => {
        setItems(res.data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load items.");
        setLoading(false);
      });
  }, []);

  const handleItemAdded = (newItem) => {
    setItems((prev) => [...prev, newItem]);
  };

  const handleItemUpdated = (updatedItem) => {
    setItems((prev) =>
      prev.map((i) => (i._id === updatedItem._id ? updatedItem : i))
    );
    setSelectedItem(updatedItem);
  };

  const handleItemDeleted = (deletedId) => {
    setItems((prev) => prev.filter((i) => i._id !== deletedId));
    setDeleteSuccess("Item deleted successfully!");
    setTimeout(() => setDeleteSuccess(""), 3000);
  };

  if (loading) return <p className="items-status">Loading Swiss items...</p>;
  if (error) return <p className="items-status error">{error}</p>;

  return (
    <>
      {deleteSuccess && <p className="items-delete-success">{deleteSuccess}</p>}

      <div className="items-grid">
        {items.map((item) => (
          <Item key={item._id} item={item} onSelect={setSelectedItem} />
        ))}
      </div>

      <AddItemForm onItemAdded={handleItemAdded} />

      {selectedItem && (
        <ItemModal
          item={selectedItem}
          onClose={() => setSelectedItem(null)}
          onItemUpdated={handleItemUpdated}
          onItemDeleted={handleItemDeleted}
        />
      )}
    </>
  );
};

export default Items;