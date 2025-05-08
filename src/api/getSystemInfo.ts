import { GET_FROM_VM } from '../utils/requests';
import { GetSystemInfo as GetSystemInfoResponse } from '../types/apiResponse';
import { handleError, AppError } from '../utils/errorHandler';

  export async function getSystemInfo() {
  try {
    const vmClient = new GET_FROM_VM();
    const response = await vmClient.get<GetSystemInfoResponse>('system_info');
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