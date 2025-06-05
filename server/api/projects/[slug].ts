import { H3Event, getRouterParam } from 'h3'
import matter from 'gray-matter'
import { marked } from 'marked'

export default defineEventHandler(async (event: H3Event) => {
  const slug = getRouterParam(event, 'slug')
  const url = `https://cdn.tjonker.dev/projects/${slug}/content.md`

  try {
    const res = await fetch(url)

    if (!res.ok) {
      throw createError({ statusCode: 404, statusMessage: 'File not found' })
    }

    const raw = await res.text()
    const { data, content } = matter(raw)

    return {
      frontmatter: data,
      markdown: content,
      html: marked(content),
    }
  } catch (err) {
    console.error(err)
    throw createError({ statusCode: 500, statusMessage: 'Error fetching content' })
  }
})
