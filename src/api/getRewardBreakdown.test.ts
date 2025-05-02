import axios from 'axios';
import { getRewardBreakdown } from './getRewardBreakdown';
import { setApiToken } from '../utils/requests';
import { VM_URL } from '../config';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('getRewardBreakdown', () => {
  const testApiToken = 'test-token-123';
  const expectedUrl = `${VM_URL}/api.php?action=get_reward_breakdown&staking_address=stake_12345`;

  beforeEach(() => {
    mockedAxios.get.mockClear();
    mockedAxios.get.mockResolvedValue({ data: {} });
    setApiToken(testApiToken);
  });

  it('should call axios.get with the correctly constructed URL and headers', async () => {
    await getRewardBreakdown('stake_12345')

    expect(mockedAxios.get).toHaveBeenCalledTimes(1);
    expect(mockedAxios.get).toHaveBeenCalledWith(
      expectedUrl,
      {
        headers: { 'X-API-Token': testApiToken },
      }
    );
  });
});
