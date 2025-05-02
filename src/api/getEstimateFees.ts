import { GET_FROM_VM } from '../utils/requests';
import { GetEstimateFees as GetEstimateFeesResponse } from '../types/apiResponse';
import { handleError, AppError } from '../utils/errorHandler';
import { GetEstimateFeesInput } from '../types/apiRequest';

export async function getEstimateFees(token_count: GetEstimateFeesInput) {
  try {
    const vmClient = new GET_FROM_VM();
    const response = await vmClient.get<GetEstimateFeesResponse>('estimate_fees', { token_count });
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