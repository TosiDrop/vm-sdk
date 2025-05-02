import { GET_FROM_VM } from "../utils/requests";
import { GetPendingTxCount as GetPendingTxCountResponse } from "../types/apiResponse";
import { AppError, handleError } from "../utils/errorHandler";

export async function getPendingTxCount() {
  try {
    const vmClient = new GET_FROM_VM();
    const response = await vmClient.get<GetPendingTxCountResponse>('get_pending_tx_count');
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