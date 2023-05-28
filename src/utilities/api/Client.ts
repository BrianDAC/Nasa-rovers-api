import { AppConfig } from "../../constants/AppConfig";

export type ClientOptions = {
  body?: object | FormData,
  method?: 'DELETE' | 'GET' | 'POST' | 'PUT' | 'PATCH',
};

export const Client = async <T = any>(
  endpoint: string,
  options: ClientOptions = {},
): Promise<T> => {
  const { body, method = body ? 'POST' : 'GET' } = options;
  const headers: HeadersInit = {
    Accept: 'application/json',
    Authorization: '',
  };

  if (body) {
    headers['Content-Type'] = 'application/json';
  }

  const config: RequestInit = {
    headers,
    method,
  };

  if (body && !(body instanceof FormData)) {
    config.body = JSON.stringify(body);
  }

  const response = await fetch(`${AppConfig.NasaApiUrl}${endpoint}`, config);
  
  if (
    endpoint !== "users/me" && 
    endpoint !== "login" && 
    response.status === 401) {
    document.location.reload();
  }

  if (!response.ok) {
    console.error("response", response);
    // here should handle errors
  }

  if (response.status !== 204) {
    return response.json();
  }

  return {} as T;
};
