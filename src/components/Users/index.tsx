import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { useEffect } from 'react';
import { getUsers } from '../../app/slices/usersSlice';
import { Button, UserItem } from './styles';
import { Container } from '../../styles/Container';
import Header from '../Header';


const UsersComponent = () => {

    const dispatch = useAppDispatch()
    const { users, sortBy } = useAppSelector(store => store.userSlice)

    useEffect(() => {
        dispatch(getUsers())
    }, [dispatch])

    return (
        <Container>
            <Header title='Users' />
            {users.map(user => (
                <UserItem key={user.id}>
                    <h2>{user.username}</h2>
                    <Button to={`/users/${user.id}/albums`}>Albums</Button>
                    <Button to={`/users/${user.id}/posts`}>Posts</Button>
                </UserItem>
            ))}
        </Container>
    )
}

export default UsersComponent;