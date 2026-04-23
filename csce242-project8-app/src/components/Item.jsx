import "../css/Item.css";

const Item = ({ item, onSelect }) => {
  return (
    <div className="item-card" onClick={() => onSelect(item)}>
      {item.image && (
        <img src={item.image} alt={item.title}
          style={{ width: "100%", borderRadius: "8px", marginBottom: "8px", maxHeight: "180px", objectFit: "cover" }} />
      )}
      <div className="item-category">{item.category}</div>
      <h3 className="item-title">{item.title}</h3>
      <p className="item-description">{item.description}</p>
      <div className="item-footer">
        <span className="item-price">${item.price.toFixed(2)}</span>
        <button className="item-btn">View Details</button>
      </div>
    </div>
  );
};

export default Item;