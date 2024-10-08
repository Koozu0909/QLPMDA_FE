import axios from 'axios';
import { useEffect, useState } from 'react';

const useAxios = () => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const axiosInstance = axios.create({
    baseURL: 'https://localhost:44349/',
  });

  axiosInstance.interceptors.request.use(
    (config) => {
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  axiosInstance.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  let controller: AbortController;

  useEffect(() => {
    return () => {
      controller?.abort();
    };
  }, []);

  const fetchData = async ({
    url,
    method,
    data = {},
    params = {},
  }: {
    url: string;
    method: string;
    data?: object;
    params?: object;
  }) => {
    setLoading(true);
    controller = new AbortController();

    try {
      const result = await axiosInstance({ url, method, data, params, signal: controller.signal });
      setResponse(result.data);
      setLoading(false);
      return result.data;
    } catch (error: any) {
      if (axios.isCancel(error)){
        console.log('Request canceled', error.message);
      } else{
        setError(error.response ? error.response.data : error.message);
      }
    } finally {
      setLoading(false);
    }
  };
  return { response, error, loading, fetchData };
};

export default useAxios;

