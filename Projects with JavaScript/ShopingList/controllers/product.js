const Product = require('../models').Product;

module.exports = {
    index: (req, res) => {
        Product.findAll().then(entries => {
            res.render('product/index', {'entries': entries})
        });

    },

    createGet: (req, res) => {
        res.render('product/create')
    },

    createPost: (req, res) => {
        let body = req.body;

        Product.create(body).then(() => {
            return res.redirect("/")
        })

    },

    editGet: (req, res) => {
        let id = req.params.id;
        Product.findById(id).then(product => {
            res.render('product/edit', {'product': product})
        });

    },

    editPost: (req, res) => {
        let id = req.params.id;
        let body = req.body;
        Product.findById(id).then(product => {
            product.updateAttributes(body).then(() => {
                res.redirect('/');
            });
        });

    }
};