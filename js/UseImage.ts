export const useProjectImage = (slug: string, image: string) => {
  return `https://cdn.tjonker.dev/projects/${slug}/${image}`
}

export const useArticleImage = (slug: string, image: string) => {
  return `https://cdn.tjonker.dev/articles/${slug}/${image}`
}