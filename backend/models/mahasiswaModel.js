import { Sequelize } from 'sequelize';
import db from '../config/database.js';

const { DataTypes } = Sequelize;

const Mhs = db.define('tbl_mhs', {
    nim: DataTypes.STRING,
    nama_mahasiswa: DataTypes.STRING,
    IdJurusan: DataTypes.STRING,
    IdSemester: DataTypes.INTEGER
}, {
    freezeTableName: true
});

export default Mhs;