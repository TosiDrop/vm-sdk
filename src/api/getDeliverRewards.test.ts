import axios from 'axios';
import { deliverReward } from './getDeliverRewards';
import { setApiToken } from '../utils/requests';
import { VM_URL } from '../config';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('getDeliveredRewards', () => {
  const testApiToken = 'test-token-123';
  const expectedUrl = `${VM_URL}/api.php?action=deliver_reward&staking_address=stake_12345&token_id=lovelace&amount=8&overcommit=true&expiry=20&return_policy=2`;

  beforeEach(() => {
    mockedAxios.get.mockClear();
    mockedAxios.get.mockResolvedValue({ data: {} });
    setApiToken(testApiToken);
  });

  it('should call axios.get with the correctly constructed URL and headers', async () => {
    await deliverReward({
      staking_address: 'stake_12345',
      token_id: 'lovelace',
      amount: 8,
      overcommit: true,
      expiry: 20,
      return_policy: 2,
    });

    expect(mockedAxios.get).toHaveBeenCalledTimes(1);
    expect(mockedAxios.get).toHaveBeenCalledWith(
      expectedUrl,
      {
        headers: { 'X-API-Token': testApiToken },
      }
    );
  });
});
