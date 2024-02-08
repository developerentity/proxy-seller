import { useParams } from 'react-router-dom';
import React, { useEffect } from 'react';
import { getPostForCertainUserById } from '../../redux/slices/postsSlice';
import { PostItem } from './styles';
import { Container } from '../../styles/Container';
import Header from '../Header';
import { addPeriodAtEnd, capitalizeFirstLetter, } from '../../utils/textFormatter';
import { defineUserName } from '../../utils/defineUserName';
import { getUsers } from '../../redux/slices/usersSlice';
import Loading from '../Loading';
import { useDispatch, useSelector } from 'react-redux';


const UserPostsComponent = () => {

    let { userId } = useParams();
    const dispatch = useDispatch()
    const { appLoading } = useSelector(store => store.loadingSlice);
    const { posts } = useSelector(store => store.postsSlice)
    const { users } = useSelector(store => store.userSlice)

    const username = userId && users.length && defineUserName(users, userId)

    useEffect(() => {
        userId && dispatch(getPostForCertainUserById(userId))
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
                title={`${username}'s posts`} />
            {posts.length
                ? posts.map(post => (
                    <PostItem key={post.id}>
                        <h2>{addPeriodAtEnd(capitalizeFirstLetter(post.title))}</h2>
                        <p>{addPeriodAtEnd(capitalizeFirstLetter(post.body))}</p>
                    </PostItem>))
                : <div></div>}
        </Container>
    )
}

export default UserPostsComponent;