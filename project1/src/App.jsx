
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Task1 from "./components/Task1";
import Task2 from "./components/Task2";
import Task3 from "./components/Task3";
import Task4 from "./components/Task4";
import Parent from "./components/Task5";
// import Parents from "./components/Task6";
import Pare from "./components/Task7";
import ToDoList from "./components/Task9";
import Task10 from "./components/Task10";
import Task12 from "./components/Task12";
import ControlledAccordions from "./components/Task13";
import Task11 from "./components/Task11";

// import UserList from "./comp2/UseEffect";
// import Cal from "./comp2/UseState";

const Navbar = () => (
    <nav className="navbar navbar-expand-lg navbar-light bg-light ">
        <div className="container-fluid">
            <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item"><Link className="nav-link" to="/Cards">Assignment1</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/Signin">Assignment2</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/Array">Assignment3</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/Theme">Assignment4</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/ParentToChild">Assignment5</Link></li>
                    {/* <li className="nav-item"><Link className="nav-link" to="/ChildTOPArent">Assignment6</Link></li> */}
                    <li className="nav-item"><Link className="nav-link" to="/Form">Assignment7</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/ToDoList">Assignment8</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/Counter">Assignment9</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/Search">Assignment10</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/Accordion">Assignment11</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/Fetch">Assignment12</Link></li>
                </ul>
            </div>
        </div>
    </nav>
);

const App = () => {
    return (
        <Router>
            <div className="container-fluid">
                <div className="row">
                    <div className="col">
                        <h1 style={{ textAlign: "center" }}>Hiking IT Assignments</h1>
                    </div>
                </div>
            </div>
            <Navbar />
            <div className="container mb-2">
                <div className="row">
                    <div className="col">
                        <Routes>
                            <Route path="/Cards" element={<Task1 />} />
                            <Route path="/Signin" element={<Task2 />} />
                            <Route path="/Array" element={<Task3 />} />
                            <Route path="/Theme" element={<Task4 />} />
                            <Route path="/ParentToChild" element={<Parent />} />
                            {/* <Route path="/ChildTOPArent" element={<Parents />} /> */}
                            <Route path="/Form" element={<Pare />} />
                            <Route path="/ToDoList" element={<ToDoList />} />
                            <Route path="/Counter" element={<Task10 />} />
                            <Route path="/Fetch" element={<Task11 />} />
                            <Route path="/Search" element={<Task12 />} />   
                            <Route path="/Accordion" element={<ControlledAccordions />} />
                            <Route path="*" element={<div >Select Assignments </div>} />
                        </Routes>
                    </div>
                </div>
            </div>
        </Router>
    );
};

export default App;



