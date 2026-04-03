import "../css/Item.css";

const Item = ({ item, onSelect }) => {
  return (
    <div className="item-card" onClick={() => onSelect(item)}>
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