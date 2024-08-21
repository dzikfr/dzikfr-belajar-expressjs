// const router = require('express').Route();
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send({
        status: "succsess",
        message: "belajar expressjs"
    });
});

module.exports = router;