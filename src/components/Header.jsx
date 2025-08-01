export const Header = ({onToggleSidebar, name}) => {
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
            <div className="flex items-center space-x-4">
                <div className="relative">
                    <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
                    <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405..." />
                    </svg>
                </div>
                <div className="flex items-center bg-gray-200 p-2 rounded-full">
                    <span className="bg-blue-500 text-white rounded-full px-2 py-1 text-sm">AD</span>
                    <span className="ml-2 text-gray-700 hidden sm:block">Admin</span>
                </div>
            </div>
        </header>
    )
}
