import { GET_FROM_VM } from "../utils/requests";
import { GetTx as GetTxResponse } from "../types/apiResponse";
import { AppError, handleError } from "../utils/errorHandler";
import { GetTxInput } from "../types/apiRequest";

export async function getTx(input: GetTxInput) {
  try {
    const vmClient = new GET_FROM_VM();
    const response = await vmClient.get<GetTxResponse>('get_tx', { txid: input.txid });
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