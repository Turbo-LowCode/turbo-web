const isCi = process.env.CI !== undefined
const path = require('path')
const husky = require('husky')
const { execSync } = require('child_process')

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

if (!isCi) {
  const gitFolder = findNearestGit(__dirname)
  if (!gitFolder) {
    throw new Error(
      'postinstall husky but cannot find .git file, please git init first!',
    )
  }

  console.log('🚀 ~ Scan to git directory:', gitFolder)
  // execSync(`cd ${gitFolder} && husky install ${customDirectory}`)
  execSync(`cd ${gitFolder} && husky install`)

  const preCommitFile = path.join(gitFolder, '.husky', 'pre-commit')
  const lintStagedJs = path
    .join(__dirname, 'runLintStaged.mjs')
    .replace(/\\/g, '/')
  husky.set(
    preCommitFile,
    `echo ''\necho -e "\\e[0;32m ******* pre-commit 钩子触发 **************\\e[0m"\necho ''\n\nnode "${lintStagedJs}"`,
  )
}
