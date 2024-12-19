import  { useState, useEffect } from 'react';

function UserList() {
  const [users, setUsers] = useState([]); // State to store user data
  const [loading, setLoading] = useState(true); // State to manage loading status

  useEffect(() => {
    // Side effect: Fetching data from an API
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        setUsers(data); // Update users state
        setLoading(false); // Set loading to false
      })
      .catch(error => console.error('Error fetching users:', error));
  }, []); // Empty dependency array means this runs once after the component mounts

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
