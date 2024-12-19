import  { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, TextField, Button, Typography, Link } from '@mui/material';
import axios from 'axios';

const LoginPage = () => {
    const [formData, setFormData] = useState({ username: '', password: '' });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleLogin = async () => {
        try {
            const { data: users } = await axios.get('http://localhost:3005/users');
            const user = users.find(
                (u) => u.username === formData.username && u.password === formData.password
            );

            if (user) {
                localStorage.setItem('isLoggedIn', 'true');
                navigate('/dashboard');
            } else {
                alert('Invalid credentials');
            }
        } catch (error) {
            console.error(error);
            alert('Error during login');
        }
    };

    return (
        <Box sx={{ maxWidth: 400, mx: 'auto', mt: 5, p: 3, boxShadow: 3 }}>
            <Typography variant="h4" textAlign="center" gutterBottom>
                Login
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
            <Button fullWidth variant="contained" color="secondary" onClick={handleLogin}>
                Login
            </Button>
            <Typography textAlign="center" mt={2}> Dont have an account?{' '}
                <Link href="/register" underline="hover">
                    Register
                </Link>
            </Typography>
        </Box>
    );
};

export default LoginPage;
