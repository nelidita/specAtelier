import React from 'react'
import './Fetch.css';

export const Fetch = () => {

    const [ users, setUsers] = React.useState([])

    React.useEffect(
        () => {
            fetch("https://jsonplaceholder.typicode.com/todos/")
            .then(response => response.json())
            .then(data => setUsers(data));
       }, []
    );

    return (
        <div className='container'>
            {
                users.map( (user) => 
            <div className='card'  key={user.id}>
                    <h2>Id: {user.id}</h2>
                    <p>Title: {user.title}</p>
                    {
                        user.completed === true 
                        ? <p className='complete'>Complete</p> 
                        : <p className='incomplete'>Incomplete</p>
                    }
            </div>
                ) 
            }
        </div>
    )
}
