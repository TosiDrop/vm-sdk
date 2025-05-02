import { GET_FROM_VM } from '../utils/requests';
import { GetPools as GetPoolsResponse } from '../types/apiResponse';
import { handleError, AppError } from '../utils/errorHandler';

export async function getPools() {
  try {
    const vmClient = new GET_FROM_VM();
    const response = await vmClient.get<GetPoolsResponse>('get_pools');
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