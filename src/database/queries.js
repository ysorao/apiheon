export const queries = {
  getInfo: "SELECT * FROM InformacionHeon",
  getInfoMDById: `SELECT 
    A.EMPLEADO Collate SQL_Latin1_General_CP1253_CI_AI		        AS DOCUMENTO
    , A.APELLIDO Collate SQL_Latin1_General_CP1253_CI_AI		    AS APELLIDOS
    , A.NOMBRE Collate SQL_Latin1_General_CP1253_CI_AI		        AS NOMBRES
    , A.DPTO Collate SQL_Latin1_General_CP1253_CI_AI		        AS DPTO
    , CONVERT(VARCHAR, A.F_ANTIGUEDAD, 105)	                        AS INGRESO
    , B.DESCRIPCION Collate SQL_Latin1_General_CP1253_CI_AI         AS CARGO
    , C.DESCRIPCION Collate SQL_Latin1_General_CP1253_CI_AI	        AS AREA
    , D.DESCRIPCION Collate SQL_Latin1_General_CP1253_CI_AI	        AS CONTRATO
    FROM EMP A
    INNER JOIN DTS B ON A.OFICIO	    = B.CODIGO AND B.INDICE= 'oficio'
    INNER JOIN DTS C ON A.CCOSTO	    = C.CODIGO AND C.INDICE= 'Ccosto'
    INNER JOIN DTS D ON A.TP_CONTR	= D.CODIGO AND D.INDICE= 'ContratoTrabajo'
    WHERE A.EMPLEADO = @id`,
  getInfoHabeasMenor: "SELECT * FROM InfoheonHabeasDataMenorEdad",

  createHabeas:
    "INSERT INTO infoheonHabeasData (documento, fecha, estado, ipAddress, usuario, nombreCompleto) VALUES (@documento, @fecha, @estado, @ipAddress, @usuario, @nombreCompleto)",
    
  createHabeasMenor:
    "INSERT INTO infoheonHabeasDataMenorEdad (documento, fecha, estado, ipAddress, usuario, nombreCompleto) VALUES (@documento, @fecha, @estado, @ipAddress, @usuario, @nombreCompleto)",

  updateHabeasMenor:
  "UPDATE infoheonHabeasDataMenorEdad SET documento = @documento, fecha = @fecha, estado = @estado, ipAddress = @ipAddress, usuario = @usuario, nombreCompleto = @nombreCompleto  WHERE id = @id",

  createInfo:
  "INSERT INTO InformacionHeon ( apellidos, nombres,  edad,  nacionalidad, identificacion, paisExp, deptoExp, ciudadExp, paisNacimiento, deptoNacimiento, ciudadNacimiento, genero, rh, estadoCivil, grupoEtnico, cabezaFamilia, emailPersonal, celularPersonal, emailCorporativo, celularCorporativo, ocupacion, tipoContrato, fechaIngreso, departamento, cargo, area, paisResidencia, dptoResidencia, ciudad, localidad, direccion, barrio, nivelSocioec, tieneVehiculo, tipoVivienda, nomContactoEmerg, parentescoContEmerg, telContactoEmergencia, estudiaActualmente, programaEnCurso, tituloEducObtenido, Otro, nivelEducativo, institucionEducativa, tarjetaProfesional, deportePractica, cualDeporte, frecuencia, manejoTiempoLibre, victimaConflicto, registroUnicoVict, mujerVict, discapaComp, calificaEnCurso, condEspSalud, cualCondEspSalud, respPersDisc, hijoEnfermTermi)  VALUES ( @apellidos, @nombres,  @edad,  @nacionalidad, @identificacion, @paisExp, @deptoExp, @ciudadExp, @paisNacimiento, @deptoNacimiento, @ciudadNacimiento, @genero, @rh, @estadoCivil, @grupoEtnico, @cabezaFamilia, @emailPersonal, @celularPersonal, @emailCorporativo, @celularCorporativo, @ocupacion, @tipoContrato, @fechaIngreso, @departamento, @cargo, @area, @paisResidencia, @dptoResidencia, @ciudad, @localidad, @direccion, @barrio, @nivelSocioec, @tieneVehiculo, @tipoVivienda, @nomContactoEmerg, @parentescoContEmerg, @telContactoEmergencia, @estudiaActualmente, @programaEnCurso, @tituloEducObtenido, @Otro, @nivelEducativo, @institucionEducativa, @tarjetaProfesional, @deportePractica, @cualDeporte, @frecuencia, @manejoTiempoLibre, @victimaConflicto, @registroUnicoVict, @mujerVict, @discapaComp, @calificaEnCurso, @condEspSalud, @cualCondEspSalud, @respPersDisc, @hijoEnfermTermi)",

  createPersona:
  "INSERT INTO infoHeonPersonasCargo (nombrePersCargo, parentPersCargo, fchNacPersCargo, edadPersCargo, docEmpleado) VALUES (@NombrePersonaCarg, @parenPerCarg, @fchNacPerCarg, @edadPerCarg, @identificacion)",

  createHijo:

  "INSERT INTO infoHeonHijos (docEmpleado, nombreHijo, fchNacHijo,  edadHijo ) VALUES (@identificacion, @nombreHijo, @fchNacHijo,  @edadHijo)",

};


