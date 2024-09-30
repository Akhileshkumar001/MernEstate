import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import { useDispatch, useSelector } from 'react-redux';
import { signInStart, signInFailure, signInSuccess } from '../Redux/user/userSlice';

function LoginForm() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const { loading, error } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(signInStart());

    try {
      const res = await fetch('http://localhost:3000/auth/v1/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      console.log('API Response:', data); // Debugging API response
      dispatch(signInSuccess(data));  // Dispatch success with user data
      console.log('Navigating to home page'); // Log before navigation
      navigate('/');

      if (!data.success) {  // Check for error response
        dispatch(signInFailure(data.message)); // Dispatch error to Redux
        return;
      }

      // Handle successful sign-in
       // Navigate to the home page on success
    } catch (error) {
      dispatch(signInFailure('An error occurred. Please try again.'));  // Dispatch error message to Redux
      console.error('Fetch error:', error); // Log any fetch error
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Sign In</h2>
        
        {error && <p className="text-red-500 mb-4">{error}</p>}  {/* Display error message from Redux */}

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <button
          type="submit"
          className={`w-full py-2 px-4 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 uppercase ${loading ? 'bg-gray-400' : 'bg-slate-700 hover:bg-slate-600'}`}
          disabled={loading}
        >
          {loading ? 'Logging In...' : 'Login'}
        </button>

        <div className="mt-4 text-center">
          <p className="text-gray-600">
            Create an account?{' '}
            <Link to="/sign-up" className="text-indigo-500 hover:underline">
              Sign Up
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
