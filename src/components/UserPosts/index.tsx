import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { useEffect } from 'react';
import { getPostForCertainUserById } from '../../app/slices/postsSlice';
import { PostItem } from './styles';
import { Container } from '../../styles/Container';
import Header from '../Header';


const UserPostsComponent = () => {

    let { userId } = useParams();
    const dispatch = useAppDispatch()
    const { posts } = useAppSelector(store => store.postsSlice)

    useEffect(() => {
        userId && dispatch(getPostForCertainUserById(userId))
    }, [dispatch, userId])

    return (
        <Container>
            <Header
                shouldBackButtonBeShown
                title={`User's posts with ID: ${userId}`} />
            {posts.length && posts.map(post => (
                <PostItem key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                </PostItem>
            ))}
        </Container>
    )
}

export default UserPostsComponent;