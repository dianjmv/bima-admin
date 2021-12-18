import LoginLayout from '../LoginLayout';
import { useState } from 'react';
import { useLoginUserMutation } from '../../services/bima';
import { useDispatch } from 'react-redux';
import { setAuthAccess } from '../../store/slices/auth';
import { useRouter } from 'next/router';
import classNames from 'classnames/bind';

const Login = () => {
  const [userName, setUsername] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [login, { isLoading }] = useLoginUserMutation();
  const dispatch = useDispatch();
  const router = useRouter();
  const buttonClassName = classNames({
    'w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ':
      true,
    'cursor-not-allowed': isLoading
  });
  function handleUsername(event) {
    event.preventDefault();
    setUsername(event.target.value);
  }

  function handlePassword(event) {
    event.preventDefault();
    setUserPassword(event.target.value);
  }

  async function loginUser(e) {
    e.preventDefault();
    const result = await login({ username: userName, password: userPassword });
    if (!result.error as never) {
      dispatch(setAuthAccess(result.data));
      await router.push('/');
    }
  }

  console.log(isLoading);

  return (
    <LoginLayout>
      <div className="mt-6">
        <form className="space-y-6" onSubmit={loginUser}>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Username
            </label>
            <div className="mt-1">
              <input
                id="email"
                name="email"
                autoComplete="username"
                required
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                onChange={handleUsername}
                disabled={isLoading}
              />
            </div>
          </div>

          <div className="space-y-1">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <div className="mt-1">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                onChange={handlePassword}
                disabled={isLoading}
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label
                htmlFor="remember-me"
                className="ml-2 block text-sm text-gray-900"
              >
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <a
                href="#"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Forgot your password?
              </a>
            </div>
          </div>

          <div>
            <button
              disabled={isLoading}
              type="submit"
              className={buttonClassName}
            >
              {isLoading ? (
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-100"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
              ) : null}
              Sign in
            </button>
          </div>
        </form>
      </div>
    </LoginLayout>
  );
};
export default Login;
