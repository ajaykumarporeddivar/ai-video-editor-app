'use client';

import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { Button } from 'lucide-react';

export function cn(...inputs: Parameters<typeof clsx>) {
  return twMerge(...inputs);
}

export interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  disabled?: boolean;
}

export function Button({ children, variant = 'primary', size = 'md', loading = false, disabled = false, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        'flex',
        'items-center',
        'gap-2',
        'px-4',
        'py-2',
        'rounded-lg',
        'text-sm',
        'font-medium',
        variant === 'primary' ? 'bg-zinc-900' : variant === 'secondary' ? 'bg-zinc-800' : variant === 'outline' ? 'bg-transparent' : variant === 'ghost' ? 'bg-transparent' : 'bg-red-600',
        variant === 'primary' || variant === 'secondary' ? 'text-white' : variant === 'outline' || variant === 'ghost' ? 'text-zinc-900' : 'text-white',
        size === 'sm' ? 'text-xs' : size === 'md' ? 'text-sm' : 'text-base',
        loading ? 'opacity-50' : '',
        disabled ? 'opacity-50' : '',
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export function Card({ children, className = '' }: CardProps) {
  return (
    <div
      className={cn(
        'bg-white',
        'border',
        'border-zinc-200',
        'rounded-xl',
        'shadow-sm',
        className,
      )}
    >
      {children}
    </div>
  );
}

export interface CardHeaderProps {
  children: React.ReactNode;
}

export function CardHeader({ children }: CardHeaderProps) {
  return (
    <div
      className={cn(
        'flex',
        'items-center',
        'justify-between',
        'px-4',
        'py-2',
        'border-b',
        'border-zinc-200',
      )}
    >
      {children}
    </div>
  );
}

export interface CardTitleProps {
  children: React.ReactNode;
}

export function CardTitle({ children }: CardTitleProps) {
  return (
    <h2
      className={cn(
        'text-lg',
        'font-bold',
        'text-zinc-900',
      )}
    >
      {children}
    </h2>
  );
}

export interface CardContentProps {
  children: React.ReactNode;
}

export function CardContent({ children }: CardContentProps) {
  return (
    <div
      className={cn(
        'px-4',
        'py-2',
      )}
    >
      {children}
    </div>
  );
}

export interface BadgeProps {
  children: React.ReactNode;
  variant?: 'success' | 'warning' | 'error';
}

export function Badge({ children, variant = 'success' }: BadgeProps) {
  return (
    <span
      className={cn(
        'px-2',
        'py-1',
        'text-sm',
        'font-medium',
        'rounded-lg',
        variant === 'success' ? 'bg-emerald-50' : variant === 'warning' ? 'bg-amber-50' : 'bg-red-50',
        variant === 'success' ? 'text-emerald-600' : variant === 'warning' ? 'text-amber-600' : 'text-red-600',
      )}
    >
      {children}
    </span>
  );
}

export interface InputProps {
  children: React.ReactNode;
  type?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function Input({ children, type = 'text', value, onChange }: InputProps) {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      className={cn(
        'w-full',
        'p-2',
        'text-sm',
        'border',
        'border-zinc-200',
        'rounded-md',
      )}
      placeholder={children}
    />
  );
}

export interface ModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

export function Modal({ children, isOpen, onClose }: ModalProps) {
  return (
    <div
      className={cn(
        'fixed',
        'top-0',
        'left-0',
        'right-0',
        'bottom-0',
        'bg-black',
        'bg-opacity-50',
        'flex',
        'items-center',
        'justify-center',
        isOpen ? 'block' : 'hidden',
      )}
    >
      <div
        className={cn(
          'bg-white',
          'border',
          'border-zinc-200',
          'rounded-xl',
          'shadow-md',
        )}
      >
        {children}
        <button
          className={cn(
            'absolute',
            'top-4',
            'right-4',
          )}
          onClick={onClose}
        >
          <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
}

export interface AvatarProps {
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
}

export function Avatar({ children, size = 'md' }: AvatarProps) {
  return (
    <div
      className={cn(
        'flex',
        'items-center',
        'justify-center',
        size === 'sm' ? 'w-6' : size === 'md' ? 'w-8' : 'w-10',
        size === 'sm' ? 'h-6' : size === 'md' ? 'h-8' : 'h-10',
        'rounded-full',
        'bg-zinc-200',
      )}
    >
      {children}
    </div>
  );
}

export interface StatCardProps {
  children: React.ReactNode;
  title: string;
  value: string;
}

export function StatCard({ children, title, value }: StatCardProps) {
  return (
    <div
      className={cn(
        'bg-white',
        'border',
        'border-zinc-200',
        'rounded-xl',
        'shadow-sm',
        'p-4',
      )}
    >
      <h2
        className={cn(
          'text-lg',
          'font-bold',
          'text-zinc-900',
        )}
      >
        {title}
      </h2>
      <p
        className={cn(
          'text-3xl',
          'font-bold',
          'text-zinc-900',
        )}
      >
        {value}
      </p>
      {children}
    </div>
  );
}