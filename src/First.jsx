function First({ setCurrentPage }) {
  return (
    <div className="flex flex-col items-center h-screen p-5">
      {/* Top Middle Heading */}
      <h1 className="text-white text-7xl font-semibold mt-6">
        Mobile Pet Simulator 2.0
      </h1>

      {/* Middle of Screen Button (absolute center) */}
      <button
        onClick={() => setCurrentPage('second')}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
          bg-blue-600 hover:bg-blue-700 text-white text-4xl font-2xl
          px-12 py-6 rounded-3xl shadow-lg transition"
      >
        Start
      </button>
    </div>
  );
}

export default First;

//This is the previous version before recent edits
// function First({ setCurrentPage }) {
//   return (
//     // center the content vertically and horizontally
//     <div className="flex flex-col items-center justify-center h-screen gap-8 p-5">
//       <h1 className="text-white text-7xl font-semibold">Prototype</h1>

//       <button
//         onClick={() => setCurrentPage('second')}
//         className="bg-blue-600 hover:bg-blue-700 text-white text-2xl font-medium px-8 py-3 rounded-2xl transition self-center"
//       >
//         Continue
//       </button>
//     </div>
//   );
// }

// export default First;