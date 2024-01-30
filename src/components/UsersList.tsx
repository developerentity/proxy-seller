import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../app/hooks"
import { getUsers } from "../app/slices/usersSlice"
import { getAlbumsForCertainUserById } from "../app/slices/albumsSlice"
import { getPostForCertainUserById } from "../app/slices/postsSlice"




const UsersList = () => {

    const dispatch = useAppDispatch()
    const store = useAppSelector(store => store.userSlice)

    useEffect(() => {
        dispatch(getUsers())
        dispatch(getPostForCertainUserById(3))
    }, [dispatch])

    useEffect(() => {
        console.log(store, "DOU")
    }, [store])

    return (<>
        Users List
    </>)
}

export default UsersList;