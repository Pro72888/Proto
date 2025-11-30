function First({ setCurrentPage }) {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-8 p-5">
      <h1 className="text-white text-7xl font-semibold">
        Prototype
      </h1>

      <button
        onClick={() => setCurrentPage('second')}
        className="
          px-8 py-3 
          bg-blue-600 hover:bg-blue-700
          text-white text-2xl font-medium
          rounded-2xl 
          transition
        "
      >
        Continue
      </button>
    </div>
  );
}

export default First;