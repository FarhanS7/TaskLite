export const TaskActions = ({ onAddClick, onClickDeleteAll }) => {
  return (
    <div className="mb-8 items-center justify-between sm:flex">
      <div className="max-sm:mb-6">
        <h2 className="text-3xl font-bold text-white mb-2">
          Your <span className="font-thin text-gray-400">Tasks</span>
        </h2>
        <p className="text-gray-400 text-sm">
          Manage and organize your daily activities
        </p>
      </div>

      <div className="flex items-center space-x-3">
        <button
          onClick={onAddClick}
          className="group relative px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold rounded-xl transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-blue-500/25 flex items-center space-x-2"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4v16m8-8H4"
            />
          </svg>
          <span>Add Task</span>
          <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300"></div>
        </button>

        <button
          onClick={() => onClickDeleteAll()}
          className="group relative px-6 py-3 bg-gray-800/50 hover:bg-red-500/20 text-gray-300 hover:text-red-300 font-semibold rounded-xl transform hover:scale-105 transition-all duration-300 border border-gray-700/50 hover:border-red-500/50 backdrop-blur-sm flex items-center space-x-2"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg>
          <span>Delete All</span>
          <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-transparent opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300"></div>
        </button>
      </div>
    </div>
  );
};

// If we need to use the state from the parent component in the child component,
//  we can pass the state as a prop to the child component.
//  But if we need to use the state from the child component in the parent component,
//  we can pass a function as a prop to the child component that allows it to
//  update the state in the parent component.
