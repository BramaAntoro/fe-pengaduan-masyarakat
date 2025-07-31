import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from 'react-hook-form';
import loginAction from '../redux/action/auth/loginAction';

export const Login = () => {
    const { register, handleSubmit } = useForm();
    const loginState = useSelector(state => state.loginReducer);
    const dispatch = useDispatch();

    const onSubmit = (value) => {
        dispatch(loginAction(value));
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
            <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
                <h1 className="text-3xl font-bold text-center mb-4">Sign in</h1>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div>
                        <label htmlFor="username" className="block text-sm font-medium mb-1">
                            Username
                        </label>
                        <input
                            id="username"
                            type="text"
                            name="username"
                            placeholder="Your username"
                            autoComplete="username"
                            required
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            {...register('username')}
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium mb-1">
                            Password
                        </label>
                        <input
                            id="password"
                            type="password"
                            name="password"
                            placeholder="Your password"
                            autoComplete="password"
                            required
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            {...register('password')}
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
                    >
                        Sign in
                    </button>
                    <div className="text-center text-sm text-gray-600 mt-2">
                        Don't have an account? <Link to="/register" className="text-blue-600 hover:underline">Register</Link>
                    </div>

                    {/* Tampilkan error dari Redux */}
                    {
                        !!loginState?.err?.errors &&
                        loginState.err.errors.map((e, i) => (
                            <p
                                key={i}
                                className="text-sm text-red-500 text-center"
                            >
                                {e.msg}
                            </p>
                        ))
                    }
                </form>
            </div>
        </div>
    );
};