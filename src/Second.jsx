function NewPage({ setCurrentPage }) {
  return (
    <div className="relative min-h-screen p-5">
      {/* Top heading */}
      <h1 className="text-2xl font-bold text-center mt-8">
        Directed to new page
      </h1>

      {/* Centered Bottom Button */}
      <button
        onClick={() => setCurrentPage('first')}
        className="fixed bottom-10 left-1/2 -translate-x-1/2
          px-8 py-3 bg-blue-600 hover:bg-blue-700
          text-white text-2xl rounded-2xl transition shadow-lg z-50"
      >
        Back
      </button>
    </div>
  );
}

export default NewPage;