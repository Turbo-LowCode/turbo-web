import { statSync } from 'fs'
import lintStaged from 'lint-staged'
import { dirname, parse, resolve } from 'path'
import { fileURLToPath } from 'url'

const isDiskRoot = path => {
  const pathObj = parse(path)
  return pathObj.root === path
}

const isGitFolder = dirPath => {
  const gitFolderPath = `${dirPath}\\.git`
  try {
    const stat = statSync(gitFolderPath)
    return stat.isDirectory() || stat.isFile()
  } catch (error) {
    return false
  }
}

const findNearestGit = dirname => {
  if (isDiskRoot(dirname)) {
    return null
  }
  if (isGitFolder(dirname)) {
    return dirname
  } else {
    return findNearestGit(resolve(dirname, '..'))
  }
}

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
// 通过查找git仓库找到项目根目录的位置
const gitFolder = findNearestGit(__dirname)

if (!gitFolder) throw new Error('🚀 ~ biome failed! please fix and retry!')

lintStaged({
  config: { '*.{js,ts,jsx,tsx,json,css,md}': `biome format --write ${gitFolder}\\.` },
}).then(res => {
  if (res) {
    console.log('🚀 ~ set lintStaged successfully!')
  } else {
    throw new Error('🚀 ~ biome failed! please fix and retry!')
  }
})
