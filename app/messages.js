const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.send('List of messages will be here')
});

router.get('/:id', (req, res) => {
    res.send(`A single message by ID=${req.params.id} will be here`)
});

router.post('/', (req, res) => {
    const date = new Date();
    const message = {...req.body, "datetime": date};
    console.log(message);
    res.send('Will create new message here')
});

module.exports = router;