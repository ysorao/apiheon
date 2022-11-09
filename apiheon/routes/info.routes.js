"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _info = require("../controllers/info.controllers");
var jwt = require('jsonwebtoken');
var verifyToken = function verifyToken(req, res, next) {
  var token = req.headers['x-access-token'] || req.headers['authorization'];
  if (!token) {
    res.sendStatus(401).send({
      error: 'Se requiere token para la autorizacion'
    });
    return;
  }
  token = token.split(" ")[1];
  if (token) {
    jwt.verify(token, process.env.SECRETKEY, function (error, decoded) {
      if (error) {
        return res.json({
          message: 'El token no es valido'
        });
      } else {
        req.decoded = decoded;
        next();
      }
    });
  }
};
var router = (0, _express.Router)();
router.get('/info', verifyToken, _info.getInfo);
router.get('/infoMD/:id', _info.getInfoMDById);
router.get('/infoHabeas', verifyToken, _info.getInfoHabeas);
router.get('/infoHabeasMenor', verifyToken, _info.getInfoHabeasMenor);
router.post('/createHabeas', verifyToken, _info.createHabeas);
router.post('/createHabeasMenor', verifyToken, _info.createHabeasMenor);
router.post('/createInfo', verifyToken, _info.createInfo);
router.put('/updateHabeasMenor/:id', verifyToken, _info.updateHabeasMenor);
var _default = router;
exports["default"] = _default;