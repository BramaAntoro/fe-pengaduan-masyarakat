export const Register = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
            <div className="w-full max-w-sm bg-white rounded-lg shadow-md p-6">
                <div className="flex flex-col items-center mb-6">
                    <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-600 text-white mb-4">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-8 w-8"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M9 17v-2h6v2a2 2 0 002 2h1a2 2 0 002-2v-2a2 2 0 012-2v-2a2 2 0 01-2-2V9a2 2 0 00-2-2h-1a2 2 0 00-2 2v2H9V9a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 01-2 2v2a2 2 0 012 2v2a2 2 0 002 2h1a2 2 0 002-2z"
                            />
                        </svg>
                    </div>
                    <h1 className="text-2xl font-bold mb-1">Create an Account</h1>
                    <p className="text-gray-500 text-sm text-center">
                        Join TickTrack Pro to manage your support tickets.
                    </p>
                </div>
                <form className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-1">
                            Name
                        </label>
                        <input
                            id="name"
                            type="text"
                            placeholder="John Doe"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-1">
                            Email
                        </label>
                        <input
                            id="email"
                            type="email"
                            placeholder="user@example.com"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium mb-1">
                            Password
                        </label>
                        <input
                            id="password"
                            type="password"
                            placeholder="••••••••"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
                    >
                        Create Account
                    </button>
                    <div className="mt-4 text-center text-sm text-gray-600">
                        Already have an account?
                    </div>
                </form>
            </div>
        </div>
    )
}
