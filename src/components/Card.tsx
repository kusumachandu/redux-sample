import { FC } from 'react'

interface CardProps {
  todoArray: string[]
}

const Card: FC<CardProps> = ({ todoArray }) => {
  return (
    <div>
      <div className='text-slate-900 grid grid-cols-3'>
        {todoArray.map((todo: string, index: number) => {
          return (
            <div key={index} className='border w-96 py-5 px-4 flex items-center justify-between rounded-lg bg-slate-200'>
              <p>{todo}</p>
              <div>
                <button className='hover:scale-105 text-slate-100 hover:duration-200 border bg-red-400 px-2 py-1 rounded-lg'>Delete</button>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Card
