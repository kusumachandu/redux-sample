import { FC, useContext, useState } from 'react'
import Input from './Input'
import Button from './Button';
import MyContext from '@/context/MyContext';

interface PopUpProps {
  todo: string;
  setIsOpen: (value: any) => void;
  isOpen: boolean;
}

const PopUp: FC<PopUpProps> = ({todo, setIsOpen, isOpen}) => {
  console.log(todo);
  // const data = useContext(MyContext);
  const [editedTodo, setEditedTodo] = useState(todo);

  function closePopUp() {
    setIsOpen(!isOpen);
  }

  function handleTodoEdit(event: React.ChangeEvent<HTMLInputElement>) {
    const newValue = event.target.value;
    console.log("new value", newValue);
    setEditedTodo(newValue);
  }
  return <div className='w-1/2 py-32 flex flex-col gap-4'>
    <input
      value={editedTodo}
      placeholder='Enter the todo list here' 
      className=' mx-auto w-full rounded-md border border-slate-300 bg-transparent py-2 px-3 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-700 dark:text-slate-50 dark:focus:ring-slate-400 dark:focus:ring-offset-slate-900'
      onChange={handleTodoEdit}
    />
    <div className=''>
      <Button className='uppercase bg-blue-400' onClick={closePopUp}>submit</Button>
    </div>
  </div>
}

export default PopUp