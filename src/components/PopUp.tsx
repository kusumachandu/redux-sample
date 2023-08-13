import { FC } from 'react'
import Input from './Input'
import Button from './Button';

interface PopUpProps {
  setIsOpen: (value: any) => void;
  isOpen: boolean;
}

const PopUp: FC<PopUpProps> = ({setIsOpen, isOpen}) => {
  function closePopUp() {
    setIsOpen(!isOpen);
  }
  return <div className='w-1/2 py-32 flex flex-col gap-4'>
    <Input
      value='Edit'
      onChange={() => {}}
      placeholder='Enter the todo list here' 
      className=' mx-auto'
    />
    <div className=''>
      <Button className='uppercase bg-red-400' onClick={closePopUp}>close</Button>
    </div>
  </div>
}

export default PopUp