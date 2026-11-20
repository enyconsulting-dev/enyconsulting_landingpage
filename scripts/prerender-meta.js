import { createElement } from 'react'
import { renderToString } from 'react-dom/server'
import { createServer } from 'vite'
import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { PAGE_METADATA, SITE_URL } from '../src/config/pageMetadata.js'

const template = await readFile(new URL('../dist/index.html', import.meta.url), 'utf8')
const outputDirectory = new URL('../dist/pages/', import.meta.url)
const vite = await createServer({
    appType: 'custom',
    server: { middlewareMode: true },
    ssr: {
        noExternal: ['react-router-dom', 'react-router'],
        resolve: { conditions: ['node', 'module-sync'] },
    },
})

await mkdir(outputDirectory, { recursive: true })

try {
    const { default: App } = await vite.ssrLoadModule('/src/App.jsx')
    const { StaticRouter } = await vite.ssrLoadModule('react-router-dom')

    for (const [pathname, metadata] of Object.entries(PAGE_METADATA)) {
        const canonicalUrl = `${SITE_URL}${pathname === '/' ? '/' : pathname}`
        const escapedTitle = metadata.title.replaceAll('&', '&amp;')
        const escapedDescription = metadata.description
            .replaceAll('&', '&amp;')
            .replaceAll('"', '&quot;')
        const appMarkup = renderToString(
            createElement(StaticRouter, { location: pathname }, createElement(App)),
        )
        const html = template
            .replace('<div id="root"></div>', `<div id="root">${appMarkup}</div>`)
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

        if (pathname === '/') {
            await writeFile(new URL('../dist/index.html', import.meta.url), html)
        } else {
            await writeFile(new URL(`../dist/pages/${pathname.slice(1)}.html`, import.meta.url), html)
        }
    }
} finally {
    await vite.close()
}
