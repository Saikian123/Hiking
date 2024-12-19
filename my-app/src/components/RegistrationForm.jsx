import  { useState } from 'react';
import { Box, TextField, Button, Typography, Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const RegistrationForm = () => {
    const [formData, setFormData] = useState({ username: '', password: '' });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleRegister = async () => {
        try {
            // Fetch existing users from the JSON server
            const { data: users } = await axios.get('http://localhost:3005/users');

            //  if the username already exists
            const userExists = users.some((user) => user.username === formData.username);
            if (userExists) {
                alert('User already exists');
                return;
            }

            // Calculate the new user ID (increment based on existing users)
            const newId = users.length > 0 ? Math.max(...users.map((user) => Number(user.id))) + 1 : 1;

            // Create the new user object
            const newUser = { id: String(newId), ...formData };

            // Add the new user to the server
            await axios.post('http://localhost:3005/users', newUser);

            // Show success message
            alert('Registration successful!');

            // Store the user as logged in
            localStorage.setItem('isLoggedIn', 'true');

            // Navigate to the dashboard
            navigate('/dashboard');
        } catch (error) {
            console.error(error);
            alert('Error during registration');
        }
    };

    return (
        <Box sx={{ maxWidth: 400, mx: 'auto', mt: 5, p: 3, boxShadow: 3 }}>
            <Typography variant="h4" textAlign="center" gutterBottom>
                Register
            </Typography>
            <TextField
                fullWidth
                margin="normal"
                label="Username"
                name="username"
                value={formData.username}
                onChange={handleChange}
            />
            <TextField
                fullWidth
                margin="normal"
                label="Password"
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
            />
            <Button fullWidth variant="contained" color="primary" onClick={handleRegister}>
                Register
            </Button>
            <Typography textAlign="center" mt={2}>
                Already have an account?{' '}
                <Link href="/login" underline="hover">
                    Login
                </Link>
            </Typography>
        </Box>
    );
};

export default RegistrationForm;
