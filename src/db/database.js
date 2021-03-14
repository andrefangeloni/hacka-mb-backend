import { Pool } from "pg";

module.exports = new Pool({
    user: "jornada_db",
    password: "123",
    host: "localhost",
    port: 5432,
    database: "jornada_db",
})