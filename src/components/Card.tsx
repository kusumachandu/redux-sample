import { FC, useContext, useState } from 'react'
import MyContext from '@/context/MyContext'
import Button from './Button';

interface CardProps {}

const Card: FC<CardProps> = ({}) => {
  const data = useContext(MyContext);

  const [isOpen, setgIsOpen] = useState(false)
  
  return <div className='w-1/3 mx-auto'>
    {
      data?.map((todo: any, index: number) => (
        <li key={index} className='border list-none py-2 px-2 rounded-lg shadow-sm shadow-white flex justify-between items-center'>
          {todo}
          <div className='flex gap-5'>
            <Button className='bg-blue-400 font-bold px-5' onClick={() => {}}>edit</Button>
            <Button className='bg-red-400 font-bold' onClick={() => {}}>delete</Button>
          </div>
        </li>
      ))
    }
  </div>
}

export default Card