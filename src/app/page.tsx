"use client"

import Card from "@/components/Card";
import TodoList from "@/components/TodoList"
import { useState } from "react";


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
