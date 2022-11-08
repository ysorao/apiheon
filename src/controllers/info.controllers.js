import { pool } from "mssql";
import { getConnection, sql, queries, getConnectionMD } from "../database";

//CONSULTAR TODA LA INFORMACION DE LOS REGISTROS ACTUALIZACION DE DATOS
export const getInfo = async (req, res) => {
  const pool = await getConnection();
  const result = await pool.request().query(queries.getInfo);
  if(result.rowsAffected < 1){
    res.sendStatus(204)
  }else{
    res.json(result.recordset);
  }
};


//CONSULTAR LA  INFORMACION INDIVIDUAL DE NOMINA
export const getInfoMDById = async (req, res) => {
  const { id } = req.params;
  const pool = await getConnectionMD();
  const result = await pool.request().input("id", sql.VarChar, id).query(queries.getInfoMDById);
  if(result.rowsAffected < 1){
    res.sendStatus(204)
  }else{
    res.json(result.recordset);

  }
};


//CONSULTAR LA INFORMACION DE ACEPTACION DE TTO DATOS
export const getInfoHabeas = async (req, res) => {
  const pool = await getConnection();
  const result = await pool.request().query("SELECT * FROM InfoheonHabeasData");
  res.json(result.recordset);
};


//CONSULTAR LA INFORMACION DE ACEPTACION DE TTO DATOS  MENORES
export const getInfoHabeasMenor = async (req, res) => {
  const pool = await getConnection();
  const result = await pool.request().query(queries.getInfoHabeasMenor);
  res.json(result.recordset);
};

//INSERTAR LA ACEPTACION DE TTO DE DATOS
export const createHabeas = async (req, res) => {
  const { documento, fecha, estado, ipAddress, usuario, nombreCompleto } =
    req.body;
  const pool = await getConnection();
  const result = await pool
    .request()
    .input("documento", sql.VarChar, documento)
    .input("fecha", sql.VarChar, fecha)
    .input("estado", sql.VarChar, estado)
    .input("ipAddress", sql.VarChar, ipAddress)
    .input("usuario", sql.VarChar, usuario)
    .input("nombreCompleto", sql.VarChar, nombreCompleto)
    .query(queries.createHabeas);
    if(result.rowsAffected >0){
      res.sendStatus(200)
    }else{
      res.sendStatus(204)
    }

};

//INSERTAR LA ACEPTACION DE TTO DE DATOS MENORES DE EDAD

export const createHabeasMenor = async (req, res) => {
  const { documento, fecha, estado, ipAddress, usuario, nombreCompleto } =req.body;
  const pool = await getConnection();
  const result=
  await pool
    .request()
    .input("documento", sql.VarChar, documento)
    .input("fecha", sql.VarChar, fecha)
    .input("estado", sql.VarChar, estado)
    .input("ipAddress", sql.VarChar, ipAddress)
    .input("usuario", sql.VarChar, usuario)
    .input("nombreCompleto", sql.VarChar, nombreCompleto)
    .query(queries.createHabeasMenor);
    if(result.rowsAffected >0){
      res.sendStatus(200)
    }else{
      res.sendStatus(204)
    }
};

//ACTUALIZAR LA INFORMACION DE TTO DE DATOS MENORES DE EDAD

export const updateHabeasMenor = async (req, res) =>{
    const { id } = req.params
    const { documento, fecha, estado, ipAddress, usuario, nombreCompleto } =req.body;

    const pool = await getConnection();
    const result = await pool
    .request()
    .input("id", sql.VarChar, id)
    .input("documento", sql.VarChar, documento)
    .input("fecha", sql.VarChar, fecha)
    .input("estado", sql.VarChar, estado)
    .input("ipAddress", sql.VarChar, ipAddress)
    .input("usuario", sql.VarChar, usuario)
    .input("nombreCompleto", sql.VarChar, nombreCompleto)
    .query(queries.updateHabeasMenor);

    res.json(result)

}




//INSERTAR LA INFORMACION PRINCIPAL DE LA ENCUESTA

