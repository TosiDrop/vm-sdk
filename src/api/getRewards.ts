import { GET_FROM_VM } from '../utils/requests';
import { GetRewards as GetRewardsResponse } from '../types/apiResponse';
import { handleError, AppError } from '../utils/errorHandler';
import { GetRewardsInput } from '../types/apiRequest';

export async function getRewards(staking_address: GetRewardsInput) {
  try {
    const vmClient = new GET_FROM_VM();
    const response = await vmClient.get<GetRewardsResponse>('get_rewards', { staking_address });
    return response;
  } catch (error) {
    const errorResponse = handleError(error);
    throw new AppError(
      errorResponse.message,
      errorResponse.status,
      errorResponse.code,
      errorResponse.data
    );
  }
}