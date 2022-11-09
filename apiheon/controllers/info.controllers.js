"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateHabeasMenor = exports.getInfoMDById = exports.getInfoHabeasMenorById = exports.getInfoHabeasMenor = exports.getInfoHabeasById = exports.getInfoHabeas = exports.getInfoById = exports.getInfo = exports.createInfo = exports.createHabeasMenor = exports.createHabeas = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _mssql = require("mssql");
var _database = require("../database");
//CONSULTAR TODA LA INFORMACION DE LOS REGISTROS ACTUALIZACION DE DATOS
var getInfo = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var pool, result;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _database.getConnection)();
          case 2:
            pool = _context.sent;
            _context.next = 5;
            return pool.request().query(_database.queries.getInfo);
          case 5:
            result = _context.sent;
            if (result.rowsAffected < 1) {
              res.sendStatus(204);
            } else {
              res.json(result.recordset);
            }
            _database.sql.close();
          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return function getInfo(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

//CONSULTAR LA INFORMACION INDIVIDUAL DE ACEPTACION DE TTO DATOS
exports.getInfo = getInfo;
var getInfoById = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var id, pool, result;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            id = req.params.id;
            _context2.next = 3;
            return (0, _database.getConnection)();
          case 3:
            pool = _context2.sent;
            _context2.next = 6;
            return pool.request().input("id", _database.sql.VarChar, id).query(_database.queries.getInfoById);
          case 6:
            result = _context2.sent;
            if (result.rowsAffected < 1) {
              res.json({
                status: 204,
                total: 0
              }).status(204);
            } else {
              res.json(result.recordset);
            }
            _database.sql.close();
          case 9:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return function getInfoById(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

//CONSULTAR LA  INFORMACION INDIVIDUAL DE NOMINA
exports.getInfoById = getInfoById;
var getInfoMDById = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var id, poolMD, result;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            id = req.params.id;
            _context3.next = 3;
            return (0, _database.getConnectionMD)();
          case 3:
            poolMD = _context3.sent;
            _context3.next = 6;
            return poolMD.request().input("id", _database.sql.VarChar, id).query(_database.queries.getInfoMDById);
          case 6:
            result = _context3.sent;
            if (result.rowsAffected < 1) {
              res.sendStatus(204);
            } else {
              res.json(result.recordset);
            }
            _database.sql.close();
          case 9:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return function getInfoMDById(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

//CONSULTAR LA INFORMACION DE ACEPTACION DE TTO DATOS
exports.getInfoMDById = getInfoMDById;
var getInfoHabeas = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var pool, result;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return (0, _database.getConnection)();
          case 2:
            pool = _context4.sent;
            _context4.next = 5;
            return pool.request().query("SELECT * FROM InfoheonHabeasData");
          case 5:
            result = _context4.sent;
            res.json(result.recordset);
            _database.sql.close();
          case 8:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return function getInfoHabeas(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

//CONSULTAR LA INFORMACION INDIVIDUAL DE ACEPTACION DE TTO DATOS
exports.getInfoHabeas = getInfoHabeas;
var getInfoHabeasById = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var id, pool, result;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            id = req.params.id;
            _context5.next = 3;
            return (0, _database.getConnection)();
          case 3:
            pool = _context5.sent;
            _context5.next = 6;
            return pool.request().input("id", _database.sql.VarChar, id).query(_database.queries.getInfoHabeasById);
          case 6:
            result = _context5.sent;
            if (result.rowsAffected < 1) {
              res.sendStatus(204);
            } else {
              res.json(result.recordset);
            }
            _database.sql.close();
          case 9:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));
  return function getInfoHabeasById(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

//CONSULTAR LA INFORMACION DE ACEPTACION DE TTO DATOS  MENORES
exports.getInfoHabeasById = getInfoHabeasById;
var getInfoHabeasMenor = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
    var pool, result;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return (0, _database.getConnection)();
          case 2:
            pool = _context6.sent;
            _context6.next = 5;
            return pool.request().query(_database.queries.getInfoHabeasMenor);
          case 5:
            result = _context6.sent;
            res.json(result.recordset);
            _database.sql.close();
          case 8:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));
  return function getInfoHabeasMenor(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();

//CONSULTAR LA INFORMACION INDIVIDUAL DE ACEPTACION DE TTO DATOS MENORES
exports.getInfoHabeasMenor = getInfoHabeasMenor;
var getInfoHabeasMenorById = /*#__PURE__*/function () {
  var _ref7 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(req, res) {
    var id, pool, result;
    return _regenerator["default"].wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            id = req.params.id;
            _context7.next = 3;
            return (0, _database.getConnection)();
          case 3:
            pool = _context7.sent;
            _context7.next = 6;
            return pool.request().input("id", _database.sql.VarChar, id).query(_database.queries.getInfoHabeasMenorById);
          case 6:
            result = _context7.sent;
            if (result.rowsAffected < 1) {
              res.sendStatus(204);
            } else {
              res.json(result.recordset);
            }
            _database.sql.close();
          case 9:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  }));
  return function getInfoHabeasMenorById(_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}();

//INSERTAR LA ACEPTACION DE TTO DE DATOS
exports.getInfoHabeasMenorById = getInfoHabeasMenorById;
var createHabeas = /*#__PURE__*/function () {
  var _ref8 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8(req, res) {
    var _req$body, documento, fecha, estado, ipAddress, usuario, nombreCompleto, pool, result;
    return _regenerator["default"].wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _req$body = req.body, documento = _req$body.documento, fecha = _req$body.fecha, estado = _req$body.estado, ipAddress = _req$body.ipAddress, usuario = _req$body.usuario, nombreCompleto = _req$body.nombreCompleto;
            _context8.next = 3;
            return (0, _database.getConnection)();
          case 3:
            pool = _context8.sent;
            _context8.next = 6;
            return pool.request().input("documento", _database.sql.VarChar, documento).input("fecha", _database.sql.VarChar, fecha).input("estado", _database.sql.VarChar, estado).input("ipAddress", _database.sql.VarChar, ipAddress).input("usuario", _database.sql.VarChar, usuario).input("nombreCompleto", _database.sql.VarChar, nombreCompleto).query(_database.queries.createHabeas);
          case 6:
            result = _context8.sent;
            if (result.rowsAffected > 0) {
              res.sendStatus(200);
            } else {
              res.sendStatus(204);
            }
            _database.sql.close();
          case 9:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8);
  }));
  return function createHabeas(_x15, _x16) {
    return _ref8.apply(this, arguments);
  };
}();

