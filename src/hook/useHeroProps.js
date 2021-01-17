import { useEffect, useState } from "react";
import { getHeroProps } from "../getHeroDatas";

//to control loading state ,err state ,return data
export const useHeroProps = (id) => {
  const [nowState, setNowState] = useState({
    isLoading: false,
    error: null,
    data: null
  });

  useEffect(() => {
    setNowState({
      isLoading: true,
      error: null,
      heroProps: null
    });
    getHeroProps(id)
      .then((res) => {
        setNowState({
          isLoading: false,
          error: null,
          heroProps: res
        });
      })
      .catch((error) => {
        console.log(error);
        setNowState({
          isLoading: false,
          error: error,
          heroProps: null
        });
      });
  }, [id]);
  return {
    isLoading: nowState.isLoading,
    error: nowState.error,
    heroProps: nowState.heroProps
  };
};
