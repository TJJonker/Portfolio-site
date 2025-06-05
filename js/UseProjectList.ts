export const useProjectList = () => {
  return useFetch('https://cdn.tjonker.dev/projects/index.json')
}