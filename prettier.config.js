/**
 * @type {import('prettier').Config}
 */
module.exports = {
  arrowParens: 'always',
  bracketSameLine: true,
  bracketSpacing: false,
  importOrder: ['^node:(.+)$', '^[./]'],
  importOrderCaseInsensitive: true,
  importOrderGroupNamespaceSpecifiers: true,
  // For now until vscode organize imports supports remove only mode. https://github.com/useVenice/venice/commit/8ef518158278f595e605ac077f9289cd918c448c#r83502651
  // or until vscode organize imports does not move lines with side effects around...
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  jsxSingleQuote: false,
  plugins: [
    require.resolve('prettier-plugin-packagejson'),
    require.resolve('prettier-plugin-tailwindcss'), // needs to come last
  ],
  printWidth: 160,
  quoteProps: 'as-needed',
  semi: false,
  singleQuote: true,
  tabWidth: 2,
  tailwindConfig: './tailwind.config.js',
  trailingComma: 'all',
  useTabs: false,
}
