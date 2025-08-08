import { useState } from "react";
import AddTaskModal from "./AddTaskModal";
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
    setTasks([...tasks, newTask]);
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
    setTasks([]);
  }

  return (
    <>
      <section className="mb-20" id="tasks">
        {showAddModal && (
          <AddTaskModal
            onSave={handleSaveTask}
            onCloseClick={handleCloseClick}
            taskToUpdate={taskToUpdate}
          />
        )}
        <div className="container">
          <div className="p-2 flex justify-end">
            <SearchTask />
          </div>
          <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
            <TaskActions
              onAddClick={handleAddTask}
              onClickDeleteAll={handleDeleteAllTask}
            />
            <TaskList
              tasks={tasks}
              onEdit={handleEditTask}
              onDelete={handleDeleteTask}
            />
          </div>
        </div>
      </section>
    </>
  );
}
