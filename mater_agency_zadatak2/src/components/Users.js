import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Users = () => {
    const [users, setUsers] = useState();

    useEffect(() => {
       fetch('https://random-data-api.com/api/v2/users?size=10')
       .then(response => response.json())
       .then(users => {
            console.log(users);
            setUsers(users)
        })
        .catch(error => {
            console.log(error);
        });
    }, []);

    return (
        <ul className="users">
            {
                users && users.map((user, index) => 
                    <li key={index}>
                        <Link to={`/users/${user.id}`} state={{user}}>
                            <div className="card">
                                <div className="img-wrapper"><img src={user.avatar} alt={user.first_name} /></div>
                                <h2>{user.first_name} {user.last_name}</h2>
                                <p>{user.employment.title}</p>
                            </div>                            
                        </Link>
                    </li>
                )
            }
        </ul>
    );
}

export default Users;