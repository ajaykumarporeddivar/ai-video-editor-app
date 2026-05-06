'use client';

import { useState } from 'react';
import { Button, Input, Badge } from '@/components/ui';
import { MOCK_VIDEOS } from '@/lib/data';

export function CreateEntityForm() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [duration, setDuration] = useState(0);
  const [status, setStatus] = useState('');
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newErrors = {};
    if (!title) newErrors.title = 'Title is required';
    if (!description) newErrors.description = 'Description is required';
    if (!duration) newErrors.duration = 'Duration is required';
    if (!status) newErrors.status = 'Status is required';
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      setSubmitted(true);
      // Simulate API call
      setTimeout(() => {
        setSubmitted(false);
      }, 2000);
    }
  };

  const handleReset = () => {
    setTitle('');
    setDescription('');
    setDuration(0);
    setStatus('');
    setErrors({});
    setSubmitted(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        type="text"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        placeholder="Title"
        error={errors.title}
      />
      <Input
        type="text"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
        placeholder="Description"
        error={errors.description}
      />
      <Input
        type="number"
        value={duration}
        onChange={(event) => setDuration(event.target.valueAsNumber)}
        placeholder="Duration"
        error={errors.duration}
      />
      <Input
        type="text"
        value={status}
        onChange={(event) => setStatus(event.target.value)}
        placeholder="Status"
        error={errors.status}
      />
      <Button type="submit" variant="primary">
        Create
      </Button>
      <Button type="button" variant="secondary" onClick={handleReset}>
        Reset
      </Button>
      {submitted && <Badge variant="success">Entity created successfully!</Badge>}
    </form>
  );
}

export type FilterState = {
  search: string;
  status: string;
  dateRange: string;
  sortBy: string;
  sortDir: 'asc' | 'desc';
};

export function SearchAndFilter({ onChange }: { onChange: (filters: FilterState) => void }) {
  const [search, setSearch] = useState('');
  const [status, setStatus] = useState('');
  const [dateRange, setDateRange] = useState('');
  const [sortBy, setSortBy] = useState('');
  const [sortDir, setSortDir] = useState<'asc' | 'desc'>('asc');

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
    onChange({ search: event.target.value, status, dateRange, sortBy, sortDir });
  };

  const handleStatusChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setStatus(event.target.value);
    onChange({ search, status: event.target.value, dateRange, sortBy, sortDir });
  };

  const handleDateRangeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDateRange(event.target.value);
    onChange({ search, status, dateRange: event.target.value, sortBy, sortDir });
  };

  const handleSortByChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSortBy(event.target.value);
    onChange({ search, status, dateRange, sortBy: event.target.value, sortDir });
  };

  const handleSortDirChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSortDir(event.target.value as 'asc' | 'desc');
    onChange({ search, status, dateRange, sortBy, sortDir: event.target.value as 'asc' | 'desc' });
  };

  const handleClearFilters = () => {
    setSearch('');
    setStatus('');
    setDateRange('');
    setSortBy('');
    setSortDir('asc');
    onChange({ search: '', status: '', dateRange: '', sortBy: '', sortDir: 'asc' });
  };

  return (
    <div>
      <Input
        type="text"
        value={search}
        onChange={handleSearchChange}
        placeholder="Search"
        icon={<Lucide.Search />}
      />
      <select value={status} onChange={handleStatusChange}>
        <option value="">Status</option>
        <option value="uploaded">Uploaded</option>
        <option value="processing">Processing</option>
        <option value="ready">Ready</option>
      </select>
      <Input
        type="text"
        value={dateRange}
        onChange={handleDateRangeChange}
        placeholder="Date Range"
      />
      <select value={sortBy} onChange={handleSortByChange}>
        <option value="">Sort By</option>
        <option value="title">Title</option>
        <option value="description">Description</option>
        <option value="duration">Duration</option>
      </select>
      <select value={sortDir} onChange={handleSortDirChange}>
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>
      <Button type="button" variant="secondary" onClick={handleClearFilters}>
        Clear Filters
      </Button>
    </div>
  );
}

export function ExportButton({ data }: { data: any[] }) {
  const [exported, setExported] = useState(false);

  const handleExport = () => {
    const csv = data.map((row) => Object.values(row).join(',')).join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'data.csv';
    a.click();
    setExported(true);
    setTimeout(() => {
      setExported(false);
    }, 2000);
  };

  return (
    <Button type="button" variant="primary" onClick={handleExport}>
      Export CSV
      {exported && <Badge variant="success">Exported!</Badge>}
    </Button>
  );
}