//INSERTAR LA ACEPTACION DE TTO DE DATOS MENORES DE EDAD
exports.createHabeas = createHabeas;
var createHabeasMenor = /*#__PURE__*/function () {
  var _ref9 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee9(req, res) {
    var _req$body2, documento, fecha, estado, ipAddress, usuario, nombreCompleto, pool, result;
    return _regenerator["default"].wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            _req$body2 = req.body, documento = _req$body2.documento, fecha = _req$body2.fecha, estado = _req$body2.estado, ipAddress = _req$body2.ipAddress, usuario = _req$body2.usuario, nombreCompleto = _req$body2.nombreCompleto;
            _context9.next = 3;
            return (0, _database.getConnection)();
          case 3:
            pool = _context9.sent;
            _context9.next = 6;
            return pool.request().input("documento", _database.sql.VarChar, documento).input("fecha", _database.sql.VarChar, fecha).input("estado", _database.sql.VarChar, estado).input("ipAddress", _database.sql.VarChar, ipAddress).input("usuario", _database.sql.VarChar, usuario).input("nombreCompleto", _database.sql.VarChar, nombreCompleto).query(_database.queries.createHabeasMenor);
          case 6:
            result = _context9.sent;
            if (result.rowsAffected > 0) {
              res.sendStatus(200);
            } else {
              res.sendStatus(204);
            }
            _database.sql.close();
          case 9:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9);
  }));
  return function createHabeasMenor(_x17, _x18) {
    return _ref9.apply(this, arguments);
  };
}();

