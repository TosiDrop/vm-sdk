global.fetch = jest.fn(async (input, init) => {
  const axios = jest.requireMock('axios');
  const response = await axios.get(String(input), init as never);
  return new Response(JSON.stringify(response.data), {
    status: response.status ?? 200,
    headers: { 'Content-Type': 'application/json' },
  });
});
