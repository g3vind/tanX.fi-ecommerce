import React, { useState } from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isNewUser, setIsNewUser] = useState(false);

  const handleLogin = () => {
    // Implement login logic here
    console.log("Login:", email, password);
  };

  const handleCreateAccount = () => {
    // Implement account creation logic here
    console.log("Create Account:", email, password);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 shadow-md rounded-md w-96">
        <h2 className="text-2xl font-bold mb-4">
          {isNewUser ? "Create Account" : "Login"}
        </h2>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-600 font-semibold mb-1"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-gray-600 font-semibold mb-1"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <Link to="/register" className="cursor-pointer">
          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              id="isNewUser"
              className="mr-2"
              checked={isNewUser}
              onChange={() => setIsNewUser(!isNewUser)}
            />
            <label htmlFor="isNewUser" className="text-gray-600">
              New User? Create an account
            </label>
          </div>
        </Link>

        <button
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
          onClick={isNewUser ? handleCreateAccount : handleLogin}
        >
          {isNewUser ? "Create Account" : "Login"}
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
