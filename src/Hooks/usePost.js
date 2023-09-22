import { useMemo } from "react";

export const useSortedPosts = (posts, select) => {
  const sortedPosts = useMemo(() => {
    if (select) {
      return [...posts].sort((a, b) => a[select].localeCompare(b[select]))
    }

    return posts

  }, [select, posts]);

  return sortedPosts;
}

export const useSortedAndFilteredPosts = (posts, search) => {
  const sortedAndSelectedPosts = useMemo(() => {
    return posts.filter(item => item.title.toLowerCase().includes(search))

  }, [search, posts])

  return sortedAndSelectedPosts;
}