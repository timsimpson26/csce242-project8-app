import "../css/ItemModal.css";

const ItemModal = ({ item, onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>✕</button>

        <div className="modal-category">{item.category}</div>
        <h2 className="modal-title">{item.title}</h2>
        <p className="modal-description">{item.description}</p>
        <div className="modal-price">${item.price.toFixed(2)}</div>

        <button className="modal-cta" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default ItemModal;