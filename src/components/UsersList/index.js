import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import * as userActions from '../../actions/userActions';
import uuid from 'uuid/v4';

export default function UsersList() {
    const [userName, setUserName] = useState('');
    const [userJob, setUserJob] = useState('');
    const users = useSelector(state => state.user.data);
    const dispatch = useDispatch();

    function addUserFunction(e) {
        e.preventDefault();
        try {
            dispatch(userActions.addUserAction(
                {
                    id: uuid(),
                    name: userName,
                    job: userJob
                }
            ));
            setUserName('');
            setUserJob('')
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <h1>Users</h1>
            <ul>
                {users && users.map(user => <li key={user.id}>Name: {user.name}, Jobs: {user.job}</li>)}
            </ul>

            <form onSubmit={e => addUserFunction(e)}>
                <input type="text" placeholder="Name" value={userName} onChange={e => setUserName(e.target.value)} /> <br />
                <input type="text" placeholder="Job" value={userJob} onChange={e => setUserJob(e.target.value)} /> <br />
                <input type="submit" value="Add user" />
            </form>
        </>
    );
}
