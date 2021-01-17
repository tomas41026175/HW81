import { useEffect, useState } from "react";
import { getHeroData } from "../getHeroDatas";

//to control loading state ,err state ,return data
export const useHeroFiles = () => {
  const [nowFileState, setNowFileState] = useState({
    isLoading: false,
    error: null,
    heroFile: null
  });
  useEffect(() => {
    setNowFileState({
      isLoading: true,
      error: null,
      heroFile: null
    });
    getHeroData()
      .then((res) => {
        setNowFileState({
          isLoading: false,
          error: null,
          heroFile: res
        });
      })
      .catch((error) => {
        console.error(error);
        setNowFileState({
          isLoading: false,
          error: error,
          heroFile: null
        });
      });
  }, []);
  return {
    isLoading: nowFileState.isLoading,
    error: nowFileState.error,
    heroFile: nowFileState.heroFile
  };
};
