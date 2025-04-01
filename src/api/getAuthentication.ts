import { GET_FROM_VM } from '../utils/requests';
import { IsAuthenticated as IsAuthenticatedResponse } from '../types/apiResponse';
import { handleError, AppError } from '../utils/errorHandler';

export async function isAuthenticated() {
  try {
    const vmClient = new GET_FROM_VM();
    const response = await vmClient.get<IsAuthenticatedResponse>('is_authenticated');
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
