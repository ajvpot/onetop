module.exports = {
  presets: [
    'next/babel',
    '@babel/preset-flow',
    'module:metro-react-native-babel-preset',
  ],
  plugins: [['react-native-web', {commonjs: true}]],
};
