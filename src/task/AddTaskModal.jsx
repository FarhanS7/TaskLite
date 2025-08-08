import { useState } from "react";

export default function AddTaskModal({ onSave, taskToUpdate, onCloseClick }) {
  const [task, setTask] = useState(
    taskToUpdate || {
      id: crypto.randomUUID(),
      title: "",
      description: "",
      tags: "",
      priority: "",
      isFavorite: false,
    }
  );

  const [isAdd, setIsAdd] = useState(Object.is(taskToUpdate, null));

  const handleChange = (evt) => {
    const name = evt.target.name;
    let value = evt.target.value;
    if (name === "tags") {
      value = value.split(",");
    }

    setTask({
      ...task,
      [name]: value,
      // Update the specific field in the task state
    });
  };

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 animate-fade-in"></div>

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-scale-in">
        <div className="w-full max-w-2xl bg-gradient-to-br from-gray-900/95 to-black/95 backdrop-blur-xl rounded-2xl border border-gray-700/50 shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="relative bg-gradient-to-r from-gray-800/50 to-gray-900/50 px-8 py-6 border-b border-gray-700/50">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-white">
                  {isAdd ? "Add New" : "Update"}{" "}
                  <span className="font-thin text-gray-400">Task</span>
                </h2>
              </div>

              <button
                onClick={onCloseClick}
                className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-700/50 transition-all duration-200"
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
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Form */}
          <div className="px-8 py-6 space-y-6">
            {/* Title Field */}
            <div className="space-y-2">
              <label
                htmlFor="title"
                className="block text-sm font-medium text-gray-300"
              >
                Task Title
              </label>
              <input
                className="block w-full rounded-xl bg-gray-800/50 border border-gray-700/50 px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all duration-300 backdrop-blur-sm"
                type="text"
                name="title"
                id="title"
                placeholder="Enter task title..."
                value={task.title}
                onChange={handleChange}
                required
              />
            </div>

            {/* Description Field */}
            <div className="space-y-2">
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-300"
              >
                Description
              </label>
              <textarea
                className="block min-h-[120px] w-full rounded-xl bg-gray-800/50 border border-gray-700/50 px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all duration-300 backdrop-blur-sm resize-none"
                name="description"
                id="description"
                placeholder="Describe your task in detail..."
                value={task.description}
                onChange={handleChange}
                required
              />
            </div>

            {/* Tags and Priority Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Tags Field */}
              <div className="space-y-2">
                <label
                  htmlFor="tags"
                  className="block text-sm font-medium text-gray-300"
                >
                  Tags
                </label>
                <input
                  className="block w-full rounded-xl bg-gray-800/50 border border-gray-700/50 px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all duration-300 backdrop-blur-sm"
                  type="text"
                  name="tags"
                  id="tags"
                  placeholder="work, urgent, project"
                  value={task.tags}
                  onChange={handleChange}
                  required
                />
                <p className="text-xs text-gray-500">
                  Separate tags with commas
                </p>
              </div>

              {/* Priority Field */}
              <div className="space-y-2">
                <label
                  htmlFor="priority"
                  className="block text-sm font-medium text-gray-300"
                >
                  Priority Level
                </label>
                <select
                  className="block w-full rounded-xl bg-gray-800/50 border border-gray-700/50 px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all duration-300 backdrop-blur-sm cursor-pointer"
                  name="priority"
                  id="priority"
                  value={task.priority}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled className="text-gray-400">
                    Select Priority
                  </option>
                  <option value="Low" className="bg-gray-800">
                    🟢 Low
                  </option>
                  <option value="Medium" className="bg-gray-800">
                    🟡 Medium
                  </option>
                  <option value="High" className="bg-gray-800">
                    🔴 High
                  </option>
                </select>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-end space-x-4 pt-6 border-t border-gray-700/50">
              <button
                onClick={onCloseClick}
                type="button"
                className="px-6 py-3 bg-gray-800/50 hover:bg-gray-700/50 text-gray-300 hover:text-white font-medium rounded-xl border border-gray-700/50 hover:border-gray-600/50 transition-all duration-200 backdrop-blur-sm"
              >
                Cancel
              </button>
              <button
                onClick={() => onSave(task, isAdd)}
                type="button"
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-medium rounded-xl transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-blue-500/25 flex items-center space-x-2"
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
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>{isAdd ? "Create Task" : "Update Task"}</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.2s ease-out;
        }
        .animate-scale-in {
          animation: scale-in 0.3s ease-out;
        }
      `}</style>
    </>
  );
}

//For edit Action
// Every Task is in the task state
//We pass the task state to Parent component (TaskBoard.jsx) by a callback function
//In TaskBoard there is onEdit which have handleEditTask function
// In the handleEdit task, he is getting the task which we sent from child component
//Than we open the modal
//Now we have to send the task details to modal So we created
//a state called taskToUpdate
//We pass the taskToUpdate to AddTaskModal
//When we go to the Modal we take tasToUpdate as a prop
//than we check if anyone wants to update a task than we initialize the
//task state with taskToUpdate. If taskToUpdate is null than we initialize
//the task state with a default task object
//Than we make another state called isAdd to check it it is a add task or update task
//we check if taskToUpdate is null than we set isAdd to true.So it will show "Add New Task"
//If taskToUpdate is not null than we set isAdd to false. So it will show "Update Task"
//Now we have to handle the change in the input fields
