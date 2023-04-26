const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api', //proxy가 필요한 path prameter
    createProxyMiddleware({
      target: 'http://ec2-13-209-70-200.ap-northeast-2.compute.amazonaws.com:8080', //타겟이 되는 api url
      changeOrigin: true, //대상 서버 구성에 따라 호스트 헤더가 변경되도록 설정하는 부분
    }),
  );
};
