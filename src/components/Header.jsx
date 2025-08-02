import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import fetchProfileAction from '../redux/action/auth/fetchProfileAction'


export const Header = ({ onToggleSidebar, name }) => {
    const me = useSelector((state) => state.me)
    const token = useSelector((state) => state.login.token)
    const dispatch = useDispatch()

    useEffect(() => {
        if (token) {
            dispatch(fetchProfileAction(token))
        }
    }, [token, dispatch])

    return (
        <header className="flex justify-between items-center p-4 bg-white shadow md:pl-72">
            <div className="flex items-center space-x-4">
                <button className="md:hidden" onClick={onToggleSidebar}>
                    <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
                <span className="text-2xl font-bold text-blue-600">{name}</span>
            </div>
                <div className="flex items-center bg-gray-200 p-2 rounded-full">
                    <span className="ml-2 text-gray-700 hidden sm:block">
                        {me.user?.name || 'Memuat...'}
                    </span>
                </div>
        </header>
    )
}
