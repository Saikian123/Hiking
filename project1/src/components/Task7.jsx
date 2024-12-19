import { useState } from "react";
import Children7 from "./Ctask7";

const Pare = () => {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [errors, setErrors] = useState({});
  const [submittedData, setSubmittedData] = useState(null);

  // Update the state with form input values
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  // Validate the form
  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      setSubmittedData(formData);
      setFormData({ name: "", email: "" }); // Clear the form after submission
    }
  };

  return (
    <div
      style={{
        textAlign: "center",
        fontFamily: "Arial, sans-serif",
        margin: "20px auto",
        maxWidth: "400px",
      }}
    >
      <h1 style={{ marginBottom: "20px" }}>Parent Component</h1>
      <form
        onSubmit={handleSubmit}
        style={{
          padding: "20px",
          border: "1px solid #ccc",
          borderRadius: "8px",
          boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div style={{ marginBottom: "15px" }}>
          <label
            htmlFor="name"
            style={{
              display: "block",
              marginBottom: "5px",
              fontWeight: "bold",
            }}
          >
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
          />
          {errors.name && (
            <p style={{ color: "red", fontSize: "14px", marginTop: "5px" }}>
              {errors.name}
            </p>
          )}
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label
            htmlFor="email"
            style={{
              display: "block",
              marginBottom: "5px",
              fontWeight: "bold",
            }}
          >
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
          />
          {errors.email && (
            <p style={{ color: "red", fontSize: "14px", marginTop: "5px" }}>
              {errors.email}
            </p>
          )}
        </div>

        <button
          type="submit"
          style={{
            padding: "10px 20px",
            backgroundColor: "#007BFF",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Submit
        </button>
      </form>

      <div style={{ marginTop: "20px" }}>
        <Children7 name={submittedData?.name} email={submittedData?.email} />
      </div>
    </div>
  );
};

export default Pare;
