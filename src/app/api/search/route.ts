import { MOCK_CONTRACTS, MOCK_VIDEOS, MOCK_EDITS } from '@/lib/data';
import { URLSearchParams } from 'url';

export async function GET({ request }: any): Promise<Response> {
  const url = new URL(request.url);
  const searchParams = new URLSearchParams(url.search);
  const query = searchParams.get('q');
  const type = searchParams.get('type');

  let results = [];

  if (query) {
    results = [
      ...MOCK_CONTRACTS.filter((contract) => contract.title.toLowerCase().includes(query.toLowerCase())),
      ...MOCK_VIDEOS.filter((video) => video.title.toLowerCase().includes(query.toLowerCase())),
      ...MOCK_EDITS.filter((edit) => edit.type.toLowerCase().includes(query.toLowerCase())),
    ];
  } else {
    results = [...MOCK_CONTRACTS.slice(0, 5), ...MOCK_VIDEOS.slice(0, 5), ...MOCK_EDITS.slice(0, 5)];
  }

  if (type) {
    results = results.filter((result) => result.type === type || (result as any).status === type);
  }

  const data = {
    results: results.slice(0, 20),
    total: results.length,
    query: query,
  };

  return new Response(JSON.stringify({ ok: true, data }), {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  });
}