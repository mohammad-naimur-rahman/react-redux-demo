import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers, removerUser } from '../redux';

const UserContainer = () => {
    const users = useSelector(state => state.user.users);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);
    return (
        <div>
            <h3>From fetch</h3>
            {
                users.map(user => <p key={user.id} onClick={() => dispatch(removerUser(user.id))}>{user.name}</p>)
            }
        </div>
    );
};

export default UserContainer;