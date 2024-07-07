import TodoCard from "./TodoCard";

const TodoContainer = () => {
  return (
    <>
      <div>
        <button>Add Todo</button>
        <button>Filter</button>
      </div>
      <div className="bg-red-500 w-full h-[500px] rounded-xl p-5 space-y-2">
       <TodoCard/>
       <TodoCard/>
       <TodoCard/>
       <TodoCard/>
       <TodoCard/>
      </div>
    </>
  );
};

export default TodoContainer;
