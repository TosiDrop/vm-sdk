import axios from 'axios';
import { getCustomRequest } from './getCustomRequest';
import { setApiToken } from '../utils/requests';
import { VM_URL } from '../config';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('getCustomRequest', () => {
  const testApiToken = 'test-token-123';
  const expectedUrl = `${VM_URL}/api.php?action=custom_request&staking_address=stake_12345&session_id=session_FH406&selected=token_12345`;

  beforeEach(() => {
    mockedAxios.get.mockClear();
    mockedAxios.get.mockResolvedValue({ data: {} });
    setApiToken(testApiToken);
  });

  it('should call axios.get with the correctly constructed URL and headers', async () => {
    await getCustomRequest({ staking_address: 'stake_12345', session_id: 'session_FH406', selected: 'token_12345' })

    expect(mockedAxios.get).toHaveBeenCalledTimes(1);
    //https://vmprev.adaseal.eu/api.php?action=custom_request&staking_address=stake_12345&session_id=session_FH406&selected=token_12345
    expect(mockedAxios.get).toHaveBeenCalledWith(
      expectedUrl,
      {
        headers: { 'X-API-Token': testApiToken },
      }
    );
  });
});
