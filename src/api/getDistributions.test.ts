import axios from 'axios';
import { getDistributions } from './getDistributions';
import { setApiToken } from '../utils/requests';
import { VM_URL } from '../config';
import type { GetDistributions } from '../types/apiResponse';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('getDistributions', () => {
  const testApiToken = 'test-token-123';
  const expectedUrl = `${VM_URL}/api.php?action=get_distributions`;
  const expectedResponse: GetDistributions = {
    everyone: [
      {
        id: 'distribution-pool',
        token_id: 'token-1',
        amount: '1000000',
        pool_id: 'pool1',
        enabled: 't',
        min_age: '0',
        min_stake: '0',
        target: 'stake',
        model: 'fixed',
        expiry: '0',
        promise: 't',
        return_policy: 'none',
        stake_cap: '0',
        filter: '',
        unlocks_in: '0',
        last_status: 'complete',
        last_time: '0',
        project_locked: 'f',
      },
    ],
    vip: [
      {
        id: 'distribution-project',
        token_id: 'token-2',
        amount: '2000000',
        pool_id: 'P_BTC',
        enabled: 't',
        min_age: '5',
        min_stake: '1000000',
        target: 'stake',
        model: 'fixed',
        expiry: '0',
        promise: 'f',
        return_policy: 'none',
        stake_cap: '0',
        filter: '',
        unlocks_in: '0',
        last_status: 'pending',
        last_time: '0',
        project_locked: 't',
      },
    ],
  };

  beforeEach(() => {
    mockedAxios.get.mockClear();
    mockedAxios.get.mockResolvedValue({ data: expectedResponse });
    setApiToken(testApiToken);
  });

  it('should return distributions grouped by audience', async () => {
    await expect(getDistributions()).resolves.toEqual(expectedResponse);
  });

  it('should call the VM with the correctly constructed URL and headers', async () => {
    await getDistributions();
    expect(mockedAxios.get).toHaveBeenCalledTimes(1);
    expect(mockedAxios.get).toHaveBeenCalledWith(
      expectedUrl,
      {
        headers: { 'X-API-Token': testApiToken },
      }
    );
  });
});
