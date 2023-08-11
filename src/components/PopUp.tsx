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
  return <div className=''>
    <Input
      value='edit'
      onChange={() => {}}
      placeholder='Enter the todo list here' 
    />
    <div>
      <Button className='uppercase' onClick={closePopUp}>close</Button>
    </div>
  </div>
}

export default PopUp