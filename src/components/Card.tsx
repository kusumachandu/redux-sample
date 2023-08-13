import { FC, useContext, useState } from 'react'
import MyContext from '@/context/MyContext'
import Button from './Button'
import PopUp from './PopUp'

interface CardProps {
  setIsOpen: (value: any) => void
  isOpen: boolean
}

const Card: FC<CardProps> = ({ setIsOpen, isOpen }) => {
  const data = useContext(MyContext)

  console.log(data)

  function openPopup () {
    setIsOpen(!isOpen)
    console.log('hello')
  }

  return (
    <div className='w-full'>
      {isOpen ? (
        <div className='w-1/3 mx-auto flex flex-col gap-3'>
          {data?.map((todo: any, index: number) => (
            <li
              key={index}
              className='border hover:scale-105 duration-300 list-none py-2 px-2 rounded-lg shadow-sm shadow-white flex justify-between items-center'
            >
              {todo}
              <div className='flex gap-5'>
                <Button
                  className='bg-blue-400 font-bold px-5'
                  onClick={openPopup}
                >
                  edit
                </Button>
                <Button className='bg-red-400 font-bold' onClick={() => {}}>
                  delete
                </Button>
              </div>
            </li>
          ))}
        </div>
      ) : (
        <div className='absolute w-full h-full bg-black top-0'>
          {<PopUp setIsOpen={setIsOpen} isOpen={isOpen} />}
        </div>
      )}
    </div>
  )
}

export default Card
