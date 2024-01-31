import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { getAlbumsForCertainUserById } from '../../app/slices/albumsSlice';
import { useEffect } from 'react';


const UserAlbumsComponent = () => {
    let { userId } = useParams();

    const dispatch = useAppDispatch()
    const { albums } = useAppSelector(store => store.albumSlice)

    useEffect(() => {
        userId && dispatch(getAlbumsForCertainUserById(userId))
    }, [dispatch, userId])

    return (
        <div>
            <h2>User's albums with ID {userId}</h2>;
            {albums.map(post => (
                <div key={post.id}>
                    <p>{post.title}</p>
                </div>
            ))}
        </div>
    )
}

export default UserAlbumsComponent;