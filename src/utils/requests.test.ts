import { GET_FROM_VM, setApiToken } from './requests';

describe('GET_FROM_VM', () => {
  const originalFetch = global.fetch;

  beforeEach(() => {
    setApiToken('test-token');
    global.fetch = jest.fn(async () => new Response(JSON.stringify({ ok: true })));
  });

  afterEach(() => {
    global.fetch = originalFetch;
  });

  it('uses fetch with the VM URL and API token', async () => {
    const client = new GET_FROM_VM('https://vm.example');

    await expect(client.get('get_tokens', { include_hidden: false })).resolves.toEqual({ ok: true });
    expect(fetch).toHaveBeenCalledWith(
      'https://vm.example/api.php?action=get_tokens&include_hidden=false',
      { headers: { 'X-API-Token': 'test-token' } },
    );
  });
});
