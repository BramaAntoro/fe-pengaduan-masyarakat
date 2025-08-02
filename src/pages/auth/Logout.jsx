import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import logoutAction from "../../redux/action/auth/LogoutAction"
import { useNavigate } from "react-router-dom"

export const Logout = () => {

    const dispatch = useDispatch()
    const token = useSelector((state) => state.login.token)
    const navigate = useNavigate()

    useEffect(() => {
        if(token){
            dispatch(logoutAction(token))
        } else {
            navigate('/')
        }
    }, [dispatch, token, navigate])

    return (
        <div>Logout</div>
    )
}
