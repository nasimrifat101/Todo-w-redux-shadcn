import TodoCard from "./TodoCard";
import {Button} from '../ui/button'
const TodoContainer = () => {
  return (
    <>
      <div className="flex justify-between py-4">
        <Button className='bg-primary-gradient'>Add Todo</Button>
        <Button className='bg-primary-gradient'>Filter</Button>
      </div>
      <div className="bg-primary-gradient w-full h-fit rounded-xl p-[3px]">
        <div className='bg-white w-full p-5 rounded-xl space-y-2'>
          <TodoCard />
          <TodoCard />
          <TodoCard />
          <TodoCard />
          <TodoCard />
        </div>
      </div>
    </>
  );
};

export default TodoContainer;
