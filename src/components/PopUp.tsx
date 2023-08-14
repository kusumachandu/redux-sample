import { FC, useState } from 'react'
import Input from './Input'
import Button from './Button';

interface PopUpProps {
  todo: any;
  setIsOpen: (value: any) => void;
  isOpen: boolean;
}

const PopUp: FC<PopUpProps> = ({todo, setIsOpen, isOpen}) => {

  console.log(todo)
  const [editedTodo, setEditedTodo] = useState(todo);

  function closePopUp() {
    setIsOpen(!isOpen);
  }

  function handleTodoEdit(event: any) {
    setEditedTodo(event.target.value);
  }
  return <div className='w-1/2 py-32 flex flex-col gap-4'>
    <Input
      value={editedTodo}
      onChange={handleTodoEdit}
      placeholder='Enter the todo list here' 
      className=' mx-auto'
    />
    <div className=''>
      <Button className='uppercase bg-red-400' onClick={closePopUp}>close</Button>
    </div>
  </div>
}

export default PopUp