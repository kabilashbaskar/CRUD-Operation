import React, { useContext } from 'react';
import { GlobalContext } from '../Context/GlobalState'
import { Link } from 'react-router-dom';
import {
    ListGroup,
    ListGroupItem,
    Button
} from 'reactstrap';

function UserList() {
    const { users, removeUser } = useContext(GlobalContext);
    console.log(users);
    return (
        <ListGroup className='mt-4'>
            {users.length > 0 ? (
                <>
   {users.map(users => (
                <ListGroupItem className='d-flex'>
                    <strong>{users.name}</strong>
                    <div className='ml-auto'>
                        <Link className='btn btn-warning mr-1' to={`/EditStudent/${users.id}`}>Edit</Link>
                        <Button onClick={() => removeUser(users.id)} color='danger'>Delete</Button>
                    </div>
                </ListGroupItem>
            ))}
                </>
            ) : (
                <h4 className='text-center'>No Students</h4>
            )}
        </ListGroup>
    )
}

export default UserList