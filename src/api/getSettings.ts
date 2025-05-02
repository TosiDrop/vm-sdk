import { GET_FROM_VM } from '../utils/requests';
import { GetSettings as GetSettingsResponse } from '../types/apiResponse';
import { handleError, AppError } from '../utils/errorHandler';

export async function getSettings() {
  try {
    const vmClient = new GET_FROM_VM();
    const response = await vmClient.get<GetSettingsResponse>('get_settings');
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