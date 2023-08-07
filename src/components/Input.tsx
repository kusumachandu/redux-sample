"use client"
import React, { FC } from 'react';
import { cn } from '@/lib/utils';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  value: string;
  onChange: (value: any) => void;
}


const Input: FC<InputProps> = ({ className, value, onChange, ...props}) => {
  function handleChange(event: any){
    onChange(event?.target.value)
  }
  return <input
  className={cn(
    'flex h-10 w-full rounded-md border border-slate-300 bg-transparent py-2 px-3 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-700 dark:text-slate-50 dark:focus:ring-slate-400 dark:focus:ring-offset-slate-900',
    className
  )}
  type='text'
  value={value}
  onChange={handleChange}
  {...props}
/>
}

Input.displayName = 'Input'

export default Input;