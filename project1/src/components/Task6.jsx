import { useState } from "react";
import Childs from "./CCTask6";
import './Task6.css'; // Import the CSS file

const Parents = () => {
  const [childData, setChildData] = useState("");

  // Callback function to receive data from the child
  const handleChildData = (data) => {
    setChildData(data);
  };

  return (
    <div className="parent-container">
      <h1 className="parent-header">Parent Component</h1>
      <p className="child-data-display">
        Data from Child: <strong>{childData || "No data yet"}</strong>
      </p>
      <Childs sendDataToParent={handleChildData} />
    </div>
  );
};

export default Parents;
