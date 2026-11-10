import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { PAGE_METADATA } from '../src/config/pageMetadata.js'

const siteOrigin = 'https://enyconsulting.ca'
const template = await readFile(new URL('../dist/index.html', import.meta.url), 'utf8')
const outputDirectory = new URL('../dist/pages/', import.meta.url)

await mkdir(outputDirectory, { recursive: true })

for (const [pathname, metadata] of Object.entries(PAGE_METADATA)) {
    if (pathname === '/') continue

    const canonicalUrl = `${siteOrigin}${pathname}`
    const escapedTitle = metadata.title.replaceAll('&', '&amp;')
    const escapedDescription = metadata.description
        .replaceAll('&', '&amp;')
        .replaceAll('"', '&quot;')
    const html = template
        .replace(/<title>.*<\/title>/, `<title>${escapedTitle}</title>`)
        .replace(
            /<meta\s+name="description"\s+content="[^"]*"\s*\/>/,
            `<meta name="description" content="${escapedDescription}" />`,
        )
        .replace(/<link rel="canonical" href="[^"]*"\s*\/>/, `<link rel="canonical" href="${canonicalUrl}" />`)
        .replace(/<meta property="og:title" content="[^"]*"\s*\/>/, `<meta property="og:title" content="${escapedTitle}" />`)
        .replace(
            /<meta property="og:description" content="[^"]*"\s*\/>/,
            `<meta property="og:description" content="${escapedDescription}" />`,
        )
        .replace(/<meta property="og:url" content="[^"]*"\s*\/>/, `<meta property="og:url" content="${canonicalUrl}" />`)
        .replace(/<meta name="twitter:title" content="[^"]*"\s*\/>/, `<meta name="twitter:title" content="${escapedTitle}" />`)
        .replace(
            /<meta name="twitter:description" content="[^"]*"\s*\/>/,
            `<meta name="twitter:description" content="${escapedDescription}" />`,
        )

    await writeFile(new URL(`../dist/pages/${pathname.slice(1)}.html`, import.meta.url), html)
}
