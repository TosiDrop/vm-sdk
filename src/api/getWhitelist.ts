import { GET_FROM_VM } from '../utils/requests';
import { GetWhitelist as GetWhitelistResponse } from '../types/apiResponse';
import { handleError, AppError } from '../utils/errorHandler';

export async function getWhitelist() {
  try {
    const vmClient = new GET_FROM_VM();
    const response = await vmClient.get<GetWhitelistResponse>('get_whitelist');
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