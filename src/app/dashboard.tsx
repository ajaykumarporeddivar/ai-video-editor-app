'use client';

import { clsx } from 'clsx';
import AppSidebar from '@/components/layoutSidebar';
import AppHeader from '@/components/AppHeader';
importBanner from '@/components/DemoBanner';

 navItems = [
  icon: <i className="i-lucide-video" size={16} />, label: 'Video Editor', href: '/dashboard/video-editor' },
  { icon: <i className="i-lucide-project" size={16} />, label: 'Project Manager', href: '/dashboard/project-manager' },
  { icon: <i className="i-lucide-analytics" size={16} />, label: 'Analytics', href: '/dashboard/analytics' },
  { icon: <i className="i-lucide-settings" size={16} />, label: 'Settings', href: '/dashboard/settings' },
  { icon: <i className="i-lucide-help" size={16} />, label: 'Help', href: '/dashboard/help' },
];

export default function DashboardLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-zinc-50 pt-9">
      <AppSidebar items={navItems} projectName="AI Video Editor" />
      <div className="flex-1 ml-64 flex flex-col min-h-full">
        <DemoBanner />
        <main className="flex-1 p-6">
          {children}
        </main>
      </div>
    </div>
  );
}