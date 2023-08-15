import { FC, useState } from 'react'
import Input from './Input'
import Button from './Button';

interface PopUpProps {
  todo: string;
  setIsOpen: (value: any) => void;
  isOpen: boolean;
}

const PopUp: FC<PopUpProps> = ({todo, setIsOpen, isOpen}) => {
  const [editedTodo, setEditedTodo] = useState(todo);

  function closePopUp() {
    setIsOpen(!isOpen);
  }

  function handleTodoEdit(event: React.ChangeEvent<HTMLInputElement>) {
    const newValue = event.target.value;
    setEditedTodo(newValue);
  }
  return <div className='w-1/2 py-32 flex flex-col gap-4'>
    <Input
      value={editedTodo}
      placeholder='Enter the todo list here' 
      className=' mx-auto'
      onChange={handleTodoEdit}
    />
    <div className=''>
      <Button className='uppercase bg-blue-400' onClick={closePopUp}>submit</Button>
    </div>
  </div>
}

export default PopUp