import { useState } from "react";
import axios from "axios";
import "../css/AddItemForm.css";

const categories = ["Poster", "Food", "Print", "Map", "Souvenir", "Guide", "Booklet"];

const AddItemForm = ({ onItemAdded }) => {
  const [form, setForm] = useState({
    title: "",
    category: "",
    price: "",
    description: "",
  });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");
  const [serverError, setServerError] = useState("");

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
    setSuccess("");
    setServerError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    axios
      .post("https://swiss-server-yvo6.onrender.com/api/items", {
        ...form,
        price: parseFloat(form.price),
      })
      .then((res) => {
        onItemAdded(res.data);
        setSuccess(`"${res.data.title}" was added successfully!`);
        setForm({ title: "", category: "", price: "", description: "" });
        setErrors({});
      })
      .catch((err) => {
        setServerError(
          err.response?.data?.error || "Something went wrong. Please try again."
        );
      });
  };

  return (
    <div className="add-form-wrap">
      <h3 className="add-form-title">Add a Swiss Item</h3>

      <form className="add-form" onSubmit={handleSubmit}>
        <div className="add-form-field">
          <label>Title</label>
          <input
            type="text"
            name="title"
            placeholder="e.g. Swiss Army Knife"
            value={form.title}
            onChange={handleChange}
          />
          {errors.title && <p className="add-form-error">{errors.title}</p>}
        </div>

        <div className="add-form-field">
          <label>Category</label>
          <select name="category" value={form.category} onChange={handleChange}>
            <option value="">Select a category</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
          {errors.category && <p className="add-form-error">{errors.category}</p>}
        </div>

        <div className="add-form-field">
          <label>Price ($)</label>
          <input
            type="number"
            name="price"
            placeholder="e.g. 12.99"
            value={form.price}
            onChange={handleChange}
            min="0.01"
            step="0.01"
          />
          {errors.price && <p className="add-form-error">{errors.price}</p>}
        </div>

        <div className="add-form-field">
          <label>Description</label>
          <textarea
            name="description"
            placeholder="Describe the item..."
            value={form.description}
            onChange={handleChange}
            rows="3"
          />
          {errors.description && <p className="add-form-error">{errors.description}</p>}
        </div>

        <button type="submit" className="add-form-btn">Add Item</button>

        {success && <p className="add-form-success">{success}</p>}
        {serverError && <p className="add-form-error">{serverError}</p>}
      </form>
    </div>
  );
};

export default AddItemForm;