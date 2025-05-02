import { GET_FROM_VM } from '../utils/requests';
import { GetCustomRequest as GetCustomRequestResponse } from '../types/apiResponse';
import { handleError, AppError } from '../utils/errorHandler';
import { GetCustomRequestInput } from '../types/apiRequest';

export async function getCustomRequest(input: GetCustomRequestInput) {
  try {
    const vmClient = new GET_FROM_VM();
    const response = await vmClient.get<GetCustomRequestResponse>('custom_request', input);
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