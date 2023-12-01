const isCi = process.env.CI !== undefined
const path = require('path')
const husky = require('husky')
const fs = require('fs')
const { execSync } = require('child_process')

const isDiskRoot = path => {
  const pathObj = require('path').parse(path)
  return pathObj.root === path
}

const hasGitFolder = dirPath => {
  const gitFolderPath = `${dirPath}/.git`
  try {
    const stat = fs.statSync(gitFolderPath)
    return stat.isDirectory() || stat.isFile()
  } catch (error) {
    return false
  }
}
// 递归向上，找有git的文件夹
const findNearestGit = dirname => {
  if (isDiskRoot(dirname)) {
    return null
  }
  if (hasGitFolder(dirname)) {
    return dirname
  }
  return findNearestGit(path.resolve(dirname, '..'))
}

if (!isCi) {
  const gitFolder = findNearestGit(__dirname)
  console.log('🚀 ~ Scan to git directory:', gitFolder)
  if (!gitFolder) {
    throw new Error('postinstall husky but cannot find .git file, please git init first!')
  }

  execSync(`cd ${gitFolder} && husky install`)
  const preCommitFile = path.join(gitFolder, '.husky', 'pre-commit')
  const lintStagedJs = path.join(__dirname, 'runLintStaged.mjs').replace(/\\/g, '/')
  husky.set(
    preCommitFile,
    `echo ''\necho -e "\\e[0;32m ******* pre-commit 钩子触发 **************\\e[0m"\necho ''\n\nnode "${lintStagedJs}"`,
  )
}
