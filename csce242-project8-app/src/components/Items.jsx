import { useState, useEffect } from "react";
import axios from "axios";
import Item from "./Item";
import ItemModal from "./ItemModal";
import "../css/Items.css";

const Items = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    axios
      .get("https://swiss-server-yvo6.onrender.com/api/items")
      .then((res) => {
        setItems(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to load items.");
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="items-status">Loading Swiss items...</p>;
  if (error) return <p className="items-status error">{error}</p>;

  return (
    <>
      <div className="items-grid">
        {items.map((item) => (
          <Item key={item._id} item={item} onSelect={setSelectedItem} />
        ))}
      </div>

      {selectedItem && (
        <ItemModal item={selectedItem} onClose={() => setSelectedItem(null)} />
      )}
    </>
  );
};

export default Items;