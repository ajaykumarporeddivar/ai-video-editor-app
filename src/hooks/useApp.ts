'use client';

import { useState, useEffect } from 'react';

export function useLocalStorage<T>(key: string, initial: T): [T, (value: T) => void] {
  const [value, setValue] = useState<T>(initial);

  useEffect(() => {
    const storedValue = localStorage.getItem(key);
    if (storedValue) {
      setValue(JSON.parse(storedValue));
    }
  }, [key]);

  const setValueInLocalStorage = (newValue: T) => {
    setValue(newValue);
    localStorage.setItem(key, JSON.stringify(newValue));
  };

  return [value, setValueInLocalStorage];
}

export function useFilter<T extends Record<string, unknown>>(
  items: T[],
  fields: (keyof T)[]
): { filtered: T[]; search: string; setSearch: (search: string) => void; status: string; setStatus: (status: string) => void } {
  const [search, setSearch] = useState('');
  const [status, setStatus] = useState('');

  const filtered = items.filter((item) => {
    const hasSearchMatch = fields.some((field) => {
      const fieldValue = item[field];
      return typeof fieldValue === 'string' && fieldValue.toLowerCase().includes(search.toLowerCase());
    });
    const hasStatusMatch = status === '' || item.status === status;
    return hasSearchMatch && hasStatusMatch;
  });

  return { filtered, search, setSearch, status, setStatus };
}

export function useModal<T = unknown>(): {
  isOpen: boolean;
  open: (item?: T) => void;
  close: () => void;
  activeItem: T | null;
} {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState<T | null>(null);

  const open = (item?: T) => {
    setIsOpen(true);
    setActiveItem(item);
  };

  const close = () => {
    setIsOpen(false);
    setActiveItem(null);
  };

  return { isOpen, open, close, activeItem };
}

export function useDemoToast(): {
  message: string;
  type: 'success' | 'error' | 'info';
  visible: boolean;
  show: (message: string, type?: 'success' | 'error' | 'info') => void;
} {
  const [message, setMessage] = useState('');
  const [type, setType] = useState<'success' | 'error' | 'info'>('info');
  const [visible, setVisible] = useState(false);

  const show = (newMessage: string, newType?: 'success' | 'error' | 'info') => {
    setMessage(newMessage);
    setType(newType || 'info');
    setVisible(true);
    const timer = setTimeout(() => {
      setVisible(false);
    }, 2500);
    return () => clearTimeout(timer);
  };

  return { message, type, visible, show };
}