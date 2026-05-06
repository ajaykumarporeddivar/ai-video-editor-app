'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Card, Button, Input, Badge } from '@/components/ui';
import { AppHeader } from '@/components/layout';
import { DEMO_USER } from '@/lib/data';

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState('profile');
  const [name, setName] = useState(DEMO_USER.name);
  const [email, setEmail] = useState(DEMO_USER.email);
  const [role, setRole] = useState(DEMO_USER.role);
  const [saved, setSaved] = useState(false);
  const [emailNotification, setEmailNotification] = useState(true);
  const [pushNotification, setPushNotification] = useState(true);
  const [weeklyDigest, setWeeklyDigest] = useState(true);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="max-w-5xl mx-auto p-4 sm:p-6 md:p-8 bg-zinc-50 rounded-xl shadow-sm">
      <AppHeader />
      <h1 className="text-2xl font-bold text-zinc-900 tracking-tight">Settings</h1>
      <ul className="flex flex-wrap gap-4 mt-4">
        <li>
          <Button
            variant="primary"
            size="md"
            onClick={() => setActiveTab('profile')}
            className={cn(
              'rounded-lg',
              activeTab === 'profile' && 'bg-zinc-900 text-white',
              activeTab !== 'profile' && 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200'
            )}
          >
            Profile
          </Button>
        </li>
        <li>
          <Button
            variant="primary"
            size="md"
            onClick={() => setActiveTab('notifications')}
            className={cn(
              'rounded-lg',
              activeTab === 'notifications' && 'bg-zinc-900 text-white',
              activeTab !== 'notifications' && 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200'
            )}
          >
            Notifications
          </Button>
        </li>
        <li>
          <Button
            variant="primary"
            size="md"
            onClick={() => setActiveTab('appearance')}
            className={cn(
              'rounded-lg',
              activeTab === 'appearance' && 'bg-zinc-900 text-white',
              activeTab !== 'appearance' && 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200'
            )}
          >
            Appearance
          </Button>
        </li>
      </ul>
      {activeTab === 'profile' && (
        <Card className="mt-4">
          <h2 className="text-lg font-bold text-zinc-900 tracking-tight">Profile</h2>
          <Input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            className="mt-2"
          />
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="mt-2"
          />
          <Input
            type="text"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            placeholder="Role"
            className="mt-2"
          />
          <Button variant="primary" size="md" onClick={handleSave} className="mt-2">
            Save
          </Button>
          {saved && (
            <Badge variant="success" className="mt-2">
              Saved!
            </Badge>
          )}
        </Card>
      )}
      {activeTab === 'notifications' && (
        <Card className="mt-4">
          <h2 className="text-lg font-bold text-zinc-900 tracking-tight">Notifications</h2>
          <div className="flex items-center gap-2 mt-2">
            <Input
              type="checkbox"
              checked={emailNotification}
              onChange={(e) => setEmailNotification(e.target.checked)}
              className="mr-2"
            />
            <span>Email notifications</span>
          </div>
          <div className="flex items-center gap-2 mt-2">
            <Input
              type="checkbox"
              checked={pushNotification}
              onChange={(e) => setPushNotification(e.target.checked)}
              className="mr-2"
            />
            <span>Push notifications</span>
          </div>
          <div className="flex items-center gap-2 mt-2">
            <Input
              type="checkbox"
              checked={weeklyDigest}
              onChange={(e) => setWeeklyDigest(e.target.checked)}
              className="mr-2"
            />
            <span>Weekly digest</span>
          </div>
        </Card>
      )}
      {activeTab === 'appearance' && (
        <Card className="mt-4">
          <h2 className="text-lg font-bold text-zinc-900 tracking-tight">Appearance</h2>
          <div className="flex flex-wrap gap-4 mt-2">
            <Button
              variant="primary"
              size="md"
              className="bg-zinc-100 text-zinc-600 hover:bg-zinc-200 rounded-lg"
            >
              Light
            </Button>
            <Button
              variant="primary"
              size="md"
              className="bg-zinc-100 text-zinc-600 hover:bg-zinc-200 rounded-lg"
            >
              Dark
            </Button>
            <Button
              variant="primary"
              size="md"
              className="bg-zinc-100 text-zinc-600 hover:bg-zinc-200 rounded-lg"
            >
              System
            </Button>
          </div>
          <div className="flex flex-wrap gap-4 mt-2">
            <Button
              variant="primary"
              size="md"
              className="bg-zinc-100 text-zinc-600 hover:bg-zinc-200 rounded-lg"
            >
              English
            </Button>
            <Button
              variant="primary"
              size="md"
              className="bg-zinc-100 text-zinc-600 hover:bg-zinc-200 rounded-lg"
            >
              Spanish
            </Button>
            <Button
              variant="primary"
              size="md"
              className="bg-zinc-100 text-zinc-600 hover:bg-zinc-200 rounded-lg"
            >
              French
            </Button>
          </div>
        </Card>
      )}
    </div>
  );
}