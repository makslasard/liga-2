import axios, { AxiosError, AxiosResponse } from 'axios';

interface ApiResponse<T> {
  data: T | null;
  error?: { message: string; status?: number; config?: any }; // более подробная информация об ошибке
}

enum HttpMethod {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
  PATCH = 'PATCH',
}

const api = {
  request: async <T, U>(method: HttpMethod, url: string, data?: U): Promise<ApiResponse<T>> => {
    try {
      const response: AxiosResponse<T> = await axios({ method, url, data });
      return { data: response.data };
    } catch (error) {
      const axiosError = error as AxiosError;
      const errorMessage = axiosError.response?.statusText || axiosError.message;
      return {
        data: null,
        error: { message: errorMessage, status: axiosError.response?.status, config: axiosError.config },
      };
    }
  },
  get: async <T, U>(url: string, data?: U): Promise<ApiResponse<T>> => api.request(HttpMethod.GET, url, data),
  post: async <T, U>(url: string, data: U): Promise<ApiResponse<T>> => api.request(HttpMethod.POST, url, data),
  put: async <T, U>(url: string, data: U): Promise<ApiResponse<T>> => api.request(HttpMethod.PUT, url, data),
  delete: async <T>(url: string): Promise<ApiResponse<T>> => api.request(HttpMethod.DELETE, url),
  patch: async <T, U>(url: string, data: U): Promise<ApiResponse<T>> => api.request(HttpMethod.PATCH, url, data),
};

export default api;
