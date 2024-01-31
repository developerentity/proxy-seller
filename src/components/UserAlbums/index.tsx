import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { getAlbumsForCertainUserById } from '../../app/slices/albumsSlice';
import { useEffect } from 'react';
import { AlbumItem } from './styles';
import { Container } from '../../styles/Container';
import Header from '../Header';


const UserAlbumsComponent = () => {

    let { userId } = useParams();
    const dispatch = useAppDispatch()
    const { albums } = useAppSelector(store => store.albumSlice)

    useEffect(() => {
        userId && dispatch(getAlbumsForCertainUserById(userId))
    }, [dispatch, userId])

    return (
        <Container>
            <Header
                shouldBackButtonBeShown
                title={`User's albums with ID ${userId}`} />
            {albums.length && albums.map(album => (
                <AlbumItem key={album.id}>
                    {album.title}
                </AlbumItem>
            ))}
        </Container>
    )
}

export default UserAlbumsComponent;