
//conexion de Mongo
const mongoose = require('mongoose')
const url_db = 'mongodb://localhost:27017/Empresaa'
//promesa de que si funciona la base
mongoose.connect(url_db)
.then(() => {
    console.log("JALA")
}).catch((err)=>{
    console.log("Valio cheto")
})
//esquema de la base de datos
const esquema_empleados = new mongoose.Schema({
    name : {type : String},
    puesto : {type : String},
    fecNat : {type : String},
    salario : {type : Number},
    telefono : {type : String},
    correo : {type : String},
    edad : {type : Number}
})

//creando una coleccion(Tabla)
const modelo_empleados = new mongoose.model(
    'Empleados',
    esquema_empleados
)
//meter datos a la tabla
modelo_empleados.create({
    name : "Hyrule Inciclopedy",
    puesto : "Supervisor",
    fecNat : "19/05/2012",
    salario : 19001,
    telefono : "449 449 4499",
    correo : "gokussj4@gmail.com",
    edad : 49
})
