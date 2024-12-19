import { useState } from "react";
import './CCtask6.css'; // Import the CSS file

// eslint-disable-next-line react/prop-types
const Childs = ({ sendDataToParent }) => {
  const [childInput, setChildInput] = useState("");

  // Handle input change
  const handleInputChange = (e) => {
    setChildInput(e.target.value);
  };

  // Handle sending data to the parent
  const handleSendData = () => {
    sendDataToParent(childInput); // Call the parent's callback with the current input value
    setChildInput(""); // Clear the input field after sending
  };

  return (
    <div className="child-container">
      <h2 className="child-header">Child Component</h2>
      <input
        type="text"
        value={childInput}
        onChange={handleInputChange}
        placeholder="Enter data to send"
        className="child-input"
      />
      <button onClick={handleSendData} className="child-button">
        Send Data to Parent
      </button>
    </div>
  );
};

export default Childs;
