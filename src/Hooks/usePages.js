import { useMemo } from "react";

const usePages = (totalCount, limit) => {
  const numberOfPages = useMemo(() => {
    return Math.ceil(totalCount / limit);
  }, [totalCount, limit]);

  return numberOfPages
}

export default usePages;