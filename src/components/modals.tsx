'use client';

import { useState } from 'react';
import { Modal, Badge, Button, Avatar } from '@/components/ui';

export function EntityDetailModal({ item, open, onClose, title }: { item: any; open: boolean; onClose: () => void; title: string }) {
  if (!item) return null;

  const handleClose = () => {
    onClose();
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <h2 className="text-lg font-bold">{title}</h2>
      <div className="grid grid-cols-2 gap-4">
        {Object.entries(item).map(([key, value]) => (
          <div key={key}>
            <p className="text-sm font-bold">{key}</p>
            <p className="text-sm">{value}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-end">
        <Button variant="primary" onClick={handleClose}>
          Approve
        </Button>
        <Button variant="secondary" onClick={handleClose}>
          Archive
        </Button>
        <Button variant="danger" onClick={handleClose}>
          Delete
        </Button>
      </div>
      <Badge variant="info">{item.status}</Badge>
    </Modal>
  );
}

export function ConfirmModal({
  open,
  onClose,
  title,
  message,
  onConfirm,
  confirmLabel = 'Confirm',
  variant = 'info',
}: {
  open: boolean;
  onClose: () => void;
  title: string;
  message: string;
  onConfirm: () => void;
  confirmLabel?: string;
  variant?: 'danger' | 'info';
}) {
  const handleClose = () => {
    onClose();
  };

  const handleConfirm = () => {
    onConfirm();
    handleClose();
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <h2 className="text-lg font-bold">{title}</h2>
      <p className="text-sm">{message}</p>
      <div className="flex justify-end">
        <Button variant={variant} onClick={handleConfirm}>
          {confirmLabel}
        </Button>
        <Button variant="secondary" onClick={handleClose}>
          Cancel
        </Button>
      </div>
    </Modal>
  );
}

export function CommandPalette({
  open,
  onClose,
  items,
}: {
  open: boolean;
  onClose: () => void;
  items: { label: string; href: string; icon?: React.ReactNode; description?: string }[];
}) {
  const [search, setSearch] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'ArrowUp') {
      setSelectedIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
    } else if (event.key === 'ArrowDown') {
      setSelectedIndex((prevIndex) => (prevIndex + 1) % items.length);
    } else if (event.key === 'Enter') {
      const selectedItem = items[selectedIndex];
      if (selectedItem) {
        window.location.href = selectedItem.href;
      }
    } else if (event.key === 'Escape') {
      onClose();
    }
  };

  const filteredItems = items.filter((item) => item.label.toLowerCase().includes(search.toLowerCase()));

  return (
    <Modal open={open} onClose={onClose}>
      <Input
        type="text"
        value={search}
        onChange={handleSearchChange}
        placeholder="Search"
        icon={<Lucide.Search />}
        autoFocus
        onKeyDown={handleKeyDown}
      />
      <ul>
        {filteredItems.map((item, index) => (
          <li key={item.label} className={index === selectedIndex ? 'bg-zinc-100' : ''}>
            <a href={item.href}>{item.label}</a>
            {item.description && <p className="text-sm">{item.description}</p>}
          </li>
        ))}
      </ul>
    </Modal>
  );
}