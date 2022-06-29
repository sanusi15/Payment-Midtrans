import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const Transaksi = db.define('tbl_jenistransaksi', {
    tipe_transaksi: DataTypes.STRING,
    nama_transaksi: DataTypes.STRING,
}, {
    freezeTableName: true
}

)

export default Transaksi;