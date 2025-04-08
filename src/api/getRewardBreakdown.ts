import { GET_FROM_VM } from '../utils/requests';
import { GetRewardBreakdown as GetRewardBreakdownResponse } from '../types/apiResponse';
import { handleError, AppError } from '../utils/errorHandler';
import { GetRewardBreakdownInput } from '../types/apiRequest';

export async function getRewardBreakdown(staking_address: GetRewardBreakdownInput) {
  try {
    const vmClient = new GET_FROM_VM();
    const response = await vmClient.get<GetRewardBreakdownResponse>('get_reward_breakdown', { staking_address });
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