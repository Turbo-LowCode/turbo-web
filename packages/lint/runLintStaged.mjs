import lintStaged from 'lint-staged'

lintStaged({
  config: { '*.{js,ts,jsx,tsx,json,css,md}': `biome format --write .` },
}).then(res => {
  if (res) {
    console.log('🚀 ~ set lintStaged successfully!')
  } else {
    throw new Error('🚀 ~ biome failed! please fix and retry!')
  }
})
