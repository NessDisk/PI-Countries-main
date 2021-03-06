const { DataTypes , Sequelize } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('activity', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Dificulty: {
        type: DataTypes.INTEGER,
        allowNull: false,      
      },
      duracion: {
        type: DataTypes.INTEGER,
        allowNull: false,      
      },
      Temporada: {
        type: DataTypes.STRING,
        allowNull: false,      
      },
  });
};