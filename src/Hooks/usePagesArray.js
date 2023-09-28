import { useMemo } from "react"

const usePagesArray = (numberOfPages) => {
  const pagesArray = useMemo(() => {
    let array = [];
    for (let i = 1; i <= numberOfPages; i++) {
      array.push(i)
    }
    return array
  }, [numberOfPages]);

  return pagesArray;
}

export default usePagesArray;