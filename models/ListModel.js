import { DataTypes } from 'sequelize';
import sequelize from '../database/connection.js';
import User from './UserModel.js';
import Character from './CharacterModel.js';

const List = sequelize.define('List', {
  listname: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

List.belongsTo(User, { foreignKey: 'UserId' }); // Relacionamento 1-N entre User e List
User.hasMany(List, { foreignKey: 'UserId' }); // Relacionamento 1-N entre User e List

List.belongsToMany(Character, { through: 'ListCharacter' }); // Relacionamento N-N entre List e Character
Character.belongsToMany(List, { through: 'ListCharacter' }); // Relacionamento N-N entre Character e List

export default List;