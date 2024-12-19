
import { Navigate } from 'react-router-dom';
// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ children }) => {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    if (!isLoggedIn) {
        return <Navigate to="/login" />;
    }
    return children;
};

export default PrivateRoute;
