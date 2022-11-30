const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/api/cart", {
      target: "https://front-test-api.herokuapp.com",
      changeOrigin: true,
    }),
  );
};
