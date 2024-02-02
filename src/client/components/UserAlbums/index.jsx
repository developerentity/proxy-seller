import { useParams } from 'react-router-dom';
import { getAlbumsForCertainUserById } from '../../redux/slices/albumsSlice';
import React, { useEffect } from 'react';
import { AlbumItem } from './styles';
import { Container } from '../../styles/Container';
import Header from '../Header';
import { capitalizeFirstLetter, addPeriodAtEnd } from '../../utils/textFormatter';
import { defineUserName } from '../../utils/defineUserName';
import { getUsers } from '../../redux/slices/usersSlice';
import Loading from '../Loading';
import { useDispatch, useSelector } from 'react-redux';

const UserAlbumsComponent = () => {

    let { userId } = useParams();
    const dispatch = useDispatch()
    const { appLoading } = useSelector(store => store.loadingSlice);
    const { albums } = useSelector(store => store.albumSlice)
    const { users } = useSelector(store => store.userSlice)

    const username = userId && users.length && defineUserName(users, userId)

    useEffect(() => {
        userId && dispatch(getAlbumsForCertainUserById(userId))
    }, [dispatch, userId])


    useEffect(() => {
        !users.length && dispatch(getUsers())
    }, [dispatch, users]);

    if (appLoading) {
        return <Loading />;
    }

    return (
        <Container>
            <Header
                shouldBackButtonBeShown
                title={`${username}'s albums`} />
            {albums.length
                ? albums.map(album => (
                    <AlbumItem key={album.id}>
                        {addPeriodAtEnd(capitalizeFirstLetter(album.title))}
                    </AlbumItem>
                ))
                : <div />}
        </Container>
    )
}

export default UserAlbumsComponent;