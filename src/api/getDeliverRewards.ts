import { GET_FROM_VM } from '../utils/requests';
import { handleError, AppError } from '../utils/errorHandler';
import { DeliverRewardInput } from '../types/apiRequest';
import { GetDeliveredRewards as GetDeliveredRewardsResponse } from '../types/apiResponse';

export async function deliverReward(input: DeliverRewardInput) {
  try {
    const vmClient = new GET_FROM_VM();
    const params: any = {
      staking_address: input.staking_address,
      token_id: input.token_id,
      amount: input.amount,
      overcommit: input.overcommit,
      expiry: input.expiry,
      return_policy: input.return_policy,
    };

    if (input.unlocks_on !== undefined) {
      params.unlocks_on = input.unlocks_on;
    }
    if (input.project_locked !== undefined) {
      params.project_locked = input.project_locked;
    }

    const response = await vmClient.get<GetDeliveredRewardsResponse>('deliver_reward', params);
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

export default deliverReward;
