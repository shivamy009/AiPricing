import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-6xl font-bold text-purple-700 mb-4">404</h1>
        <p className="text-2xl font-semibold text-gray-800 mb-4">Page Not Found</p>
        <p className="text-gray-600 mb-8">Sorry, the page you are looking for does not exist.</p>
        <Link to="/" className="bg-purple-700 text-white py-2 px-4 rounded hover:bg-purple-800">
          Go to Homepage
        </Link>
      </div>
    </div>
  );
};

 
export default ErrorPage;
