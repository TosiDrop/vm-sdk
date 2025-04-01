import { GET_FROM_VM } from "../utils/requests";
import { GetHealth as GetHealthResponse } from "../types/apiResponse";
import { AppError, handleError } from "../utils/errorHandler";

export async function getHealth() {
  try {
    const vmClient = new GET_FROM_VM();
    const response = await vmClient.get<GetHealthResponse>('health');
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