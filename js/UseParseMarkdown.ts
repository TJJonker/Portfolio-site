import matter from 'gray-matter'
import { marked } from 'marked'

export async function parseProjectMarkdown(slug: string) {
  const url = `https://cdn.tjonker.dev/projects/${slug}/content.md`
  const res = await fetch(url)

  if (!res.ok) {
    throw new Error(`Failed to load markdown for ${slug}`)
  }

  const raw = await res.text()
  const { data, content } = matter(raw)

  return {
    frontmatter: data,
    markdown: content,
    html: marked(content)
  }
}
