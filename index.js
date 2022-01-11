const {Sequelize}= require ("sequelize")

const connection =new Sequelize ("master32", "root", "Marcol1234",{
    host:"localhost",
    dialect:"mysql"
});

const main =async() =>{
    try {
        await connection.authenticate();
        console.log("Connection has been successfully established")
    } catch (error) {
        console.error("unable to connect to the database", error)
        
    }
    await connection.close();
    process.exit();

}
main();
