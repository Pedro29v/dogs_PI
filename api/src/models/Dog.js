const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Dog', {

    ID: {
      type: DataTypes.UUID,
      allowNull:false,
      primaryKey:true
    },

    name:{
      type:DataTypes.STRING,
      unique:true,
      allowNull:false
    },

    height:{
      type:DataTypes.STRING,
      allowNull:false
    },

    weight:{
      type:DataTypes.STRING,
      allowNull:false
    },

    lifeSpan:{
      type:DataTypes.STRING,
    },

    image:{
      type:DataTypes.STRING(100000)
    }

    
  }, {timestamps:false});
};


/* El modelo de la base de datos deberá tener las siguientes entidades (Aquellas propiedades marcadas con asterísco deben ser obligatorias):
[ ] Raza con las siguientes propiedades:
ID *
Nombre *
Altura *
Peso *
Años de vida
[ ] Temperamento con las siguientes propiedades:
ID
Nombre */
