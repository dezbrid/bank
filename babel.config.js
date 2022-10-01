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
          '@slices': './src/redux/slices',
          '@redux': './src/redux/config',
          '@config': './src/config',
        },
      },
    ],
  ],
};
