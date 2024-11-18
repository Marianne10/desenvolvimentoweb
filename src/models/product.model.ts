import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database';

class Produto extends Model {}

Produto.init({
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  nome: { type: DataTypes.STRING, allowNull: false },
  preco: { type: DataTypes.FLOAT, allowNull: false },
}, {
  sequelize,
  tableName: 'produtos',
});

export default Produto;
