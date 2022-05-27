module.exports = {
  presets: [
    [
      // "@babel/preset-typescript",
      '@babel/preset-env',
      {
        useBuiltIns: 'entry',
        corejs: '3.22',
        targets: {
          node: 'current'
        }
      }

    ]
  ],
  transform: {
    '\\.[jt]s?$': 'babel-jest'
  },
  targets: '> 0.25%, not dead'
}
