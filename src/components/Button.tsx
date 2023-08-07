import { FC, HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  onClick: () => void;
}

const Button: FC<ButtonProps> = ({ children, className, onClick, ...props}) => {
  return <button onClick={onClick} className={cn('px-10 py-1 bg-gray-500 text-slate-100 uppercase rounded-lg text-center', className)} {...props} >{children}</button>
}

export default Button