import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { useEffect } from 'react';
import { getPostForCertainUserById } from '../../app/slices/postsSlice';
import { PostItem, PostsContainer } from './styles';
import { Container } from '../../styles/Container';


const UserPostsComponent = () => {

    let { userId } = useParams();

    const dispatch = useAppDispatch()
    const { posts } = useAppSelector(store => store.postsSlice)

    useEffect(() => {
        userId && dispatch(getPostForCertainUserById(userId))
    }, [dispatch, userId])

    return (
        <PostsContainer>
            <Container>
                <h1>User's posts with ID: {userId}</h1>
                {posts.map(post => (
                    <PostItem key={post.id}>
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                    </PostItem>
                ))}
            </Container>
        </PostsContainer>
    )
}

export default UserPostsComponent;