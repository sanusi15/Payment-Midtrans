import Mhs from "../models/mahasiswaModel.js"

export const getAllMahasiswa = async (req, res) => {
    try {
        const Mahasiswa = await Mhs.findAll();
        res.json(Mahasiswa);
    } catch (e) {
        res.json({message: e.message})
    }
    
}

export const createMahasiswa = async (req, res) => {
    try {
        await Mhs.create(req.body);
        res.json({
            "message" : "Mahasiswa Added"
        })
    } catch (e) {
        res.json({ message: e.message })
    }
}

export const updateMahasiswa = async (req, res) => {
    try {
        await Mhs.update(req, body, {
            id: req.params.id
        });
        res.json({ "message": "Mahasiswa Updated"})
    } catch (e) {
        res.json({ message: e.message})
    }
}

export const deleteMahasiswa = async (req, res) => {
    try {
        await Mhs.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({"message": "Mahasiswa Deleted"})
    } catch (e) { 
        res.json({message: e.message})
    }
}