export default function Header() {
  return (
    <div>
      {" "}
      <header className="w-full bg-gradient-to-r from-gray-900 to-black px-6 py-5">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center">
            {/* TaskLite Logo */}
            <div className="flex items-center space-x-4">
              {/* Logo Icon */}
              <div className="relative w-12 h-12 flex items-center justify-center">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-500 rounded-xl flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                  </svg>
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-gray-900"></div>
              </div>

              {/* Logo Text */}
              <div className="text-white">
                <span className="text-3xl font-bold tracking-wide">TASK</span>
                <span className="text-2xl font-thin text-gray-300 ml-1">
                  lite
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
