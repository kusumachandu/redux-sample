"use client"

import TodoList from "@/components/TodoList"


export default function Home() {
  return (
    <>
      <header className="text-3xl text-center text-slate-100">Todo Application</header>
      <div className="py-10">
        <TodoList />
      </div>
    </>
  )
}
