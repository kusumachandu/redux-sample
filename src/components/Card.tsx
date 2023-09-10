import { FC } from 'react'

interface CardProps {
  todoArray: string[]
  setTodoArray: any
}

const Card: FC<CardProps> = ({ todoArray, setTodoArray }) => {

  const handleDelete = (indexValue: number) => {
    setTodoArray(todoArray.filter((_, i) => i !== indexValue));
  }

  return (
    <div>
      <div className='text-slate-900 grid grid-cols-3 gap-y-4'>
        {todoArray.map((todo: string, index: number) => {
          return (
            <div key={index} className='border w-96 py-5 px-4 flex items-center justify-between rounded-lg bg-slate-200 hover:cursor-pointer'>
              <p className='text-lg font-serif'>{todo}</p>
              <div>
                <button onClick={() => handleDelete(index)} className='hover:scale-105 text-slate-100 hover:duration-200 border bg-red-400 px-2 py-1 rounded-lg'>Delete</button>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Card
