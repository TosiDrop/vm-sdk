import { GET_FROM_VM } from '../utils/requests';
import { GetBlacklist as GetBlacklistResponse } from '../types/apiResponse';
import { handleError, AppError } from '../utils/errorHandler';

export async function getBlacklist() {
  try {
    const vmClient = new GET_FROM_VM();
    const response = await vmClient.get<GetBlacklistResponse>('get_blacklist');
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