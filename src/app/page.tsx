"use client"

import Input from '@/components/Input'
import { useRef, useState } from 'react'

export default function Home() {
  const [value, setValue] = useState('');

  const handleInputChange = (value: string) => {
    console.log(value);
    setValue(value);
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
      </section>
    </>
  )
}
