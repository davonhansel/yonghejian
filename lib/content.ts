import fs from 'fs'
import path from 'path'

type PageContent = {
  frontmatter: Record<string, string>
  body: string
}

export async function getPageContent(name: string, locale: string): Promise<PageContent> {
  const base = path.join(process.cwd(), 'content', 'pages')
  const candidates = [
    path.join(base, `${name}.${locale}.md`),
    path.join(base, `${name}.md`),
  ]

  let file: string | undefined
  for (const p of candidates) {
    if (fs.existsSync(p)) { file = p; break }
  }

  if (!file) throw new Error(`Content file not found for ${name} (${locale})`)

  const raw = await fs.promises.readFile(file, 'utf8')
  const match = raw.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/)

  const frontmatter: Record<string, string> = {}
  let body = ''

  if (match) {
    const fm = match[1]
    body = match[2].trim()
    for (const line of fm.split(/\n/)) {
      const m = line.match(/^([^:]+):\s*(.*)$/)
      if (m) {
        const key = m[1].trim()
        let val = m[2].trim()
        if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
          val = val.slice(1, -1)
        }
        frontmatter[key] = val
      }
    }
  } else {
    body = raw
  }

  return { frontmatter, body }
}

export default getPageContent
