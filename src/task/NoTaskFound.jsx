export const NoTaskFound = () => {
  return (
    <div className="text-center py-16 px-6">
      {/* Animated Icon */}
      <div className="relative mb-8 flex justify-center">
        <div className="w-24 h-24 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-gray-700/50">
          <div className="relative">
            <svg
              className="w-12 h-12 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
              />
            </svg>
            {/* Floating dots animation */}
            <div
              className="absolute -top-2 -right-2 w-3 h-3 bg-blue-400/60 rounded-full animate-bounce"
              style={{ animationDelay: "0s" }}
            ></div>
            <div
              className="absolute -bottom-2 -left-2 w-2 h-2 bg-purple-400/60 rounded-full animate-bounce"
              style={{ animationDelay: "0.5s" }}
            ></div>
            <div
              className="absolute -top-1 left-8 w-1 h-1 bg-green-400/60 rounded-full animate-pulse"
              style={{ animationDelay: "1s" }}
            ></div>
          </div>
        </div>

        {/* Glow effect */}
        <div className="absolute inset-0 w-24 h-24 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl blur-xl animate-pulse"></div>
      </div>

      {/* Main Message */}
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-white mb-3">
          No Tasks <span className="font-thin text-gray-400">Found</span>
        </h3>
        <p className="text-gray-400 text-lg leading-relaxed max-w-md mx-auto">
          Your task list is empty. Start by creating your first task to boost
          your productivity.
        </p>
      </div>

      {/* Suggestions */}
      <div className="space-y-3 max-w-sm mx-auto">
        <div className="flex items-center justify-center space-x-3 text-gray-500 text-sm">
          <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
          <span>Click "Add Task" to get started</span>
        </div>
        <div className="flex items-center justify-center space-x-3 text-gray-500 text-sm">
          <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
          <span>Organize your work and personal tasks</span>
        </div>
        <div className="flex items-center justify-center space-x-3 text-gray-500 text-sm">
          <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
          <span>Set priorities and track progress</span>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="mt-12 relative">
        <div className="flex justify-center space-x-4 opacity-30">
          <div className="w-2 h-8 bg-gradient-to-t from-blue-500/50 to-transparent rounded-full"></div>
          <div className="w-2 h-12 bg-gradient-to-t from-purple-500/50 to-transparent rounded-full"></div>
          <div className="w-2 h-6 bg-gradient-to-t from-green-500/50 to-transparent rounded-full"></div>
        </div>
      </div>
    </div>
  );
};
