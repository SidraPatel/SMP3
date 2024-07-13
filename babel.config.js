module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          // This needs to be mirrored in tsconfig.json
          '@': './src',
        },
      },
    ],
    ['@babel/plugin-proposal-decorators', {legacy: true}],
    ['react-native-reanimated/plugin'],
  ],
};
