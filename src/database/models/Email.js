/**
 * Email model representation
 * @param {import("sequelize").Sequelize} sequelize 
 * @param {import("sequelize").DataTypes} DataTypes 
 * @returns Sequelize Email model
 */
 module.exports = (sequelize, DataTypes) => {
  
    //Set the Alias
    const alias = "Email";
  
    //Sets the columns
    const cols = {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING(256),
        allowNull: false,
        unique: true,
      },
      descript: {
        type: DataTypes.STRING(256),
        allowNull:true
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      created_at: {
        type: DataTypes.DATE,
        allowNull:false
      },
      updated_at:  {
        type: DataTypes.DATE,
        allowNull:false
      },
      deleted_at: {
        type: DataTypes.DATE,
        allowNull: true
      }
    };
  
    //Sets configurations the from model or table
    const config = {
      tableName: "Emails",
      timestamps: true,
      createdAt: "created_at",
      updatedAt: "updated_at",
      deletedAt: "deleted_at",
    };
  
    //------------------------- Asignation
    const Email = sequelize.define(alias, cols, config);
  
    //------------------------- Relationship
    Email.associate = (models) => {
  
        //Emails -> Users
        Email.belongsTo(models.User, {
          as: "user",
          foreignKey: "userId",
        });    

    };
  
    //------------------------- Return
    return Email;
  
  };