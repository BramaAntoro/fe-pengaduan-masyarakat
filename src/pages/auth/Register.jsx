import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import registerAction from '../../redux/action/auth/registerAction';

export const Register = () => {

    const navigate = useNavigate();

    const { token } = useSelector((state) => state.login)

    if (token) {
        navigate('/')
    }

    const { register, handleSubmit } = useForm();
    const registerState = useSelector(state => state.register);
    const dispatch = useDispatch();

    const onSubmit = (value) => {
        dispatch(registerAction(value));
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
            <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
                <h1 className="text-3xl font-bold text-center mb-4">Sign Up</h1>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-1">
                            Email
                        </label>
                        <input
                            id="email"
                            type="text"
                            placeholder="Your email"
                            autoComplete="email"
                            required
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            {...register('email')}
                        />
                    </div>

                    <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-1">
                            Name
                        </label>
                        <input
                            id="name"
                            type="text"
                            placeholder="Your name"
                            autoComplete="name"
                            required
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            {...register('name')}
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm font-medium mb-1">
                            Password
                        </label>
                        <input
                            id="password"
                            type="password"
                            placeholder="Your password"
                            autoComplete="current-password"
                            required
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            {...register('password')}
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={registerState.loading}
                        className={`w-full py-2 rounded-md transition 
                            ${registerState.loading ? 'bg-blue-300 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700 text-white'}`}
                    >
                        {registerState.loading ? 'Signing in...' : 'Sign in'}
                    </button>

                    <div className="text-center text-sm text-gray-600 mt-2">
                        have an account? <Link to="/register" className="text-blue-600 hover:underline">Login</Link>
                    </div>

                    {Object.values(registerState.error || {}).map((errArray, idx) => (
                        <p key={idx} className="text-sm text-red-500 text-center mt-2">
                            {Array.isArray(errArray) ? errArray[0] : errArray}
                        </p>
                    ))}
                </form>
            </div>
        </div>
    );
};
