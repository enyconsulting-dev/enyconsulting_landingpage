import assert from 'node:assert/strict'
import { readdir, readFile } from 'node:fs/promises'
import path from 'node:path'
import { test } from 'node:test'

async function readSourceFiles(directory) {
    const entries = await readdir(directory, { withFileTypes: true })
    const files = []

    for (const entry of entries) {
        const entryPath = path.join(directory, entry.name)
        if (entry.isDirectory()) {
            files.push(...await readSourceFiles(entryPath))
        } else if (/\.(js|jsx|css|html|txt|md)$/.test(entry.name)) {
            files.push(entryPath)
        }
    }

    return files
}

test('Lagos Ministry case-study claims are not rendered or indexed', async () => {
    const files = [
        ...await readSourceFiles(path.resolve('src')),
        ...await readSourceFiles(path.resolve('public')),
        path.resolve('index.html'),
    ]
    const prohibited = [
        'Lagos State Ministry',
        'Selected through a competitive process',
        'State-level partnership',
        'Tertiary institution reach',
        'AI curriculum design',
    ]

    for (const file of files) {
        const content = await readFile(file, 'utf8')
        for (const phrase of prohibited) {
            assert.doesNotMatch(content, new RegExp(phrase, 'i'), `${phrase} remains in ${file}`)
        }
    }
})

test('University of Manitoba case study remains available', async () => {
    const caseStudies = await readFile(path.resolve('src/pages/CaseStudiesPage.jsx'), 'utf8')
    assert.match(caseStudies, /University of Manitoba/)
})
