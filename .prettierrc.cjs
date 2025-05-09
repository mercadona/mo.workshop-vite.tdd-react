const { readdirSync } = require('fs')
const { baseUrl } = require('./tsconfig.json').compilerOptions

const path = `${__dirname}/${baseUrl}`
const options = { withFileTypes: true }
const baseUrlSubdirectories = readdirSync(path, options)
  .filter((entry) => entry.isDirectory())
  .map((entry) => entry.name)
const baseUrlSubdirectoryRegex = `^(${baseUrlSubdirectories.join('|')})`

module.exports = {
  semi: false,
  trailingComma: 'all',
  singleQuote: true,
}



