import axios from 'axios';
import { getVersion } from './getVersion';
import { setApiToken } from '../utils/requests';
import { VM_URL } from '../config';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('getVersion', () => {
  const testApiToken = 'test-token-123';
  const expectedUrl = `${VM_URL}/api.php?action=get_version`;

  beforeEach(() => {
    mockedAxios.get.mockClear();
    mockedAxios.get.mockResolvedValue({ data: {} });
    setApiToken(testApiToken);
  });

  it('should call axios.get with the correctly constructed URL and headers', async () => {
    await getVersion();

    expect(mockedAxios.get).toHaveBeenCalledTimes(1);
    expect(mockedAxios.get).toHaveBeenCalledWith(
      expectedUrl,
      {
        headers: { 'X-API-Token': testApiToken },
      }
    );
  });
});
