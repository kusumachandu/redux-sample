"use client"

import { useSelector, useDispatch } from "react-redux/es/exports";
import { increment, decrement } from "@/redux/actions";

export default function Home() {

  // const count = useSelector<any>((state) => state);
  // const dispatch = useDispatch();
  return (
    <>
      <h1 className='uppercase font-bold text-slate-100 text-2xl text-center py-2'>Sample-redux Revoked</h1>
      {/* <p>Count: {count}</p> */}
    </>
  )
}
