import axios from 'axios';
import { isAuthenticated } from './getAuthentication';
import { IsAuthenticated as IsAuthenticatedResponse } from '../types/apiResponse';
import { setApiToken } from '../utils/requests';
import { VM_URL } from '../config';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('isAuthenticated', () => {
  const testApiToken = 'test-token-123';
  const expectedUrl = `${VM_URL}/api.php?action=is_authenticated`;

  beforeEach(() => {
    mockedAxios.get.mockClear();
    setApiToken(testApiToken);
  });

  it('should call axios.get with the correctly constructed URL and headers', async () => {
    const mockApiResponse = { data: { authenticated: true } as IsAuthenticatedResponse };
    mockedAxios.get.mockResolvedValue(mockApiResponse);

    await isAuthenticated();

    expect(mockedAxios.get).toHaveBeenCalledTimes(1);

    expect(mockedAxios.get).toHaveBeenCalledWith(
      expectedUrl,
      {
        headers: { 'X-API-Token': testApiToken },
      }
    );
  });
});
