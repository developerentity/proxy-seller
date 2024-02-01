import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { useEffect } from 'react';
import { getPostForCertainUserById } from '../../app/slices/postsSlice';
import { PostItem } from './styles';
import { Container } from '../../styles/Container';
import Header from '../Header';
import { addPeriodAtEnd, capitalizeFirstLetter, } from '../../utils/textFormatter';
import { defineUserName } from '../../utils/defineUserName';
import { getUsers } from '../../app/slices/usersSlice';
import Loading from '../Loading';


const UserPostsComponent = () => {

    let { userId } = useParams();
    const dispatch = useAppDispatch()
    const { appLoading } = useAppSelector(store => store.loadingSlice);
    const { posts } = useAppSelector(store => store.postsSlice)
    const { users } = useAppSelector(store => store.userSlice)

    const username = userId && users.length && defineUserName(users, userId)

    useEffect(() => {
        userId && dispatch(getPostForCertainUserById(userId))
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
                title={`${username}'s posts`} />
            {posts.length
                ? posts.map(post => (
                    <PostItem key={post.id}>
                        <h2>{addPeriodAtEnd(capitalizeFirstLetter(post.title))}</h2>
                        <p>{addPeriodAtEnd(capitalizeFirstLetter(post.body))}</p>
                    </PostItem>
                ))
                : <div />}
        </Container>
    )
}

export default UserPostsComponent;