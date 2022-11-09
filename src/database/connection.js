import sql from "mssql";

const dbSettings = {
  user: process.env.USER,
  password: process.env.PASSWORD,
  server: process.env.SERVER,
  database: process.env.DATABASE,
  options: {
    encrypt: false, // for azure
    trustServerCertificate: true, // change to true for local dev / self-signed certs
  },
};

const dbSettingsMD = {
  user: process.env.USERMD,
  password: process.env.PASSWORDMD,
  server: process.env.SERVERMD,
  database: process.env.DATABASEMD,
  options: {
    encrypt: false, // for azure
    trustServerCertificate: true, // change to true for local dev / self-signed certs
  },
};

export async function getConnection() {
  try {
    const pool = await sql.connect(dbSettings);
    return pool;
  } catch (error) {
    console.log(error);
  }
}

export async function getConnectionMD() {
  try {
    const poolMD = await sql.connect(dbSettingsMD);
    return poolMD;
  } catch (error) {
    console.log(error);
  }
}

export {sql}