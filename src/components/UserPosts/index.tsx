import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { useEffect } from 'react';
import { getPostForCertainUserById } from '../../app/slices/postsSlice';


const UserPostsComponent = () => {

    let { userId } = useParams();

    const dispatch = useAppDispatch()
    const { posts } = useAppSelector(store => store.postsSlice)

    useEffect(() => {
        userId && dispatch(getPostForCertainUserById(userId))
    }, [dispatch, userId])

    return (
        <div>
            <h2>User's posts with ID: {userId}</h2>;
            {posts.map(post => (
                <div key={post.id}>
                    <p>{post.title}</p>
                    <p>{post.body}</p>
                </div>
            ))}
        </div>
    )
}

export default UserPostsComponent;