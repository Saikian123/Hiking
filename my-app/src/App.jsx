
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import RegistrationForm from './components/RegistrationForm';
import LoginPage from './components/LoginPage';
import Dashboard from './components/Dashboard';
import Tasks from './components/Tasks';
import PrivateRoute from './components/PrivateRoute';
import HomePage from './components/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
         <Route
          path="/Home"
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
        />
        <Route
          path="/tasks"
          element={
            <PrivateRoute>
              <Tasks />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
