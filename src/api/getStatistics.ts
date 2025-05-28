import { GET_FROM_VM } from '../utils/requests';
import { GetStatistics as GetStatisticsResponse } from '../types/apiResponse';
import { handleError, AppError } from '../utils/errorHandler';

export async function getStatistics() {
  try {
    const vmClient = new GET_FROM_VM();
    const response = await vmClient.get<GetStatisticsResponse>('get_statistics');
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