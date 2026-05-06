'use client';

import { useState, useEffect } from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { StatCard, Card, CardHeader, CardTitle, CardContent, Badge, Avatar, Table, Button } from '@/components/ui';
import { BarChart, Sparkline } from '@/components/charts';
import { STATS, MOCK_VIDEOS, RECENT_ACTIVITY, DEMO_USER, CHART_DATA, SPARKLINE_DATA, formatDate, formatCurrency } from '@/lib/data';
import AppHeader from '@/components/layout/AppHeader';

export default function DashboardPage() {
  const [selectedRow, setSelectedRow] = useState(null);
  const [activeTab, setActiveTab] = useState('overview');
  const [toastMsg, setToastMsg] = useState('');
  const [filter, setFilter] = useState('');

  useEffect(() => {
    if (toastMsg) {
      const timer = setTimeout(() => setToastMsg(''), 2000);
      return () => clearTimeout(timer);
    }
  }, [toastMsg]);

  const handleRowClick = (row) => {
    setSelectedRow(row);
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const filteredVideos = MOCK_VIDEOS.filter((video) => video.title.toLowerCase().includes(filter.toLowerCase()));

  return (
    <div>
      <AppHeader title="Dashboard" subtitle={`Good morning, ${DEMO_USER.name}`} actions={<Button size="sm">+ New Video</Button>} />

      <div className="grid grid-cols-4 gap-6">
        {STATS.map((stat, index) => (
          <StatCard key={index} title={stat.title} value={stat.value} sparkline={SPARKLINE_DATA[index]} />
        ))}
      </div>

      <div className="grid grid-cols-3 gap-6">
        <Card className="col-span-2">
          <CardHeader>
            <CardTitle>Video Editor Overview</CardTitle>
            <CardContent>
              <BarChart data={CHART_DATA.weekly} labels={CHART_DATA.labels} />
            </CardContent>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardContent>
              <ul>
                {RECENT_ACTIVITY.map((activity, index) => (
                  <li key={index} className="flex items-center gap-3 py-2 border-b border-zinc-50 last:border-0">
                    <Avatar src={activity.user.avatar} />
                    <span>{activity.action} {formatDate(activity.time)}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </CardHeader>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All Videos</CardTitle>
          <input type="search" value={filter} onChange={handleFilterChange} placeholder="Search videos" className="ml-4" />
          <Button size="sm" onClick={() => setToastMsg('Exporting videos...')}>Export</Button>
        </CardHeader>
        <CardContent>
          <Table
            columns={[
              { label: 'Title', accessor: 'title' },
              { label: 'Duration', accessor: 'duration' },
              { label: 'Status', accessor: 'status' },
              { label: 'Uploaded', accessor: 'uploaded' },
            ]}
            rows={filteredVideos}
            onRowClick={handleRowClick}
          />
          {selectedRow && (
            <div className="bg-zinc-50 p-4 border border-zinc-200 rounded-md mt-4">
              <h2 className="font-bold text-zinc-900">{selectedRow.title}</h2>
              <p className="text-zinc-600">{selectedRow.description}</p>
            </div>
          )}
        </CardContent>
      </Card>

      <div className="flex gap-4">
        <Button size="sm" onClick={() => setToastMsg('New video created...')}>New Video</Button>
        <Button size="sm" onClick={() => setToastMsg('Video uploaded...')}>Upload Video</Button>
        <Button size="sm" onClick={() => setToastMsg('Video edited...')}>Edit Video</Button>
      </div>

      {toastMsg && (
        <div className="fixed bottom-4 right-4 bg-zinc-900 text-white px-4 py-2 rounded-lg text-sm">{toastMsg}</div>
      )}
    </div>
  );
}