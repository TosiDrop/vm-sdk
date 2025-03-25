export class AppError extends Error {
  status: number;
  code?: string;
  data?: any;

  constructor(message: string, status: number = 500, code?: string, data?: any) {
    super(message);
    this.name = 'AppError';
    this.status = status;
    this.code = code;
    this.data = data;
  }
}

export const handleError = (error: any) => {
  // SDK specific errors
  if (error instanceof AppError) {
    return {
      status: error.status,
      message: error.message,
      code: error.code,
      data: error.data
    };
  }

  // Network/API errors
  if (error?.response?.status) {
    return {
      status: error.response.status,
      message: error.response.data?.message || getDefaultMessage(error.response.status),
      code: error.response.data?.code,
      data: error.response.data
    };
  }

  // Connection/Network errors
  if (error?.request) {
    return {
      status: 0,
      message: 'Network error',
      code: 'NETWORK_ERROR',
      data: { originalError: error.message }
    };
  }

  // Unknown errors
  return {
    status: 500,
    message: 'Internal SDK error',
    code: 'UNKNOWN_ERROR',
    data: { originalError: error?.message }
  };
};

const getDefaultMessage = (status: number): string => {
  switch (status) {
    case 400: return 'Bad request';
    case 401: return 'Unauthorized access';
    case 403: return 'Forbidden';
    case 404: return 'Resource not found';
    default: return 'Something went wrong';
  }
};
