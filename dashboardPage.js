import React from 'react';
import Navbar from './Navbar';
import EnrolledCourses from './EnrolledCourses';

function DashboardPage() {
  // Get the current logged in user from localStorage, if available
  const currentUser = JSON.parse(localStorage.getItem('currentUser')) || {};

  // Function to handle logout
  const handleLogout = () => {
    localStorage.removeItem('currentUser'); // Remove user data
    window.location.href = '/login'; // Redirect to login page
  };

  return (
    <div className="flex h-screen w-full">
      {/* Left Sidebar */}
      <div className="w-64 border-r border-gray-300 flex flex-col">
        {/* Profile section */}
        <div className="p-4 border-b border-gray-300">
          <div className="flex flex-col items-center">
            <div className="avatar"></div>
            <div className="w-20 h-20 rounded-full border-2 border-gray-400 flex items-center justify-center mb-2">
              {/* Profile icon placeholder */}
            </div>
            <h3 className="font-medium">{currentUser.username || "Gloribel Rejalbo"}</h3>
            <p className="text-sm text-black-600">Student ID: {currentUser.id || "123456789"}</p>
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="flex-1">
          <ul className="py-4">
            <li className="px-6 py-3 hover:bg-gray-100 cursor-pointer">Profile</li>
            <li className="px-6 py-3 bg-gray-100 font-medium cursor-pointer">DashBoard</li>
            <li className="px-6 py-3 hover:bg-gray-100 cursor-pointer">Projects</li>
            <li className="px-6 py-3 hover:bg-gray-100 cursor-pointer">Calendar</li>
            <li className="px-6 py-3 hover:bg-gray-100 cursor-pointer">Setting</li>
          </ul>
        </nav>

        {/* Log out button at bottom */}
        <div className="mt-auto mb-6 px-6">
          <button 
            className="text-gray-700 hover:underline"
            onClick={handleLogout}
          >
            Log Out
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8 overflow-y-auto">
        {/* Header with search */}
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-3xl font-medium">Dashboard</h1>
          <div className="relative w-96">
            <input
              type="text"
              className="w-full border border-gray-300 rounded-md py-2 px-4"
              placeholder="Search..."
            />
            <button className="absolute right-3 top-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
        </div>

        {/* Recent Activity Section */}
        <div className="mb-10">
          <h2 className="text-xl font-medium mb-6">Recent Activity</h2>
          <div className="flex space-x-6">
            <div className="w-1/3 border border-gray-300 rounded-3xl p-6 flex items-center justify-center">
              <p className="text-center">Web Development</p>
            </div>
            <div className="w-1/3 border border-gray-300 rounded-3xl p-6">
              <p className="text-center">Performance Innovation Task in Life and Works of Rizal</p>
            </div>
            <div className="w-1/3 border border-gray-300 rounded-3xl p-6">
              <p className="text-center">Packet Tracer Installation and Configuration</p>
            </div>
          </div>
        </div>
        
        {/* Projects Section */}
        <div className="mb-10">
          <h2 className="text-xl font-medium mb-6">Projects</h2>
          <div className="flex space-x-6">
            <div className="w-1/3 border border-gray-300 rounded-3xl p-6 flex items-center justify-center cursor-pointer hover:bg-gray-50">
              <span className="text-4xl">+</span>
            </div>
            <div className="w-1/3 border border-gray-300 rounded-3xl p-6">
              <p className="text-center">Packet Tracer Installation and Configuration</p>
            </div>
            <div className="w-1/3 border border-gray-300 rounded-3xl p-6 items-center justify-center">
              <p className="text-center">Web Development</p>
            </div>
          </div>
        </div>

        {/* Enrolled Courses section - keeping your existing component */}
        <div className="mt-10">
          <h2 className="text-xl font-medium mb-4">My Courses Enrolled</h2>
          <EnrolledCourses />
        </div>

        {/* University email - keeping your existing link */}
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <a href="mailto:University@edu.ph">University@edu.ph</a> 
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;