export const createInfo =  async (req, res) => {
      const { apellidos, nombres,  edad,  nacionalidad, identificacion, paisExp, deptoExp, ciudadExp, paisNacimiento, deptoNacimiento, ciudadNacimiento, genero, rh, estadoCivil, grupoEtnico, cabezaFamilia, emailPersonal, celularPersonal, emailCorporativo, celularCorporativo, ocupacion, tipoContrato, fechaIngreso, departamento, cargo, area, paisResidencia, dptoResidencia, ciudad, localidad, direccion, barrio, nivelSocioec, tieneVehiculo, tipoVivienda, nomContactoEmerg, parentescoContEmerg, telContactoEmergencia, estudiaActualmente, programaEnCurso, tituloEducObtenido, Otro, nivelEducativo, institucionEducativa, tarjetaProfesional, deportePractica, cualDeporte, frecuencia, manejoTiempoLibre, victimaConflicto, registroUnicoVict, mujerVict, discapaComp, calificaEnCurso, condEspSalud, cualCondEspSalud, respPersDisc, hijoEnfermTermi, personasCargoList, hijosList } = req.body;
      const totalPersonas = personasCargoList.length
      const totalHijos = hijosList.length
      const pool = await getConnection();
      await pool
      .request()
      .input("apellidos",sql.VarChar,apellidos)
      .input("nombres",sql.VarChar,nombres)
      .input("edad",sql.VarChar,edad)
      .input("nacionalidad",sql.VarChar,nacionalidad)
      .input("identificacion",sql.VarChar,identificacion)
      .input("paisExp",sql.VarChar,paisExp)
      .input("deptoExp",sql.VarChar,deptoExp)
      .input("ciudadExp",sql.VarChar,ciudadExp)
      .input("paisNacimiento",sql.VarChar,paisNacimiento)
      .input("deptoNacimiento",sql.VarChar,deptoNacimiento)
      .input("ciudadNacimiento",sql.VarChar,ciudadNacimiento)
      .input("genero",sql.VarChar,genero)
      .input("rh",sql.VarChar,rh)
      .input("estadoCivil",sql.VarChar,estadoCivil)
      .input("grupoEtnico",sql.VarChar,grupoEtnico)
      .input("cabezaFamilia",sql.VarChar,cabezaFamilia)
      .input("emailPersonal",sql.VarChar,emailPersonal)
      .input("celularPersonal",sql.VarChar,celularPersonal)
      .input("emailCorporativo",sql.VarChar,emailCorporativo)
      .input("celularCorporativo",sql.VarChar,celularCorporativo)
      .input("ocupacion",sql.VarChar,ocupacion)
      .input("tipoContrato",sql.VarChar,tipoContrato)
      .input("fechaIngreso",sql.VarChar,fechaIngreso)
      .input("departamento",sql.VarChar,departamento)
      .input("cargo",sql.VarChar,cargo)
      .input("area",sql.VarChar,area)
      .input("paisResidencia",sql.VarChar,paisResidencia)
      .input("dptoResidencia",sql.VarChar,dptoResidencia)
      .input("ciudad",sql.VarChar,ciudad)
      .input("localidad",sql.VarChar,localidad)
      .input("direccion",sql.VarChar,direccion)
      .input("barrio",sql.VarChar,barrio)
      .input("nivelSocioec",sql.VarChar,nivelSocioec)
      .input("tieneVehiculo",sql.VarChar,tieneVehiculo)
      .input("tipoVivienda",sql.VarChar,tipoVivienda)
      .input("nomContactoEmerg",sql.VarChar,nomContactoEmerg)
      .input("parentescoContEmerg",sql.VarChar,parentescoContEmerg)
      .input("telContactoEmergencia",sql.VarChar,telContactoEmergencia)
      .input("estudiaActualmente",sql.VarChar,estudiaActualmente)
      .input("programaEnCurso",sql.VarChar,programaEnCurso)
      .input("tituloEducObtenido",sql.VarChar,tituloEducObtenido)
      .input("Otro",sql.VarChar,Otro)
      .input("nivelEducativo",sql.VarChar,nivelEducativo)
      .input("institucionEducativa",sql.VarChar,institucionEducativa)
      .input("tarjetaProfesional",sql.VarChar,tarjetaProfesional)
      .input("deportePractica",sql.VarChar,deportePractica)
      .input("cualDeporte",sql.VarChar,cualDeporte)
      .input("frecuencia",sql.VarChar,frecuencia)
      .input("manejoTiempoLibre",sql.VarChar,manejoTiempoLibre)
      .input("victimaConflicto",sql.VarChar,victimaConflicto)
      .input("registroUnicoVict",sql.VarChar,registroUnicoVict)
      .input("mujerVict",sql.VarChar,mujerVict)
      .input("discapaComp",sql.VarChar,discapaComp)
      .input("calificaEnCurso",sql.VarChar,calificaEnCurso)
      .input("condEspSalud",sql.VarChar,condEspSalud)
      .input("cualCondEspSalud",sql.VarChar,cualCondEspSalud)
      .input("respPersDisc",sql.VarChar,respPersDisc)
      .input("hijoEnfermTermi",sql.VarChar,hijoEnfermTermi)
      .query(queries.createInfo);

      for(let i = 0; i< totalPersonas; i++){
        if((personasCargoList[i]['NombrePersonaCarg']) !== '' ){
          const NombrePersonaCarg = personasCargoList[i]['NombrePersonaCarg']
          const parenPerCarg = personasCargoList[i]['parenPerCarg']
          const fchNacPerCarg = personasCargoList[i]['fchNacPerCarg']
          const edadPerCarg = personasCargoList[i]['edadPerCarg']
          const pool = await getConnection();
          await pool
          .request()
          .input("NombrePersonaCarg",sql.VarChar,NombrePersonaCarg)
          .input("parenPerCarg",sql.VarChar,parenPerCarg)
          .input("fchNacPerCarg",sql.VarChar,fchNacPerCarg)
          .input("edadPerCarg",sql.Int,edadPerCarg)
          .input("identificacion",sql.VarChar,identificacion)
          .query(queries.createPersona);
        }

      }

      for(let i = 0; i< totalHijos; i++){
        if((hijosList[i]['nombreHijo']) !== '' ){
          const nombreHijo = hijosList[i]['nombreHijo']
          const fchNacHijo = hijosList[i]['fchNacHijo']
          const edadHijo = hijosList[i]['edadHijo']
          const pool = await getConnection();
          await pool
          .request()
          .input("nombreHijo",sql.VarChar,nombreHijo)
          .input("fchNacHijo",sql.VarChar,fchNacHijo)
          .input("edadHijo",sql.Int,edadHijo)
          .input("identificacion",sql.VarChar,identificacion)
          .query(queries.createHijo);
        }

      }

};
