import { GET_FROM_VM } from '../utils/requests';
import { GetDistributions as GetDistributionsResponse } from '../types/apiResponse';
import { handleError, AppError } from '../utils/errorHandler';

export async function getDistributions() {
  try {
    const vmClient = new GET_FROM_VM();
    const response = await vmClient.get<GetDistributionsResponse>('get_distributions');
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