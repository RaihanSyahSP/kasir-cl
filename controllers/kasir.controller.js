const Kasir = require('../models/Kasir');

module.exports = {
    index: async (req, res) => {
        const kasir = await Kasir.findAll();

    },

    create: async (req, res) => {
    

    },

    store: async (req, res) => {
        await Kasir.create({
            nama_kasir: req.body.nama_kasir,
            email: req.body.email,
            password: req.body.password
        });

        return res.redirect('/kasir');
    },

    edit: async (req, res) => {
        const post = await Kasir.findByPk(req.params.id);

    },

    update: async (req, res) => {
        const kasir = await Kasir.findByPk(req.params.id);

        return res.redirect('/kasir');
    },

    destroy: async (req, res) => {
        const kasir = await Kasir.findByPk(req.params.id);

       
    },

}