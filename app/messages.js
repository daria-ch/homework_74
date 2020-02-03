const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.send('List of messages will be here')
});

router.get('/messages', (req, res) => {
    res.send('List of messages will be here')
});

router.get('/messages/:id', (req, res) => {
    res.send(`A single message by ID=${req.params.id} will be here`)
});

router.post('/messages', (req, res) => {
    console.log(req.body);
    res.send('Will create new message here')
});

module.exports = router;