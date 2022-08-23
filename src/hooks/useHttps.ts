import axios from "axios";
import { useCallback } from "react";
// eslint-disable-next-line import/no-unresolved

// custom hook for API calls

const useHttps = () => {
  const sendRequest = useCallback(
    async (
      httpConfig: any,
      callback: (data: any) => void,
      loadingFunc: (value: boolean) => void | null
    ) => {
      const config = {
        ...httpConfig,
        url: httpConfig.url,
        headers: {
          "Content-Type": "application/json",
          ...httpConfig.headers,
        },
      };
      try {
        if (loadingFunc) {
          loadingFunc(true);
        }

        const response = await axios(config);
        callback(response.data);
        if (loadingFunc) {
          loadingFunc(false);
        }
      } catch (err: any) {
        console.log("something went wrong");
        if (loadingFunc) {
          loadingFunc(false);
        }
      }
    },
    []
  );
  return sendRequest;
};

export default useHttps;
