import { useState } from "react";

export default function AddTaskModal({ onSave, taskToUpdate }) {
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
      <div className="top-0 left-0 bg-black bg-opacity-70 w-full z-10 absolute  "></div>
      <form className="z-10 absolute top-1/4 left-1/3 mx-auto my-10 w-full max-w-[740px] rounded-xl border border-[#FEFBFB]/[36%] bg-[#191D26] p-9 max-md:px-4 lg:my-20 lg:p-11">
        <h2 className="mb-9 text-center text-2xl font-bold text-white lg:mb-11 lg:text-[28px]">
          {isAdd ? "Add New Task" : "Update Task"}
        </h2>

        <div className="space-y-9 text-white lg:space-y-10">
          <div className="space-y-2 lg:space-y-3">
            <label htmlFor="title">Title</label>
            <input
              className="block w-full rounded-md bg-[#2D323F] px-3 py-2.5"
              type="text"
              name="title"
              id="title"
              value={task.title}
              onChange={handleChange}
              required
            />
          </div>
          <div className="space-y-2 lg:space-y-3">
            <label htmlFor="description">Description</label>
            <textarea
              className="block min-h-[120px] w-full rounded-md bg-[#2D323F] px-3 py-2.5 lg:min-h-[180px]"
              type="text"
              name="description"
              id="description"
              value={task.description}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <div className="grid-cols-2 gap-x-4 max-md:space-y-9 md:grid lg:gap-x-10 xl:gap-x-20">
            <div className="space-y-2 lg:space-y-3">
              <label htmlFor="tags">Tags</label>
              <input
                className="block w-full rounded-md bg-[#2D323F] px-3 py-2.5"
                type="text"
                name="tags"
                id="tags"
                value={task.tags}
                onChange={handleChange}
                required
              />
            </div>
            <div className="space-y-2 lg:space-y-3">
              <label htmlFor="priority">Priority</label>
              <select
                className="block w-full cursor-pointer rounded-md bg-[#2D323F] px-3 py-2.5"
                name="priority"
                id="priority"
                value={task.priority}
                onChange={handleChange}
                required
              >
                <option value="">Select Priority</option>
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
            </div>
          </div>
        </div>
        <div className="mt-16 flex justify-center lg:mt-20">
          <button
            onClick={() => onSave(task, isAdd)}
            type="submit"
            className="rounded bg-blue-600 px-4 py-2 text-white transition-all hover:opacity-80"
          >
            Save new Task
          </button>
          <button
            onClick={onCloseClick}
            className="rounded bg-red-600 px-4 py-2 text-white transition-all hover:opacity-80"
          >
            Close
          </button>
        </div>
      </form>
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
