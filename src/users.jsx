import React, { useState, useEffect } from "react";

const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('../index.html');
                const data = await response.json();
                setUsers(data);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h2>Los usuarios son:</h2>
            <ul>
                {users.map((u) => (
                    <li key={u.id}>
                        {u.name} - {u.username}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Users;