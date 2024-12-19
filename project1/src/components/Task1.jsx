
// import sdlc from '../assets/Sdlc.png';
// import './C.css'
// const Task1 = () => {
//   return (
//     <div className='cla'>
//     <div className="card" style={styles.card}>
//       <img
//         src={sdlc}
//         alt="Example"
//         style={styles.image}
//       />
//       <h6 style={styles.title}>SDLC</h6>
//       <p style={styles.text}>
//       SDLC stands for Software Development Life Cycle, which is a structured process for planning, 
//       designing, developing, testing, and maintaining software applications. 
//       </p>
//       <button style={styles.button} onClick={() => alert("Button Clicked!")}>
//         Click Me
//       </button>
//     </div>
//     </div>
//   );
// };

// const styles = {

//   card:{
//     border: "1px solid #ddd",
//     borderRadius: "8px",
//     padding: "16px",
//     maxWidth: "300px",
//     textAlign: "center",
//     boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//   },

//   image: {
//     width: "100%",
//     height: "auto",
//     borderRadius: "8px",
//   },
//   title: {
//     fontSize: "1.5em",
//     margin: "16px 0",
//   },
//   text: {
//     fontSize: "1em",
//     color: "#555",
//   },
//   button: {
//     padding: "10px 20px",
//     backgroundColor: "#007bff",
//     color: "#fff",
//     border: "none",
//     borderRadius: "4px",
//     cursor: "pointer",
//   },
// };

// export default Task1;


// import Task1 from "./components/Task1";

// function App() {
//   return (
//     <div style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}>
//       <Task1 />
//     </div>
//   );
// }

// export default App;




import sdlc from '../assets/Sdlc.png';
import './Task1.css'
const Task1 = () => {
  return (
    <div className='cla'>
    <div className='card' >
      <img
        src={sdlc}
        alt="Example"
        
        className='image'
      />
      <h6 className='title'>SDLC</h6>
      <p className='text'>
      SDLC stands for Software Development Life Cycle, which is a structured process for planning, 
      designing, developing, testing, and maintaining software applications. 
      </p>
      <button className='button' onClick={() => alert("Button Clicked!")}>
        Click Me
      </button>
    </div>
    </div>
  );
};



export default Task1;