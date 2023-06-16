module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          // This needs to be mirrored in tsconfig.json
          theme: './src/theme',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
}
