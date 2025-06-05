export const useProject = (slug: string) => {
  return useFetch(`https://cdn.tjonker.dev/projects/${slug}/index.json`)
}
