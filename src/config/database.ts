import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('historico_compras', 'root', 'sua_senha', {
  host: 'localhost',
  dialect: 'mysql',
});

export default sequelize;
