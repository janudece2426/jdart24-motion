import { promises as fs } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url))
const projectRoot = path.resolve(scriptDirectory, '..')
const assetRoot = path.join(projectRoot, 'Gif Portfolio')
const outputDirectory = path.join(projectRoot, 'src', 'data')
const outputFile = path.join(outputDirectory, 'portfolio.generated.json')

const categoryNames = new Map([
  ['01-delivery', '배송'],
  ['02-circle-chart', '원형 그래프'],
  ['03-number-roll', '숫자 롤링'],
  ['04-counter', '카운터'],
  ['05-pie-chart', '파이 차트'],
  ['06-semi-gauge', '반원 게이지'],
  ['07-column-chart', '세로 막대 그래프'],
  ['08-bar-chart', '막대 그래프'],
  ['09-line-chart', '선 그래프'],
  ['10-misc', '기타 모션'],
  ['11-before-after', '전후 비교'],
  ['12-calligraphy', '캘리그래피'],
])

const toPublicUrl = (category, fileName) =>
  `/${encodeURIComponent(category)}/${encodeURIComponent(fileName)}`

const isThumbnail = (fileName) => /thu?m(?:b)?/i.test(fileName) || /thumb/i.test(fileName)

const categoryEntries = await fs.readdir(assetRoot, { withFileTypes: true })
const categories = []

for (const categoryEntry of categoryEntries.filter((entry) => entry.isDirectory()).sort((a, b) => a.name.localeCompare(b.name))) {
  const categoryPath = path.join(assetRoot, categoryEntry.name)
  const fileEntries = await fs.readdir(categoryPath, { withFileTypes: true })
  const groups = new Map()

  for (const fileEntry of fileEntries.filter((entry) => entry.isFile())) {
    const match = fileEntry.name.match(/^(\d+)/)
    if (!match) continue

    const itemNumber = Number.parseInt(match[1], 10)
    if (!Number.isFinite(itemNumber)) continue

    const group = groups.get(itemNumber) ?? { number: itemNumber }
    const extension = path.extname(fileEntry.name).toLowerCase()

    if (isThumbnail(fileEntry.name) || extension === '.png') {
      group.thumbnail = fileEntry.name
    } else if (extension === '.gif') {
      group.gif = fileEntry.name
    } else if (extension === '.webp') {
      group.webp = fileEntry.name
    }

    groups.set(itemNumber, group)
  }

  const categoryNumber = Number.parseInt(categoryEntry.name.match(/^(\d+)/)?.[1] ?? '0', 10)
  const items = [...groups.values()]
    .filter((item) => item.thumbnail && (item.gif || item.webp))
    .sort((a, b) => a.number - b.number)
    .map((item) => ({
      id: `${String(categoryNumber).padStart(2, '0')}-${String(item.number).padStart(2, '0')}`,
      thumbnail: toPublicUrl(categoryEntry.name, item.thumbnail),
      gif: item.gif ? toPublicUrl(categoryEntry.name, item.gif) : null,
      webp: item.webp ? toPublicUrl(categoryEntry.name, item.webp) : null,
    }))

  categories.push({
    id: String(categoryNumber).padStart(2, '0'),
    slug: categoryEntry.name,
    name: categoryNames.get(categoryEntry.name) ?? categoryEntry.name,
    items,
  })
}

await fs.mkdir(outputDirectory, { recursive: true })
await fs.writeFile(outputFile, `${JSON.stringify({ categories }, null, 2)}\n`, 'utf8')

const itemCount = categories.reduce((total, category) => total + category.items.length, 0)
console.log(`Portfolio manifest created: ${categories.length} categories, ${itemCount} items.`)

