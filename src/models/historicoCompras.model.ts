import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database';
import Produto from './product.model';
import Fornecedor from './fornecedor.model';

class HistoricoCompras extends Model {}

HistoricoCompras.init({
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  dataCompra: { type: DataTypes.DATE, allowNull: false },
}, {
  sequelize,
  tableName: 'historico_compras',
});

HistoricoCompras.belongsTo(Produto, { foreignKey: 'produtoId', as: 'produto' });
HistoricoCompras.belongsTo(Fornecedor, { foreignKey: 'fornecedorId', as: 'fornecedor' });

export default HistoricoCompras;
