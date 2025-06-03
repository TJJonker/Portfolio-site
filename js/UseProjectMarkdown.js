export const useProjectMarkdown = async (slug) => {
  const url = `https://cdn.tjonker.dev/projects/${slug}/content.md`
  const { data, error } = await useFetch(url, { responseType: 'text' })
  return { markdown: data, error }
}
