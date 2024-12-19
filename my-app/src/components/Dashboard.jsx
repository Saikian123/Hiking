// import React from 'react';
import { AppBar, Toolbar, Button, Typography, Box } from '@mui/material';
import { Outlet, useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('isLoggedIn');
        navigate('/login');
    };

    return (
        <Box>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" sx={{ flexGrow: 1 }}>
                        Dashboard
                    </Typography>
                    <Button color="inherit" onClick={() => navigate('/Home')}>
                        Home
                    </Button>
                    <Button color="inherit" onClick={() => navigate('/tasks')}>
                        Tasks
                    </Button>
                    <Button color="inherit" onClick={handleLogout}>
                        Logout
                    </Button>
                </Toolbar>
            </AppBar>
            <Box sx={{ p: 3 }}>
                <Outlet />
            </Box>
        </Box>
    );
};

export default Dashboard;

