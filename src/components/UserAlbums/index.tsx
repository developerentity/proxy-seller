import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { getAlbumsForCertainUserById } from '../../app/slices/albumsSlice';
import { useEffect } from 'react';
import { AlbumItem } from './styles';
import { Container } from '../../styles/Container';
import Header from '../Header';
import { capitalizeFirstLetter, addPeriodAtEnd } from '../../utils/textFormatter';
import { defineUserName } from '../../utils/defineUserName';
import { getUsers } from '../../app/slices/usersSlice';
import Loading from '../Loading';

const UserAlbumsComponent = () => {

    let { userId } = useParams();
    const dispatch = useAppDispatch()
    const { appLoading } = useAppSelector(store => store.loadingSlice);
    const { albums } = useAppSelector(store => store.albumSlice)
    const { users } = useAppSelector(store => store.userSlice)

    const username = userId && users.length && defineUserName(users, userId)

    useEffect(() => {
        userId && dispatch(getAlbumsForCertainUserById(userId))
    }, [dispatch, userId])


    useEffect(() => {
        !users.length && dispatch(getUsers())
    }, [dispatch]);

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