export const TaskActions = ({ onAddClick }) => {
  return (
    <>
      <div className="mb-14 items-center justify-between sm:flex">
        <h2 className="text-2xl font-semibold max-sm:mb-4">Your Tasks</h2>
        <div className="flex items-center space-x-5">
          <button
            onClick={onAddClick}
            className="rounded-md bg-blue-500 px-3.5 py-2.5 text-sm font-semibold"
          >
            Add Task
          </button>
          <button className="rounded-md bg-red-500 px-3.5 py-2.5 text-sm font-semibold">
            Delete All
          </button>
        </div>
      </div>
    </>
  );
};

// If we need to use the state from the parent component in the child component,
//  we can pass the state as a prop to the child component.
//  But if we need to use the state from the child component in the parent component,
//  we can pass a function as a prop to the child component that allows it to
//  update the state in the parent component.
