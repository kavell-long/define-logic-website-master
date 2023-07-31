const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json([
        {
            username: 'test1'
        },
        {
            username: 'test2'
        }
    ])
});

module.exports = router;