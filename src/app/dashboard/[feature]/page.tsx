'use client'
import { useParams } from 'next/navigation'
import { cn } from '@/components/ui';
import { Button, ArrowRight } from 'lucide-react';
import { MOCK_CONTRACTS, MOCK_VIDEOS, MOCK_EDITS, MOCK_PROJECTS } from '@/lib/data';
import { Card, CardHeader, CardTitle, CardContent, Badge, Input, Modal, Avatar, StatCard } from '@/components/ui';

const params = useParams()
const slug = (params.feature as string) ?? ''

if (slug === 'contracts') {
  return (
    <div className="p-6">
      <Card>
        <CardHeader>
          <CardTitle>Contracts</CardTitle>
          <Button variant="primary" size="md">New Contract</Button>
        </CardHeader>
        <CardContent>
          <table className="table-auto w-full text-left">
            <thead>
              <tr>
                <th className="px-4 py-2">Title</th>
                <th className="px-4 py-2">Status</th>
                <th className="px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {MOCK_CONTRACTS.map((contract) => (
                <tr key={contract.id}>
                  <td className="px-4 py-2">{contract.title}</td>
                  <td className="px-4 py-2">
                    <Badge variant={contract.status === 'pending' ? 'warning' : contract.status === 'approved' ? 'success' : 'error'}>{contract.status}</Badge>
                  </td>
                  <td className="px-4 py-2">
                    <Button variant="primary" size="sm">View</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>
    </div>
  );
} else if (slug === 'videos') {
  return (
    <div className="p-6">
      <Card>
        <CardHeader>
          <CardTitle>Videos</CardTitle>
          <Button variant="primary" size="md">Upload Video</Button>
        </CardHeader>
        <CardContent>
          <table className="table-auto w-full text-left">
            <thead>
              <tr>
                <th className="px-4 py-2">Title</th>
                <th className="px-4 py-2">Status</th>
                <th className="px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {MOCK_VIDEOS.map((video) => (
                <tr key={video.id}>
                  <td className="px-4 py-2">{video.title}</td>
                  <td className="px-4 py-2">
                    <Badge variant={video.status === 'uploaded' ? 'warning' : video.status === 'processing' ? 'warning' : video.status === 'ready' ? 'success' : 'error'}>{video.status}</Badge>
                  </td>
                  <td className="px-4 py-2">
                    <Button variant="primary" size="sm">View</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>
    </div>
  );
} else if (slug === 'edits') {
  return (
    <div className="p-6">
      <Card>
        <CardHeader>
          <CardTitle>Edits</CardTitle>
          <Button variant="primary" size="md">New Edit</Button>
        </CardHeader>
        <CardContent>
          <table className="table-auto w-full text-left">
            <thead>
              <tr>
                <th className="px-4 py-2">Title</th>
                <th className="px-4 py-2">Status</th>
                <th className="px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {MOCK_EDITS.map((edit) => (
                <tr key={edit.id}>
                  <td className="px-4 py-2">{edit.type}</td>
                  <td className="px-4 py-2">
                    <Badge variant={edit.status === 'pending' ? 'warning' : edit.status === 'processing' ? 'warning' : edit.status === 'done' ? 'success' : 'error'}>{edit.status}</Badge>
                  </td>
                  <td className="px-4 py-2">
                    <Button variant="primary" size="sm">View</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>
    </div>
  );
} else {
  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Contracts</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-zinc-600">Manage your contracts</p>
          <Button variant="primary" size="md" href="/dashboard/contracts">Open →</Button>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Videos</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-zinc-600">Manage your videos</p>
          <Button variant="primary" size="md" href="/dashboard/videos">Open →</Button>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Edits</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-zinc-600">Manage your edits</p>
          <Button variant="primary" size="md" href="/dashboard/edits">Open →</Button>
        </CardContent>
      </Card>
    </div>
  );
}