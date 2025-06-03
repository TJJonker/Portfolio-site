export const useArticle = (slug) => {
  return useFetch(`https://cdn.tjonker.dev/articles/${slug}/index.json`)
}