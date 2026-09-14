const express = require('express');
const { getProdects, getSingleProdects } = require('../controllers/prodectController');
const router = express.Router();

router.route('/menu').get(getProdects);
router.route('/menu/:id').get(getSingleProdects);

module.exports = router;