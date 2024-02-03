import React, { useEffect, useState } from 'react';
import { getUsers } from '../../redux/slices/usersSlice';
import { Button, NoUsersFound, SearchInput, SortButton, UserItem } from './styles';
import { Container } from '../../styles/Container';
import Header from '../Header';
import { useSort } from '../../hooks/useSort';
import { useFilter } from '../../hooks/useFilter';
import Loading from '../Loading';
import { useDispatch, useSelector } from 'react-redux';


const UsersComponent = () => {

    const dispatch = useDispatch();
    const { appLoading } = useSelector(store => store.loadingSlice);
    const { users } = useSelector(store => store.userSlice);

    const { sortedItems, sortOrder, toggleSortOrder } = useSort(users);
    const { filteredItems, searchTerm, handleSearchChange } = useFilter(sortedItems);

    const [count, setCount] = useState(0);

    useEffect(() => {
        !users.length && dispatch(getUsers())
    }, [dispatch, users]);

    if (appLoading) {
        return <Loading />;
    }

    return (
        <Container>
            <Header title='Users' />
            <button onClick={() => setCount(count + 1)}>
                You clicked me {count} times
            </button>
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '10px' }}>
                <SortButton onClick={toggleSortOrder}>
                    Sort By: {sortOrder ? sortOrder.toUpperCase() : "OFF"}
                </SortButton>
                <SearchInput
                    type="text"
                    value={searchTerm}
                    onChange={(e) => handleSearchChange(e.target.value)}
                    placeholder="Search..."
                />
            </div>
            {filteredItems.length
                ? filteredItems.map(user => (
                    <UserItem key={user.id}>
                        <h2>{user.username}</h2>
                        <Button to={`/users/${user.id}/albums`}>Albums</Button>
                        <Button to={`/users/${user.id}/posts`}>Posts</Button>
                    </UserItem>
                ))
                : <NoUsersFound>No users found</NoUsersFound>}
        </Container>
    )
};

export default UsersComponent;