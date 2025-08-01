import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import fetchProfileAction from '../../redux/action/auth/fetchProfileAction'

export const Me = () => {   
    const meState = useSelector((state) => state.me)
    const token = useSelector((state) => state.login.token)
    const dispatch = useDispatch()

    useEffect(() => {
        if(token){
            dispatch(fetchProfileAction(token))
        }
    }, [token, dispatch])

    return (
        <div>
            {meState.user ? (
                <>
                    <p>name : {meState.user.name}</p>
                    <p>email : {meState.user.email}</p>
                    <p>role : {meState.user.role}</p>
                </>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    )
}
