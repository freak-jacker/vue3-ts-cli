module.exports = ({ file }) => {
  return {
    plugins: {
      autoprefixer: {},
      "postcss-pxtorem": {
        rootValue: 100, // 换算基数，默认100，自行根据效果调整。
        unitPrecision: 5,
        propList: ["*"],
        selectorBlackList: ["ignore-"],
        replace: true,
        mediaQuery: false,
        minPixelValue: 0,
        exclude(file) {
          const excludeList = ["rem.scss"];
          return excludeList.some(item => file.includes(item));
        }
      }
    }
  };
};
