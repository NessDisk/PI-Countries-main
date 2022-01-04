const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('country', {
    id: {
      // type: DataTypes.UUID,
      //   allowNull: false,
      //   primaryKey: true,
      //  defaultValue: DataTypes.UUIDV4
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
      
    },
    name: {
      type: DataTypes.STRING, 
      allowNull: false, 
    },
    imageflag: {
      type: DataTypes.STRING,
      allowNull: false,      
    },
    Continente: {type: DataTypes.STRING,
      allowNull: false,
    },
    capital: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Subregion: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Area: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Poblation: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }, 

  });
};
