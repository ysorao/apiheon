"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getConnection = getConnection;
exports.getConnectionMD = getConnectionMD;
Object.defineProperty(exports, "sql", {
  enumerable: true,
  get: function get() {
    return _mssql["default"];
  }
});
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _mssql = _interopRequireDefault(require("mssql"));
var dbSettings = {
  user: '',
  password: '',
  server: 'PROGRESSA',
  database: 'INFOHEON',
  options: {
    encrypt: false,
    // for azure
    trustServerCertificate: true // change to true for local dev / self-signed certs
  }
};

var dbSettingsMD = {
  user: process.env.USERMD,
  password: process.env.PASSWORDMD,
  server: process.env.SERVERMD,
  database: process.env.DATABASEMD,
  options: {
    encrypt: false,
    // for azure
    trustServerCertificate: true // change to true for local dev / self-signed certs
  }
};
function getConnection() {
  return _getConnection.apply(this, arguments);
}
function _getConnection() {
  _getConnection = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    var pool;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _mssql["default"].connect(dbSettings);
          case 3:
            pool = _context.sent;
            return _context.abrupt("return", pool);
          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);
          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 7]]);
  }));
  return _getConnection.apply(this, arguments);
}
function getConnectionMD() {
  return _getConnectionMD.apply(this, arguments);
}
function _getConnectionMD() {
  _getConnectionMD = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
    var pool;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _mssql["default"].connect(dbSettingsMD);
          case 3:
            pool = _context2.sent;
            return _context2.abrupt("return", pool);
          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2["catch"](0);
            console.log(_context2.t0);
          case 10:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 7]]);
  }));
  return _getConnectionMD.apply(this, arguments);
}