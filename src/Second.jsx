import React from "react";

function NewPage({ setCurrentPage }) {
  return (
    <div className="relative flex flex-col justify-between h-screen p-5 bg-gray-50">

      {/* Top-left Back Button */}
      <button
        onClick={() => setCurrentPage("first")}
        className="self-start p-3 bg-white/30 backdrop-blur-md text-gray-900 rounded-full shadow-lg 
                   hover:bg-white/50 hover:scale-105 active:scale-95 transition-all"
        aria-label="Go back"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
          />
        </svg>
      </button>

      {/* Center Heading */}
      <h1 className="text-3xl font-bold text-center text-gray-900 mt-8">
        Directed to New Page
      </h1>

      {/* Bottom Center Button */}
      <button
        onClick={() => setCurrentPage("third")}
        className="self-center px-6 py-3 bg-indigo-600 text-white font-semibold rounded-full shadow-lg 
                   hover:bg-indigo-500 hover:scale-105 active:scale-95 transition-all"
      >
        Go to Screen 3
      </button>
    </div>
  );
}

export default NewPage;
