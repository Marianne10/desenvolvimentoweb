import { Model, DataTypes } from "sequelize";
import { sequelize } from "../config/database";

export class Fornecedor extends Model {
    id!: number;
    nome!: string;
}

Fornecedor.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    sequelize,
    modelName: "fornecedor",
    tableName: "fornecedores",
    timestamps: false,
});
