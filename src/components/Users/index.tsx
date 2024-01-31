import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { useEffect } from 'react';
import { getUsers } from '../../app/slices/usersSlice';
import { Button, UserItem, UsersContainer } from './styles';
import { Container } from '../../styles/Container';


const UsersComponent = () => {

    const dispatch = useAppDispatch()
    const { users, sortBy } = useAppSelector(store => store.userSlice)

    useEffect(() => {
        dispatch(getUsers())
    }, [dispatch])

    return (
        <UsersContainer>
            <Container>
                <h1>Users</h1>
                {users.map(user => (
                    <UserItem key={user.id}>
                        <h2>{user.username}</h2>
                        <Button to={`/users/${user.id}/albums`}>Albums</Button>
                        <Button to={`/users/${user.id}/posts`}>Posts</Button>
                    </UserItem>
                ))}
            </Container>
        </UsersContainer>
    )
}

export default UsersComponent;