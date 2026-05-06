export interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  plan: string;
  avatar: string;
  joined: string;
  createdAt: string;
  updatedAt: string;
}

export interface Video {
  id: string;
  title: string;
  description: string;
  duration: number;
  status: 'uploaded' | 'processing' | 'ready' | 'error';
  createdAt: string;
  updatedAt: string;
}

export interface Edit {
  id: string;
  videoId: string;
  userId: string;
  type: 'trim' | 'split' | 'merge' | 'text' | 'music';
  data: string;
  status: 'pending' | 'processing' | 'done' | 'failed';
  createdAt: string;
  updatedAt: string;
}

export interface Project {
  id: string;
  title: string;
  userId: string;
  videoIds: string[];
  status: 'draft' | 'published' | 'archived';
  createdAt: string;
  updatedAt: string;
}

export type ApiResponse<T> = {
  ok: boolean;
  data: T;
  error?: string;
}