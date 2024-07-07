import {Button} from '../ui/button'
import { IoTrashBinOutline } from "react-icons/io5";

import { FaRegEdit } from "react-icons/fa";

const TodoCard = () => {
  return (
    <>
      <div className="bg-white rounded-xl flex justify-between items-center p-2 border">
        <input type="checkbox" name="" id="" />
        <p>Title</p>
        <p>Time</p>
        <p>Description</p>
        <div className="space-x-5">
          <Button className='bg-red-400'><IoTrashBinOutline /></Button>
          <Button className='bg-[#5C53FE]'><FaRegEdit /></Button>
        </div>
      </div>
    </>
  );
};

export default TodoCard;
