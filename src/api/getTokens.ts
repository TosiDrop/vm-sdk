import { GET_FROM_VM } from '../utils/requests';
import { GetTokens as GetTokensResponse } from '../types/apiResponse';
import { handleError, AppError } from '../utils/errorHandler';

export async function getTokens() {
  try {
    const vmClient = new GET_FROM_VM();
    const response = await vmClient.get<GetTokensResponse>('get_tokens');
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