import { useEffect } from "react"
import { useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"

export const Dashboard = () => {

    const { token } = useSelector((state) => state.login)
    const navigate = useNavigate('')

    useEffect(() => {
        if(!token){
            navigate('/login', {replace: true})
        }
    }, [token, navigate])


    return (
        <div>
            <h1>Dashboard</h1>
            <Link to="/logout">Logout</Link>
            <hr />
            <Link to="/me">Profile</Link>
        </div>
    )
}