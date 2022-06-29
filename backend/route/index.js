import express from "express";
import { getAllMahasiswa, createMahasiswa, updateMahasiswa , deleteMahasiswa} from "../controller/Mahasiswa.js";
import { getAllTransaksi, createTransaksi, deleteTransaksi, updateTransaksi } from '../controller/Transaksi.js';
import { getDataMidtrans} from '../controller/Midtrans.js';
import { createPembayaran, getDataPembayaran } from '../controller/Pembayaran.js';
const router = express();

router.get('/', getAllMahasiswa)
router.post('/', createMahasiswa)
router.patch('/:id', updateMahasiswa)
router.delete('/:id', deleteMahasiswa)
router.get('/transaksi', getAllTransaksi)
router.post('/transaksi', createTransaksi)
router.patch('/transaksi/:id', updateTransaksi)
router.delete('/transaksi/:id', deleteTransaksi)
router.post('/bayar', getDataMidtrans);
router.get('/bayar/:nim', getDataPembayaran);
router.post('/saveBayar', createPembayaran);
export default router;