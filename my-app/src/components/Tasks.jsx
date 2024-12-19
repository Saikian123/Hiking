import { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Tasks = () => {
    const [tasks, setTasks] = useState([]);
    const navigate = useNavigate(); // Initialize the useNavigate hook

    useEffect(() => {
        axios.get('http://localhost:3005/tasks').then((response) => {
            setTasks(response.data);
        });
    }, []);

    const handleNavigateToDashboard = () => {
        navigate('/dashboard'); // Navigate to the dashboard
    };

    return (
        <div>
            <TableContainer component={Paper} sx={{ marginBottom: 2 }}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Task Name</TableCell>
                            <TableCell>Status</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {tasks.map((task) => (
                            <TableRow key={task.id}>
                                <TableCell>{task.id}</TableCell>
                                <TableCell>{task.name}</TableCell>
                                <TableCell>{task.status}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            {/* Button to navigate to the dashboard */}
            <Button variant="contained" color="primary" onClick={handleNavigateToDashboard}>
                Go to Dashboard
            </Button>
        </div>
    );
};

export default Tasks;
