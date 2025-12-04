import { useState, useEffect } from 'react';

function First({ setCurrentPage }) {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/data')
      .then((response) => response.json())
      .then((data) => setMessage(data.message))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="flex flex-col items-center h-screen p-5">
      {/* Top Middle Heading */}
      <h1 className="text-white text-7xl font-semibold mt-6">
        Mobile Pet Simulator 2.0
      </h1>

      {/* Backend Message */}
      {message && (
        <p className="text-gray-300 text-xl mt-4">
          Backend says: {message}
        </p>
      )}

      {/* Middle of Screen Button (absolute center) */}
      <button
        onClick={() => setCurrentPage('second')}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
          bg-blue-600 hover:bg-blue-700 text-white text-4xl font-2xl
          px-12 py-6 rounded-3xl shadow-lg transition-all shadow-sm hover:scale-105 active:scale-95"
      >
        Start
      </button>
    </div>
  );
}

export default First;

