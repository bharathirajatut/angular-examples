var jwt = require('jsonwebtoken');
var privateKey = "dvRZbtaVDXu34h0STl9yE4HE4hA3gR";
var token = jwt.sign({ user_id: 'KL00456' }, privateKey, { expiresIn:130, algorithm: 'HS512' });
console.log(token)