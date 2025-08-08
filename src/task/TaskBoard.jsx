import { useState } from "react";
import AddTaskModal from "./AddTaskModal";
import { SearchTask } from "./SearchTask";
import { TaskActions } from "./TaskActions";
import TaskList from "./TaskList";

export default function TaskBoard() {
  const defaultTasks = {
    id: 1,
    title: "Task asdfas",
    description: "Description for Task 1",
    tags: ["tag1", "tag2"],
    priority: "High",
    isFavorite: true,
  };
  const [tasks, setTasks] = useState([defaultTasks]);
  const [showAddModal, setShowAddModal] = useState(false);

  function handleAddTask() {
    setShowAddModal(true);
  }

  return (
    <>
      <section className="mb-20" id="tasks">
        {showAddModal && <AddTaskModal />}
        <div className="container">
          <div className="p-2 flex justify-end">
            <SearchTask />
          </div>
          <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
            <TaskActions onAddClick={handleAddTask} />
            <TaskList tasks={tasks} />
          </div>
        </div>
      </section>
    </>
  );
}
