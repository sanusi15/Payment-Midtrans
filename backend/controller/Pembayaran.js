import bayar from "../models/pembayaranModel.js";

export const createPembayaran = async (req, res) => {
    try {
        await bayar.create(req.body);
        res.json({
            "message": "Mahasiswa Added"
        })
    } catch (e) {
        res.json({ message: e.message })
    }
}


export const getDataPembayaran = async (req, res) => {   
    try {
        const data = await bayar.findAll({ where: { nim: req.params.nim } });
        res.json(data)
    } catch (e) {
        res.json({message: e.message})
    }
}