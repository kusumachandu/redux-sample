import { FC, useState } from 'react'

interface TodoListProps {
}


const TodoList: FC<TodoListProps> = ({}) => {

  const [todo, setTodo] = useState('');

  const handleChange = (e: any) => {
    setTodo(e.target.value);  
  }

  const handleSubmit = () => {
    console.log(todo);
  }

  return <div className='border py-10 flex justify-center gap-4 w-1/2 m-auto rounded bg-slate-100'>
    <input
     onChange={handleChange}
     type="text" placeholder='Enter here ...' className='rounded focus:outline-none bg-gray-900 px-2' name="" id=""
    />
    <button onClick={handleSubmit} className='border px-2 py-1 rounded bg-cyan-600 cursor-pointer' value="submit">
      submit
    </button>
  </div>
}

export default TodoList