//ACTUALIZAR LA INFORMACION DE TTO DE DATOS MENORES DE EDAD
exports.createHabeasMenor = createHabeasMenor;
var updateHabeasMenor = /*#__PURE__*/function () {
  var _ref10 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee10(req, res) {
    var id, _req$body3, documento, fecha, estado, ipAddress, usuario, nombreCompleto, pool, result;
    return _regenerator["default"].wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            id = req.params.id;
            _req$body3 = req.body, documento = _req$body3.documento, fecha = _req$body3.fecha, estado = _req$body3.estado, ipAddress = _req$body3.ipAddress, usuario = _req$body3.usuario, nombreCompleto = _req$body3.nombreCompleto;
            _context10.next = 4;
            return (0, _database.getConnection)();
          case 4:
            pool = _context10.sent;
            _context10.next = 7;
            return pool.request().input("id", _database.sql.VarChar, id).input("documento", _database.sql.VarChar, documento).input("fecha", _database.sql.VarChar, fecha).input("estado", _database.sql.VarChar, estado).input("ipAddress", _database.sql.VarChar, ipAddress).input("usuario", _database.sql.VarChar, usuario).input("nombreCompleto", _database.sql.VarChar, nombreCompleto).query(_database.queries.updateHabeasMenor);
          case 7:
            result = _context10.sent;
            res.json(result);
            _database.sql.close();
          case 10:
          case "end":
            return _context10.stop();
        }
      }
    }, _callee10);
  }));
  return function updateHabeasMenor(_x19, _x20) {
    return _ref10.apply(this, arguments);
  };
}();

