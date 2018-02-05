module.exports=function(){

    this.dbConnections = [];
    
    this.dbConnections["authDatabase"] = {
        host: process.env.EndPoint_rdsMobileBackend,
        port: 3306,
        user: "rnavagamuwa",
        password: "12345678",
        database: "authDatabase",
    };
    };