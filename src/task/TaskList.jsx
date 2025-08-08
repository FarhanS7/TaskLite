import { FaStar } from "react-icons/fa";

export default function TaskList({ tasks, onEdit, onDelete, onFav }) {
  return (
    <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl border border-gray-800 overflow-hidden shadow-2xl">
      <div className="overflow-auto">
        <table className="table-fixed w-full">
          <thead className="bg-gradient-to-r from-gray-800 to-gray-900 border-b border-gray-700">
            <tr>
              <th className="p-4 text-xs font-bold uppercase tracking-wider text-gray-300 w-[48px]"></th>
              <th className="p-4 text-xs font-bold uppercase tracking-wider text-gray-300 w-[300px] text-left">
                Title
              </th>
              <th className="p-4 text-xs font-bold uppercase tracking-wider text-gray-300 text-left">
                Description
              </th>
              <th className="p-4 text-xs font-bold uppercase tracking-wider text-gray-300 md:w-[350px] text-center">
                Tags
              </th>
              <th className="p-4 text-xs font-bold uppercase tracking-wider text-gray-300 md:w-[100px] text-center">
                Priority
              </th>
              <th className="p-4 text-xs font-bold uppercase tracking-wider text-gray-300 md:w-[100px] text-center">
                Options
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-800">
            {tasks.map((task, index) => (
              <tr
                key={task.id}
                className="hover:bg-gray-800/30 transition-all duration-200 group [&>td]:align-baseline [&>td]:px-4 [&>td]:py-4"
              >
                <td>
                  <button
                    onClick={() => onFav(task.id)}
                    className="p-2 rounded-lg hover:bg-gray-700/50 transition-all duration-200 transform hover:scale-110"
                  >
                    {task.isFavorite ? (
                      <FaStar
                        className="text-yellow-400 drop-shadow-lg"
                        size={16}
                      />
                    ) : (
                      <FaStar
                        className="text-gray-600 group-hover:text-gray-400 transition-colors duration-200"
                        size={16}
                      />
                    )}
                  </button>
                </td>

                <td className="text-white font-medium text-sm">
                  <div className="truncate max-w-[280px]">{task.title}</div>
                </td>

                <td className="text-gray-300 text-sm">
                  <div className="line-clamp-2 leading-relaxed">
                    {task.description}
                  </div>
                </td>

                <td>
                  <div className="flex justify-center gap-1.5 flex-wrap">
                    {task.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 border border-blue-500/30 backdrop-blur-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </td>

                <td className="text-center">
                  <span className="inline-flex items-center px-3 py-1 rounded-lg text-xs font-semibold bg-gray-800 text-gray-300 border border-gray-700">
                    {task.priority}
                  </span>
                </td>

                <td>
                  <div className="flex items-center justify-center space-x-2">
                    <button
                      onClick={() => onEdit(task)}
                      className="px-3 py-1.5 text-xs font-medium text-blue-300 bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/30 rounded-lg transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => onDelete(task.id)}
                      className="px-3 py-1.5 text-xs font-medium text-red-300 bg-red-500/10 hover:bg-red-500/20 border border-red-500/30 rounded-lg transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-red-500/20"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {tasks.length === 0 && (
          <div className="text-center py-12">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full flex items-center justify-center">
              <svg
                className="w-8 h-8 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-300 mb-2">
              No tasks yet
            </h3>
            <p className="text-gray-400 text-sm">
              Create your first task to get started with TaskLite
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