//INSERTAR LA INFORMACION PRINCIPAL DE LA ENCUESTA
exports.updateHabeasMenor = updateHabeasMenor;
var createInfo = /*#__PURE__*/function () {
  var _ref11 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee11(req, res) {
    var _req$body4, apellidos, nombres, edad, nacionalidad, identificacion, paisExp, deptoExp, ciudadExp, paisNacimiento, deptoNacimiento, ciudadNacimiento, genero, rh, estadoCivil, grupoEtnico, cabezaFamilia, emailPersonal, celularPersonal, emailCorporativo, celularCorporativo, ocupacion, tipoContrato, fechaIngreso, departamento, cargo, area, paisResidencia, dptoResidencia, ciudad, localidad, direccion, barrio, nivelSocioec, tieneVehiculo, tipoVivienda, nomContactoEmerg, parentescoContEmerg, telContactoEmergencia, estudiaActualmente, programaEnCurso, tituloEducObtenido, Otro, nivelEducativo, institucionEducativa, tarjetaProfesional, deportePractica, cualDeporte, frecuencia, manejoTiempoLibre, victimaConflicto, registroUnicoVict, mujerVict, discapaComp, calificaEnCurso, condEspSalud, cualCondEspSalud, respPersDisc, hijoEnfermTermi, personasCargoList, hijosList, totalPersonas, totalHijos, pool, i, NombrePersonaCarg, parenPerCarg, fchNacPerCarg, edadPerCarg, _pool, _i, nombreHijo, fchNacHijo, edadHijo, _pool2;
    return _regenerator["default"].wrap(function _callee11$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            _req$body4 = req.body, apellidos = _req$body4.apellidos, nombres = _req$body4.nombres, edad = _req$body4.edad, nacionalidad = _req$body4.nacionalidad, identificacion = _req$body4.identificacion, paisExp = _req$body4.paisExp, deptoExp = _req$body4.deptoExp, ciudadExp = _req$body4.ciudadExp, paisNacimiento = _req$body4.paisNacimiento, deptoNacimiento = _req$body4.deptoNacimiento, ciudadNacimiento = _req$body4.ciudadNacimiento, genero = _req$body4.genero, rh = _req$body4.rh, estadoCivil = _req$body4.estadoCivil, grupoEtnico = _req$body4.grupoEtnico, cabezaFamilia = _req$body4.cabezaFamilia, emailPersonal = _req$body4.emailPersonal, celularPersonal = _req$body4.celularPersonal, emailCorporativo = _req$body4.emailCorporativo, celularCorporativo = _req$body4.celularCorporativo, ocupacion = _req$body4.ocupacion, tipoContrato = _req$body4.tipoContrato, fechaIngreso = _req$body4.fechaIngreso, departamento = _req$body4.departamento, cargo = _req$body4.cargo, area = _req$body4.area, paisResidencia = _req$body4.paisResidencia, dptoResidencia = _req$body4.dptoResidencia, ciudad = _req$body4.ciudad, localidad = _req$body4.localidad, direccion = _req$body4.direccion, barrio = _req$body4.barrio, nivelSocioec = _req$body4.nivelSocioec, tieneVehiculo = _req$body4.tieneVehiculo, tipoVivienda = _req$body4.tipoVivienda, nomContactoEmerg = _req$body4.nomContactoEmerg, parentescoContEmerg = _req$body4.parentescoContEmerg, telContactoEmergencia = _req$body4.telContactoEmergencia, estudiaActualmente = _req$body4.estudiaActualmente, programaEnCurso = _req$body4.programaEnCurso, tituloEducObtenido = _req$body4.tituloEducObtenido, Otro = _req$body4.Otro, nivelEducativo = _req$body4.nivelEducativo, institucionEducativa = _req$body4.institucionEducativa, tarjetaProfesional = _req$body4.tarjetaProfesional, deportePractica = _req$body4.deportePractica, cualDeporte = _req$body4.cualDeporte, frecuencia = _req$body4.frecuencia, manejoTiempoLibre = _req$body4.manejoTiempoLibre, victimaConflicto = _req$body4.victimaConflicto, registroUnicoVict = _req$body4.registroUnicoVict, mujerVict = _req$body4.mujerVict, discapaComp = _req$body4.discapaComp, calificaEnCurso = _req$body4.calificaEnCurso, condEspSalud = _req$body4.condEspSalud, cualCondEspSalud = _req$body4.cualCondEspSalud, respPersDisc = _req$body4.respPersDisc, hijoEnfermTermi = _req$body4.hijoEnfermTermi, personasCargoList = _req$body4.personasCargoList, hijosList = _req$body4.hijosList;
            totalPersonas = personasCargoList.length;
            totalHijos = hijosList.length;
            _context11.next = 5;
            return (0, _database.getConnection)();
          case 5:
            pool = _context11.sent;
            _context11.next = 8;
            return pool.request().input("apellidos", _database.sql.VarChar, apellidos).input("nombres", _database.sql.VarChar, nombres).input("edad", _database.sql.VarChar, edad).input("nacionalidad", _database.sql.VarChar, nacionalidad).input("identificacion", _database.sql.VarChar, identificacion).input("paisExp", _database.sql.VarChar, paisExp).input("deptoExp", _database.sql.VarChar, deptoExp).input("ciudadExp", _database.sql.VarChar, ciudadExp).input("paisNacimiento", _database.sql.VarChar, paisNacimiento).input("deptoNacimiento", _database.sql.VarChar, deptoNacimiento).input("ciudadNacimiento", _database.sql.VarChar, ciudadNacimiento).input("genero", _database.sql.VarChar, genero).input("rh", _database.sql.VarChar, rh).input("estadoCivil", _database.sql.VarChar, estadoCivil).input("grupoEtnico", _database.sql.VarChar, grupoEtnico).input("cabezaFamilia", _database.sql.VarChar, cabezaFamilia).input("emailPersonal", _database.sql.VarChar, emailPersonal).input("celularPersonal", _database.sql.VarChar, celularPersonal).input("emailCorporativo", _database.sql.VarChar, emailCorporativo).input("celularCorporativo", _database.sql.VarChar, celularCorporativo).input("ocupacion", _database.sql.VarChar, ocupacion).input("tipoContrato", _database.sql.VarChar, tipoContrato).input("fechaIngreso", _database.sql.VarChar, fechaIngreso).input("departamento", _database.sql.VarChar, departamento).input("cargo", _database.sql.VarChar, cargo).input("area", _database.sql.VarChar, area).input("paisResidencia", _database.sql.VarChar, paisResidencia).input("dptoResidencia", _database.sql.VarChar, dptoResidencia).input("ciudad", _database.sql.VarChar, ciudad).input("localidad", _database.sql.VarChar, localidad).input("direccion", _database.sql.VarChar, direccion).input("barrio", _database.sql.VarChar, barrio).input("nivelSocioec", _database.sql.VarChar, nivelSocioec).input("tieneVehiculo", _database.sql.VarChar, tieneVehiculo).input("tipoVivienda", _database.sql.VarChar, tipoVivienda).input("nomContactoEmerg", _database.sql.VarChar, nomContactoEmerg).input("parentescoContEmerg", _database.sql.VarChar, parentescoContEmerg).input("telContactoEmergencia", _database.sql.VarChar, telContactoEmergencia).input("estudiaActualmente", _database.sql.VarChar, estudiaActualmente).input("programaEnCurso", _database.sql.VarChar, programaEnCurso).input("tituloEducObtenido", _database.sql.VarChar, tituloEducObtenido).input("Otro", _database.sql.VarChar, Otro).input("nivelEducativo", _database.sql.VarChar, nivelEducativo).input("institucionEducativa", _database.sql.VarChar, institucionEducativa).input("tarjetaProfesional", _database.sql.VarChar, tarjetaProfesional).input("deportePractica", _database.sql.VarChar, deportePractica).input("cualDeporte", _database.sql.VarChar, cualDeporte).input("frecuencia", _database.sql.VarChar, frecuencia).input("manejoTiempoLibre", _database.sql.VarChar, manejoTiempoLibre).input("victimaConflicto", _database.sql.VarChar, victimaConflicto).input("registroUnicoVict", _database.sql.VarChar, registroUnicoVict).input("mujerVict", _database.sql.VarChar, mujerVict).input("discapaComp", _database.sql.VarChar, discapaComp).input("calificaEnCurso", _database.sql.VarChar, calificaEnCurso).input("condEspSalud", _database.sql.VarChar, condEspSalud).input("cualCondEspSalud", _database.sql.VarChar, cualCondEspSalud).input("respPersDisc", _database.sql.VarChar, respPersDisc).input("hijoEnfermTermi", _database.sql.VarChar, hijoEnfermTermi).query(_database.queries.createInfo);
          case 8:
            i = 0;
          case 9:
            if (!(i < totalPersonas)) {
              _context11.next = 23;
              break;
            }
            if (!(personasCargoList[i]['NombrePersonaCarg'] !== '')) {
              _context11.next = 20;
              break;
            }
            NombrePersonaCarg = personasCargoList[i]['NombrePersonaCarg'];
            parenPerCarg = personasCargoList[i]['parenPerCarg'];
            fchNacPerCarg = personasCargoList[i]['fchNacPerCarg'];
            edadPerCarg = personasCargoList[i]['edadPerCarg'];
            _context11.next = 17;
            return (0, _database.getConnection)();
          case 17:
            _pool = _context11.sent;
            _context11.next = 20;
            return _pool.request().input("NombrePersonaCarg", _database.sql.VarChar, NombrePersonaCarg).input("parenPerCarg", _database.sql.VarChar, parenPerCarg).input("fchNacPerCarg", _database.sql.VarChar, fchNacPerCarg).input("edadPerCarg", _database.sql.Int, edadPerCarg).input("identificacion", _database.sql.VarChar, identificacion).query(_database.queries.createPersona);
          case 20:
            i++;
            _context11.next = 9;
            break;
          case 23:
            _i = 0;
          case 24:
            if (!(_i < totalHijos)) {
              _context11.next = 37;
              break;
            }
            if (!(hijosList[_i]['nombreHijo'] !== '')) {
              _context11.next = 34;
              break;
            }
            nombreHijo = hijosList[_i]['nombreHijo'];
            fchNacHijo = hijosList[_i]['fchNacHijo'];
            edadHijo = hijosList[_i]['edadHijo'];
            _context11.next = 31;
            return (0, _database.getConnection)();
          case 31:
            _pool2 = _context11.sent;
            _context11.next = 34;
            return _pool2.request().input("nombreHijo", _database.sql.VarChar, nombreHijo).input("fchNacHijo", _database.sql.VarChar, fchNacHijo).input("edadHijo", _database.sql.Int, edadHijo).input("identificacion", _database.sql.VarChar, identificacion).query(_database.queries.createHijo);
          case 34:
            _i++;
            _context11.next = 24;
            break;
          case 37:
            _database.sql.close();
          case 38:
          case "end":
            return _context11.stop();
        }
      }
    }, _callee11);
  }));
  return function createInfo(_x21, _x22) {
    return _ref11.apply(this, arguments);
  };
}();
exports.createInfo = createInfo;