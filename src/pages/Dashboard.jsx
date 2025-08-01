import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

export const Dashboard = () => {

    const { token } = useSelector((state) => state.login)
    const navigate = useNavigate('')

    useEffect(() => {
        if(!token){
            navigate('/login', {replace: true})
        }
    }, [token, navigate])


    return (
        <div>Dashboard</div>
    )
}