// SearchFilter.js
import  { useState } from "react";

const Task12 = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Example list of items
  const items = [
    "Apple",
    "Banana",
    "Cherry",
    "Date",
    "Elderberry",
    "Fig",
    "Grape",
  ];

  // Filter items based on the search term
  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Search Filter</h1>
      <input
        type="text"
        placeholder="Search items..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={inputStyle}
      />
      <ul style={listStyle}>
        {filteredItems.length > 0 ? (
          filteredItems.map((item, index) => <li key={index}>{item}</li>)
        ) : (
          <li>No items found</li>
        )}
      </ul>
    </div>
  );
};

// Inline styles
const inputStyle = {
  padding: "10px",
  width: "200px",
  marginBottom: "20px",
  fontSize: "16px",
};

const listStyle = {
  listStyleType: "none",
  padding: "0",
};

export default Task12;
