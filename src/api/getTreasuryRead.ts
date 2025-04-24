import { GET_FROM_VM } from "../utils/requests";
import { GetTokenRequest as GetTokenRequestResponse } from "../types/apiResponse";
import { AppError, handleError } from "../utils/errorHandler";

export async function getTreasuryRead() {
  try {
    const vmClient = new GET_FROM_VM();
    const response = await vmClient.get<GetTokenRequestResponse>('treasury_read');
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