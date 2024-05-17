module.exports = {
  // ... การตั้งค่าอื่น ๆ ของคุณ
  module: {
    rules: [
      // ... rules อื่น ๆ ของคุณ
      {
        test: /\.mjs$/,
        enforce: "pre",
        use: ["source-map-loader"],
        exclude: /node_modules\/@react-aria\/ssr/,
      },
    ],
  },
};
