function Third({ setCurrentPage }) {
    return (
        <div className="relative flex flex-col h-[100dvh] p-5">
            {/* Top Left Arrow Button */}
            <button
                onClick={() => setCurrentPage('second')}
                className="absolute top-5 left-5 p-3 bg-white/20 hover:bg-white/30 text-white rounded-full backdrop-blur-md transition-all shadow-sm hover:scale-105 active:scale-95"
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

            {/* Top heading */}
            <h1 className="text-2xl font-bold text-center mt-8 text-white">
                Screen 3
            </h1>
        </div>
    );
}

export default Third;
