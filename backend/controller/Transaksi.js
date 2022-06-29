import Transaksi from "../models/transaksiModel.js";

export const getAllTransaksi = async (req, res) => {
    try {
        const Trnsaksi = await Transaksi.findAll();
        res.json(Trnsaksi)        
    } catch (e) {
        res.json({message: e.message})
    }
}

export const createTransaksi = async(req, res) => {
    try {
        await Transaksi.create(req.body)
        res.json({ "Message": "Transaksi Added" })
    } catch (e) {
        res.json({message: e.message})
    }
}

export const updateTransaksi = async (req, res) => {
    try {
        await Transaksi.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json({ "message": "Transaksi Updated" })
    } catch (e) {
        res.json({ message: e.message })
    }
}

export const deleteTransaksi = async (req, res) => {
    try {
        await Transaksi.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({ "message": "Transaksi Deleted" })
    } catch (e) {
        res.json({ message: e.message })
    }
}    