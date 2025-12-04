import React, { useState } from "react";

function NewPage({ setCurrentPage }) {
  const [selectedImage, setSelectedImage] = useState(null);

  // Handle image selection
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setSelectedImage(imageURL);
    }
  };

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

      {/* Center picture upload box */}
      <div className="flex flex-col items-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">
          Upload a Picture
        </h1>

        <label
          htmlFor="fileInput"
          className="w-64 h-64 flex flex-col items-center justify-center border-2 border-dashed border-gray-400 
                     rounded-xl cursor-pointer bg-white hover:border-indigo-500 transition-all overflow-hidden"
        >
          {/* If no image selected */}
          {!selectedImage && (
            <span className="text-gray-500 text-center">
              Click to upload<br />or drag and drop
            </span>
          )}

          {/* Preview image */}
          {selectedImage && (
            <img
              src={selectedImage}
              alt="Preview"
              className="w-full h-full object-cover"
            />
          )}
        </label>

        <input
          id="fileInput"
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="hidden"
        />
      </div>

      {/* Bottom Center Button */}
      <button
        onClick={() => setCurrentPage("third")}
        className="self-center mb-8 px-6 py-3 bg-indigo-600 text-white font-semibold rounded-full shadow-lg 
                   hover:bg-indigo-500 hover:scale-105 active:scale-95 transition-all"
      >
        Go to Screen 3
      </button>
    </div>
  );
}

export default NewPage;
