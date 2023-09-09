'use client'

import { Dispatch, FC, SetStateAction, useState } from 'react'
import Card from './Card'

interface TodoListProps {}

const TodoList: FC<TodoListProps> = ({}) => {
  const [todo, setTodo] = useState<string>('')
  const [todoArray, setTodoArray] = useState<string[]>([])

  const handleChange = (e: any) => {
    setTodo(e.target.value);
  }

  const handleSubmit = () => {
    if (todo.trim() !== "") {
      setTodoArray([...todoArray, todo]);
      setTodo(""); // Clear the input field after submitting
      console.log([...todoArray, todo]);
    }
  }
  return (
    <div>
      <div className='border py-10 flex justify-center gap-4 w-1/2 m-auto rounded bg-slate-100'>
        <input
          onChange={handleChange}
          type='text'
          placeholder='Enter here ...'
          className='rounded focus:outline-none bg-gray-900 px-2'
          value={todo}
        />
        <button
          onClick={handleSubmit}
          className='border px-2 py-1 rounded bg-cyan-600 cursor-pointer'
        >
          submit
        </button>
      </div>
      <div className='my-10 mx-10'>
        <Card todoArray={todoArray} />
      </div>
    </div>
  )
}

export default TodoList
