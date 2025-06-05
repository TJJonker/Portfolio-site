export const useArticleList = () => {
  return useFetch('https://cdn.tjonker.dev/articles/index.json')
}