export const useProject = (slug) => {
  return useFetch(`https://cdn.tjonker.dev/projects/${slug}/index.json`)
}
