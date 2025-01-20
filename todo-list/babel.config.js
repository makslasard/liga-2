module.exports = {
  presets: [
    '@babel/preset-env',
    '@babel/preset-typescript',
    [
      '@babel/preset-react',
      {
        runtime: 'automatic',
      },
    ],
  ],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '^@/(.*)$': './src/\\1',
          // '^@app/(.*)$': './src/app/\\1',
        },
      },
    ],
    '@babel/plugin-transform-runtime',
  ],
}
