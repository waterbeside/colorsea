module.exports = {
  presets: [
    ['@babel/preset-env', { modules: false, targets: { node: 'current' } }],
    '@babel/preset-typescript'
  ],
  plugins: [['@babel/plugin-proposal-decorators', { legacy: true }]]
}
