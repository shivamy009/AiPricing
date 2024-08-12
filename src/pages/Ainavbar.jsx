import React from 'react';
import { Link } from 'react-router-dom';

const Ainavbar = () => {
  return (
    <nav className="bg-purple-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">BookAI</h1>
        <div className="hidden md:flex space-x-8">
          <Link to="/features" className="hover:text-gray-300">Features</Link>
          <Link to="/how-it-works" className="hover:text-gray-300">How it Works</Link>
          <Link to="/roadmap" className="hover:text-gray-300">Roadmap</Link>
          <Link to="/api-docs" className="hover:text-gray-300">API Docs</Link>
          <Link to="/pricing" className="hover:text-gray-300">Pricing</Link>
        </div>
        <div className="space-x-2">
          <button className="bg-transparent border border-white py-2 px-4 rounded">Login</button>
          <button className="bg-blue-500 py-2 px-4 rounded">Sign Up</button>
        </div>
      </div>
    </nav>
  )
}

export default Ainavbar