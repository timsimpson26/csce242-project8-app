import { useState } from "react";
import axios from "axios";
import "../css/ItemModal.css";

const categories = ["Poster", "Food", "Print", "Map", "Souvenir", "Guide", "Booklet"];

const ItemModal = ({ item, onClose, onItemUpdated, onItemDeleted }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [form, setForm] = useState({
    title: item.title,
    category: item.category,
    price: item.price.toString(),
    description: item.description,
  });
  const [errors, setErrors] = useState({});
  const [successMsg, setSuccessMsg] = useState("");
  const [serverError, setServerError] = useState("");
  const [deleteConfirm, setDeleteConfirm] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!form.title || form.title.length < 2)
      newErrors.title = "Title must be at least 2 characters.";
    if (!form.category)
      newErrors.category = "Please select a category.";
    if (!form.price || isNaN(form.price) || parseFloat(form.price) < 0.01)
      newErrors.price = "Price must be a number greater than $0.";
    if (!form.description || form.description.length < 5)
      newErrors.description = "Description must be at least 5 characters.";
    return newErrors;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
    setSuccessMsg("");
    setServerError("");
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    axios
      .put(`https://swiss-server-yvo6.onrender.com/api/items/${item._id}`, {
        ...form,
        price: parseFloat(form.price),
      })
      .then((res) => {
        setSuccessMsg("Item updated successfully!");
        setIsEditing(false);
        onItemUpdated(res.data);
      })
      .catch((err) => {
        setServerError(
          err.response?.data?.error || "Failed to update item. Please try again."
        );
      });
  };

  const handleDelete = () => {
    axios
      .delete(`https://swiss-server-yvo6.onrender.com/api/items/${item._id}`)
      .then(() => {
        onItemDeleted(item._id);
        onClose();
      })
      .catch((err) => {
        setServerError(
          err.response?.data?.error || "Failed to delete item. Please try again."
        );
      });
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>✕</button>

        {!isEditing ? (
          <>
            <div className="modal-category">{item.category}</div>
            <h2 className="modal-title">{item.title}</h2>
            <p className="modal-description">{item.description}</p>
            <div className="modal-price">${item.price.toFixed(2)}</div>

            {successMsg && <p className="modal-success">{successMsg}</p>}
            {serverError && <p className="modal-error">{serverError}</p>}

            <div className="modal-actions">
              <button className="modal-btn-edit" onClick={() => setIsEditing(true)}>
                Edit
              </button>

              {!deleteConfirm ? (
                <button className="modal-btn-delete" onClick={() => setDeleteConfirm(true)}>
                  Delete
                </button>
              ) : (
                <div className="modal-delete-confirm">
                  <span>Are you sure?</span>
                  <button className="modal-btn-delete" onClick={handleDelete}>Yes, delete</button>
                  <button className="modal-btn-cancel" onClick={() => setDeleteConfirm(false)}>Cancel</button>
                </div>
              )}

              <button className="modal-cta" onClick={onClose}>Close</button>
            </div>
          </>
        ) : (
          <>
            <h2 className="modal-title">Edit Item</h2>
            <form className="modal-edit-form" onSubmit={handleEditSubmit}>
              <div className="modal-field">
                <label>Title</label>
                <input
                  type="text"
                  name="title"
                  value={form.title}
                  onChange={handleChange}
                />
                {errors.title && <p className="modal-error">{errors.title}</p>}
              </div>

              <div className="modal-field">
                <label>Category</label>
                <select name="category" value={form.category} onChange={handleChange}>
                  <option value="">Select a category</option>
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
                {errors.category && <p className="modal-error">{errors.category}</p>}
              </div>

              <div className="modal-field">
                <label>Price ($)</label>
                <input
                  type="number"
                  name="price"
                  value={form.price}
                  onChange={handleChange}
                  min="0.01"
                  step="0.01"
                />
                {errors.price && <p className="modal-error">{errors.price}</p>}
              </div>

              <div className="modal-field">
                <label>Description</label>
                <textarea
                  name="description"
                  value={form.description}
                  onChange={handleChange}
                  rows="3"
                />
                {errors.description && <p className="modal-error">{errors.description}</p>}
              </div>

              {serverError && <p className="modal-error">{serverError}</p>}

              <div className="modal-actions">
                <button type="submit" className="modal-btn-edit">Save Changes</button>
                <button
                  type="button"
                  className="modal-btn-cancel"
                  onClick={() => {
                    setIsEditing(false);
                    setErrors({});
                    setServerError("");
                  }}
                >
                  Cancel
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default ItemModal;