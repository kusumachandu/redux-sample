import Input from '@/components/Input'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <h1 className='uppercase font-bold text-slate-100 text-2xl text-center py-2'>Sample-redux</h1>
      <section className='w-1/2 mx-auto py-10'>
        <Input placeholder='Enter the todo list here' />
      </section>
    </>
  )
}
