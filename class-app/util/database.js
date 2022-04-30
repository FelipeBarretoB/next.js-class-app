import {Pool} from "pg/lib";

var db;

if(!db){
    db = new Pool({
        host: "localhost",
        user: "postgres",
        password: "123",
        database: "users",
        port: "5432"
    })
}

export default db;  