import React, { useState } from "react";
import "./Admin.css";

const AdminPage = () => {
  const [products, setProducts] = useState([]);

  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: null, // Use null for file
  });

  // handle text input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  // handle file input separately
  const handleFileChange = (e) => {
    setNewProduct({ ...newProduct, image: e.target.files[0] });
  };

  const addProduct = () => {
    if (!newProduct.name || !newProduct.price || !newProduct.image) {
      alert("Please fill all fields");
      return;
    }

    const product = {
      id: Date.now(),
      ...newProduct,
    };

    setProducts([...products, product]);
    setNewProduct({ name: "", price: "", image: null });
  };

  const deleteProduct = (id) => {
    setProducts(products.filter((p) => p.id !== id));
  };

  return (
    <div className="admin-page">
      <h1>Admin Dashboard</h1>

      {/* Form */}
      <div className="admin-form">
        <input
          type="text"
          placeholder="Product Name"
          name="name"
          value={newProduct.name}
          onChange={handleChange}
        />
        <input
          type="number"
          placeholder="Price"
          name="price"
          value={newProduct.price}
          onChange={handleChange}
        />
        <input
          type="file"
          id="image"
          name="image"
          onChange={handleFileChange} // ✅ handle file separately
        />
        <button onClick={addProduct}>Add Product</button>
      </div>

      {/* Product List */}
      <div className="admin-products">
        {products.map((product) => (
          <div className="admin-product-card" key={product.id}>
            {/* ✅ Use URL.createObjectURL to display uploaded image */}
            {product.image && (
              <img
                src={URL.createObjectURL(product.image)}
                alt={product.name}
                style={{ width: "120px", height: "120px", objectFit: "cover" }}
              />
            )}
            <h3>{product.name}</h3>
            <p>₹{product.price}</p>
            <button onClick={() => deleteProduct(product.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminPage;
