"use client"

import Button from '@/components/Button';
import Input from '@/components/Input'
import { useRef, useState } from 'react'

export default function Home() {
  const [value, setValue] = useState<string>('');
  const [todo, setTodo] = useState<any | undefined>([]);

  const handleInputChange = (value: string) => {
    setValue(value);
  };

  const submitHandler = () => {
    setTodo([value, ...todo])
    console.log(todo);
  }

  return (
    <>
      <h1 className='uppercase font-bold text-slate-100 text-2xl text-center py-2'>Sample-redux</h1>
      <section className='w-1/2 mx-auto py-10'>
        <Input
          value={value}
          onChange={handleInputChange}
          placeholder='Enter the todo list here' 
        />
        <div className='py-5'>
          <Button className='' onClick={submitHandler}>submit</Button>
        </div>
      </section>
    </>
  )
}
