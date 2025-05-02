import { GET_FROM_VM } from '../utils/requests';
import { handleError, AppError } from '../utils/errorHandler';
import { GetCheckStatusCustomRequestInput } from '../types/apiRequest';

export async function checkStatusCustomRequest(input: GetCheckStatusCustomRequestInput) {
  try {
    const vmClient = new GET_FROM_VM();
    const response = await vmClient.get('check_status_custom_request', { staking_address: input.staking_address, request_id: input.request_id, session_id: input.session_id });
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