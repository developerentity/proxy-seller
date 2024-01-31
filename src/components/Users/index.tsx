import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { useEffect } from 'react';
import { getUsers } from '../../app/slices/usersSlice';
import { Button, SearchInput, SortButton, UserItem } from './styles';
import { Container } from '../../styles/Container';
import Header from '../Header';
import { useSort } from '../../hooks/useSort';
import { useFilter } from '../../hooks/useFilter';


const UsersComponent = () => {

    const dispatch = useAppDispatch();
    const { users } = useAppSelector(store => store.userSlice);

    const { sortedItems, sortOrder, toggleSortOrder } = useSort(users);
    const { filteredItems, searchTerm, handleSearchChange } = useFilter(sortedItems);


    useEffect(() => {
        dispatch(getUsers())
    }, [dispatch]);

    return (
        <Container>
            <Header title='Users' />
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
                : <div />}
        </Container>
    )
};

export default UsersComponent;