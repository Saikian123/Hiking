import { useEffect, useState } from "react";
import axios from "axios";

const Task11Axios = () => {
  const [data, setData] = useState([]); // State for storing data
  const [loading, setLoading] = useState(true); // State for loading indicator
  const [error, setError] = useState(null); // State for error handling

  useEffect(() => {
    // Fetch data from API using Axios
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        setData(response.data); // Set data
        setLoading(false); // Set loading to false
      })
      .catch((error) => {
        setError(error.message); // Set error message
        setLoading(false); // Set loading to false
      });
  }, []); // Empty dependency array ensures this runs once when the component mounts




  // Render loading state
  if (loading) {
    return <h2>Loading...</h2>;
  }

  // Render error state
  if (error) {
    return <h2>Error: {error}</h2>;
  }

  // Render data
  return (
    <div>
      <h1>Fetched Data (Axios)</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <strong>{item.title}</strong>: {item.body}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Task11Axios;
