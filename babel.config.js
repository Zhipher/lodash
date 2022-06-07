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
  targets: '> 0.25%, not dead'
}
