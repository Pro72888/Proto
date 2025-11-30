// Second page component displayed after clicking Continue

function NewPage({ setCurrentPage }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-5 p-5">
      <h1 className="text-2xl font-bold">Directed to new page</h1>
      <button
        onClick={() => setCurrentPage('first')}
        className="
          px-8 py-3 
          bg-blue-600 hover:bg-blue-700
          text-white text-2xl font-medium
          rounded-2xl 
          transition
        "
      >
        Back
      </button>
    </div>
  );
}

export default NewPage;