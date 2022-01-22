const proxy = [ 
    { 
      context: ['/api'], 
      target: 'http://localhost:8080/produto', 
      secure: false,
      pathRewrite: { '^/api': ''}
    } 
  ];
  module.exports = proxy;