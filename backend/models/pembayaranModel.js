import { Sequelize } from 'sequelize';
import db from '../config/database.js';

const { DataTypes } = Sequelize;

const Bayar = db.define('tbl_historytransaksi', {
    waktu: DataTypes.STRING,
    nim: DataTypes.STRING,
    semester: DataTypes.STRING,
    order_id: DataTypes.STRING,
    kode_pembayaran: DataTypes.STRING,
    total_bayar: DataTypes.STRING,
    method: DataTypes.STRING,
    status: DataTypes.STRING,
}, {
    freezeTableName: true
});

export default Bayar;