var jwt = require('jsonwebtoken');
var privateKey = "dvRZbtaVDXu34h0STl9yE4HE4hA3gR";
var token="eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiS0wwMDQ1NiIsImlhdCI6MTYxMTcyNDI2NSwiZXhwIjoxNjExNzI0Mzk1fQ.Pu0BjWybupdv2mn98GkWmycSGLkbbx3UrfF7QCMCgeVAVOoNEV7llP_Yan-ERS8uVY15hYE7T7WpeCp7bofIcQ";
var token1 = jwt.verify(token, privateKey, { algorithm: 'HS512' });
console.log(token1)