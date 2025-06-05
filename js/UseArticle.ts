export const useArticle = (slug: string) => {
  return useFetch(`https://cdn.tjonker.dev/articles/${slug}/index.json`)
}