import  { useState } from "react";
import './Task2.css'

const Task2 = () => {
  // State to track whether the user is logged in or not
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Toggle the logged-in state
  const toggleLoginState = () => {
    setIsLoggedIn((prevState) => !prevState);
  };

  return (
    <div className="task2container">
      <h1 className="message">
        {isLoggedIn ? "Hello, User!" : "Please Log In"}
      </h1>
      <button className="button" onClick={toggleLoginState}>
        {isLoggedIn ? "Log Out" : "Log In"}
      </button>
    </div>
  );
};



export default Task2;



// import Task2 from "./components/Task2";


// function App() {
//   return <Task2 />;
// }

// export default App;
