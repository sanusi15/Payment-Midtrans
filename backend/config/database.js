import { Sequelize } from "sequelize";

const db = new Sequelize('midtrans', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

export default db;