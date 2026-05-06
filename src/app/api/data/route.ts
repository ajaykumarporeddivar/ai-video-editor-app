import { MOCK_CONTRACTS, MOCK_VIDEOS, MOCK_EDITS } from '@/lib/data';

export async function GET(): Promise<Response> {
  const data = {
    contracts: MOCK_CONTRACTS,
    videos: MOCK_VIDEOS,
    edits: MOCK_EDITS,
    stats: {
      contracts: MOCK_CONTRACTS.length,
      videos: MOCK_VIDEOS.length,
      edits: MOCK_EDITS.length,
    },
    total: MOCK_CONTRACTS.length + MOCK_VIDEOS.length + MOCK_EDITS.length,
  };

  return new Response(JSON.stringify({ ok: true, data, total: data.total }), {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  });
}

export async function POST({ request }: any): Promise<Response> {
  const body = await request.json();
  return new Response(JSON.stringify({ ok: true, message: 'Demo mode — data not persisted', received: body }), {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  });
}

export async function OPTIONS(): Promise<Response> {
  return new Response(null, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}