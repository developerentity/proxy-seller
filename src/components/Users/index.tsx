import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { useEffect } from 'react';
import { getUsers } from '../../app/slices/usersSlice';


const UsersComponent = () => {

    const dispatch = useAppDispatch()
    const { users, sortBy } = useAppSelector(store => store.userSlice)

    useEffect(() => {
        dispatch(getUsers())
    }, [dispatch])

    return (
        <div>
            <h1>Users</h1>
            {users.map(user => (
                <div key={user.id}>
                    <p>{user.username}</p>
                    <button>
                        <Link to={`/users/${user.id}/albums`}>Albums</Link>
                    </button>
                    <button>
                        <Link to={`/users/${user.id}/posts`}>Posts</Link>
                    </button>
                </div>
            ))}
        </div>
    )
}

export default UsersComponent;