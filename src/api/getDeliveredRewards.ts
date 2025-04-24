import { GET_FROM_VM } from '../utils/requests';
import { handleError, AppError } from '../utils/errorHandler';
import { GetDeliveredRewards as GetDeliveredRewardsResponse } from '../types/apiResponse';
import { GetDeliveredRewardsInput } from '../types/apiRequest';

export async function getDeliveredRewards(input: GetDeliveredRewardsInput) {
  try {
    const vmClient = new GET_FROM_VM();
    const params: any = { staking_address: input.staking_address };

    if (input.token_id) {
      params.token_id = input.token_id;
    }

    const response = await vmClient.get<GetDeliveredRewardsResponse>('delivered_rewards', params);
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

export default getDeliveredRewards;
