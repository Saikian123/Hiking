// HomePage.js

import { useNavigate } from "react-router-dom";
import {  Button } from '@mui/material';
const HomePage = () => {

    const navigate = useNavigate(); // Initialize the useNavigate hook

    const handleNavigateToDashboard = () => {
        navigate('/dashboard'); // Navigate to the dashboard
    };
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Welcome to Car World</h1>
      <p style={styles.paragraph}>
        Cars are more than just a mode of transportation; they symbolize freedom, innovation, and design.
        From sleek sedans to rugged SUVs, the automotive world offers something for everyone. 
        Explore our collection of cars and discover the perfect match for your lifestyle!
      </p>

      <h2 style={styles.subHeader}>Popular Car Brands</h2>
      <ul style={styles.list}>
        <li>Toyota</li>
        <li>Ford</li>
        <li>BMW</li>
        <li>Mercedes-Benz</li>
        <li>Tesla</li>
      </ul>

     

            <Button variant="contained" color="primary" onClick={handleNavigateToDashboard}>
                Go to Dashboard
            </Button>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    lineHeight: '1.6',
    textAlign: 'center',
  },
  header: {
    fontSize: '2.5rem',
    marginBottom: '20px',
    color: '#333',
  },
  paragraph: {
    fontSize: '1.2rem',
    marginBottom: '20px',
    color: '#555',
  },
  subHeader: {
    fontSize: '1.8rem',
    margin: '20px 0',
    color: '#333',
  },
  list: {
    listStyle: 'none',
    padding: 0,
  },
  image: {
    maxWidth: '100%',
    height: 'auto',
    borderRadius: '10px',
    marginTop: '20px',
  },
};

export default HomePage;
