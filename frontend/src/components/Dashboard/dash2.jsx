import React, { useState } from "react";

const Dashboard = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [message,setMessage] = useState("")

  const studyMaterial = [
    { title: "Introduction to Computer Science", description: "A basic guide to computer science concepts." },
    { title: "JavaScript Basics", description: "Learn the fundamentals of JavaScript programming." },
    { title: "React for Beginners", description: "An introductory guide to building apps with React." },
  ];

  const modeClasses = darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900";
  const buttonClasses = darkMode
    ? "bg-blue-500 hover:bg-blue-600 text-white"
    : "bg-blue-600 hover:bg-blue-700 text-white";
  const cardClasses = darkMode
    ? "bg-gray-800 text-white shadow-lg rounded-lg"
    : "bg-white text-gray-900 shadow-md rounded-lg";

  return (
    <div className={`min-h-screen ${modeClasses} p-6 relative`}>
      <div className="fixed top-0 left-0 w-full bg-gray-100 dark:bg-gray-800 p-4 shadow-md z-10">
        <div className="container mx-auto flex justify-end">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="px-3 py-2 rounded text-sm bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
          >
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
      </div>

      <div className="container mx-auto mt-16">
        <div className="flex flex-col md:flex-row justify-between gap-6">
          <div className="flex flex-col space-y-6 w-full md:w-64">
            <div className={`${cardClasses} p-4`}>
              <h2 className="text-lg font-bold mb-4">Forum</h2>
              <ul className="space-y-2 text-sm">
                <li>General Discussions</li>
                <li>React Development</li>
                <li>JavaScript Tips</li>
                <li>Project Ideas</li>
              </ul>
            </div>

            <div className={`${cardClasses} p-4`}>
              <h2 className="text-lg font-bold mb-4">Mentor Chatting Partner</h2>
              <div className="space-y-2 text-sm">
                <div>Mentor: John Doe</div>
                <div>Status: Available</div>
                <button
                  onClick={() => setChatOpen(!chatOpen)}
                  className={`${buttonClasses} py-2 px-4 rounded text-white`}
                >
                  {chatOpen ? "Close Chat" : "Chat Now"}
                </button>
              </div>
            </div>
          </div>

          <div className={`flex-1 ${cardClasses} p-6`}>
            <h2 className="text-lg font-bold mb-4">Study Material</h2>
            <div className="space-y-4">
              {studyMaterial.map((material, index) => (
                <div key={index} className={`${cardClasses} p-4`}>
                  <h3 className="font-bold">{material.title}</h3>
                  <p>{material.description}</p>
                  <button className={`${buttonClasses} py-2 px-4 rounded mt-2`}>
                    Access Material
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {chatOpen && (
        <div
          className={`fixed bottom-4 right-4 w-80 h-96 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg shadow-lg flex flex-col`}
        >
          <div className="p-4 border-b border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-bold dark:text-white">Chat Panel</h3>
          </div>
          <div className="flex-1 p-4 overflow-y-auto">
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Chat functionality will be added here.
            </p>
          </div>
          <div className="p-4 border-t border-gray-200 dark:border-gray-700">
            <input
              type="text"
              placeholder="Type your message..."
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
  
  