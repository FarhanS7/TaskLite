import { useState } from "react";
import AddTaskModal from "./AddTaskModal";
import { NoTaskFound } from "./NoTaskFound";
import { SearchTask } from "./SearchTask";
import { TaskActions } from "./TaskActions";
import TaskList from "./TaskList";

export default function TaskBoard() {
  const defaultTasks = {
    id: 1,
    title: "Task ",
    description: "Description for Task 1",
    tags: ["tag1", "tag2"],
    priority: "High",
    isFavorite: true,
  };
  const [tasks, setTasks] = useState([defaultTasks]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [taskToUpdate, setTaskToUpdate] = useState(null);

  function handleAddTask() {
    setShowAddModal(true);
  }

  function handleSaveTask(newTask, isAdd) {
    if (isAdd) {
      setTasks([...tasks, newTask]);
    } else {
      setTasks(
        tasks.map((task) => {
          if (task.id === newTask.id) {
            return newTask;
          }
          return task;
        })
      );
    }
    setShowAddModal(false);
  }

  function handleEditTask(task) {
    setTaskToUpdate(task);
    setShowAddModal(true);
  }

  function handleCloseClick() {
    setShowAddModal(false);
    setTaskToUpdate(null);
  }

  function handleDeleteTask(taskId) {
    setTasks(tasks.filter((task) => task.id !== taskId));
  }

  function handleDeleteAllTask() {
    tasks.length = 0;
    setTasks([...tasks]);
  }

  function handleFavoriteTask(taskId) {
    const taskIndex = tasks.findIndex((task) => task.id === taskId);
    const newTasks = [...tasks];

    newTasks[taskIndex].isFavorite = !newTasks[taskIndex].isFavorite;
    setTasks(newTasks);
  }

  function handleSearch(searchTerm) {
    const filteredTasks = tasks.filter((task) => {
      return (
        task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        task.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        task.tags.some((tag) =>
          tag.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    });

    setTasks(filteredTasks);
  }

  return (
    <section
      className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 py-12"
      id="tasks"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {showAddModal && (
        <AddTaskModal
          onSave={handleSaveTask}
          onCloseClick={handleCloseClick}
          taskToUpdate={taskToUpdate}
        />
      )}

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="mb-8 text-center">
          <div className="flex justify-center items-center mb-4">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-500 rounded-xl flex items-center justify-center mr-3">
              <svg
                className="w-6 h-6 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-white">
              Task<span className="font-thin text-gray-400">Board</span>
            </h1>
          </div>
          <p className="text-gray-400 text-lg">
            Manage your tasks with ease and efficiency
          </p>
        </div>

        {/* Search Section */}
        <div className="mb-8 flex justify-end">
          <div className="w-full max-w-md">
            <SearchTask onSearch={handleSearch} />
          </div>
        </div>

        {/* Main Task Panel */}
        <div className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-xl rounded-2xl border border-gray-700/50 shadow-2xl overflow-hidden">
          {/* Glass effect overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent pointer-events-none rounded-2xl"></div>

          <div className="relative z-10 p-6 md:p-8">
            {/* Task Actions Header */}
            <div className="mb-8">
              <TaskActions
                onAddClick={handleAddTask}
                onClickDeleteAll={handleDeleteAllTask}
              />
            </div>

            {/* Task Content */}
            <div className="space-y-6">
              {tasks.length > 0 ? (
                <>
                  {/* Task Stats */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700/50 backdrop-blur-sm">
                      <div className="text-2xl font-bold text-white mb-1">
                        {tasks.length}
                      </div>
                      <div className="text-gray-400 text-sm">Total Tasks</div>
                    </div>
                    <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700/50 backdrop-blur-sm">
                      <div className="text-2xl font-bold text-yellow-400 mb-1">
                        {tasks.filter((task) => task.isFavorite).length}
                      </div>
                      <div className="text-gray-400 text-sm">Favorites</div>
                    </div>
                    <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700/50 backdrop-blur-sm">
                      <div className="text-2xl font-bold text-red-400 mb-1">
                        {
                          tasks.filter((task) => task.priority === "High")
                            .length
                        }
                      </div>
                      <div className="text-gray-400 text-sm">High Priority</div>
                    </div>
                  </div>

                  {/* Task List */}
                  <TaskList
                    tasks={tasks}
                    onEdit={handleEditTask}
                    onDelete={handleDeleteTask}
                    onFav={handleFavoriteTask}
                  />
                </>
              ) : (
                <div className="py-12">
                  <NoTaskFound />
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Quick Stats Footer */}
        {tasks.length > 0 && (
          <div className="mt-8 text-center">
            <div className="inline-flex items-center space-x-6 bg-gray-800/30 backdrop-blur-sm rounded-full px-6 py-3 border border-gray-700/50">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-gray-300 text-sm">
                  {tasks.filter((task) => !task.isFavorite).length} Active
                </span>
              </div>
              <div className="w-px h-4 bg-gray-600"></div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <span className="text-gray-300 text-sm">
                  {tasks.filter((task) => task.isFavorite).length} Starred
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
