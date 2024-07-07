const TodoCard = () => {
  return (
    <>
      <div className="bg-white rounded-xl flex justify-between items-center p-2">
        <input type="checkbox" name="" id="" />
        <p>Title</p>
        <p>Time</p>
        <p>Description</p>
        <div className="space-x-5">
          <button>del</button>
          <button>edit</button>
        </div>
      </div>
    </>
  );
};

export default TodoCard;
