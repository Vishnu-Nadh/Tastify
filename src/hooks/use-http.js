import { useState } from "react";

export const useHttp = (
  urlGeneratorFn,
  options,
  initialValue,
  dataTransformFn = (data) => data
) => {
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [hasFetched, setHasFetched] = useState(false);
  const [data, setData] = useState(initialValue);

  const fetchData = async (param) => {
    setHasError(false);
    setIsLoading(true);
    try {
      const response = await fetch(urlGeneratorFn(param), options);
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const resp = await response.json();
      const data = dataTransformFn(resp);
      setData(data);
      setIsLoading(false);
      setHasFetched(true);
    } catch (error) {
      setHasError(true);
      setIsLoading(false);
    }
  };

  return {
    fetchData,
    data,
    isLoading,
    hasFetched,
    hasError,
    setData,
  };
};
