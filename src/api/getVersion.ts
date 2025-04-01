import { GET_FROM_VM } from '../utils/requests';
import { GetVersion as GetVersionResponse } from '../types/apiResponse';
import { handleError, AppError } from '../utils/errorHandler';

export async function getVersion() {
  try {
    const vmClient = new GET_FROM_VM();
    const response = await vmClient.get<GetVersionResponse>('get_version');
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

