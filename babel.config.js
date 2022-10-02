module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'import-glob',
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: [
          '.ios.js',
          '.android.js',
          '.js',
          '.jsx',
          '.ts',
          '.tsx',
          '.json',
        ],
        alias: {
          '@interfaces': './src/interfaces',
          '@redux': './src/redux',
          '@config': './src/config',
          '@screens': './src/screens',
          '@mocks': './__mocks__',
        },
      },
    ],
  ],
};
