import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { getAlbumsForCertainUserById } from '../../app/slices/albumsSlice';
import { useEffect } from 'react';
import { AlbumItem, AlbumsContainer } from './stylex';
import { Container } from '../../styles/Container';


const UserAlbumsComponent = () => {
    let { userId } = useParams();

    const dispatch = useAppDispatch()
    const { albums } = useAppSelector(store => store.albumSlice)

    useEffect(() => {
        userId && dispatch(getAlbumsForCertainUserById(userId))
    }, [dispatch, userId])

    return (
        <AlbumsContainer>
            <Container>
                <h1>User's albums with ID {userId}</h1>
                {albums.map(album => (
                    <AlbumItem key={album.id}>
                        {album.title}
                    </AlbumItem>
                ))}
            </Container>
        </AlbumsContainer>
    )
}

export default UserAlbumsComponent;