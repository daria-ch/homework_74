const express = require('express');
const fs = require('fs');

const router = express.Router();
const path = './messages';


router.get('/', (req, res) => {
    fs.readdir('./messages', (err, files) => {
        console.log(files);
        files.forEach(file => {
            console.log(path + '/' + file);
        });
        res.send(files);
    })
});

router.post('/', (req, res) => {
    const date = new Date();
    const datetime = date.toISOString();
    const message = {...req.body, "datetime": datetime};

    const fileName = `./messages/${datetime}.txt`;

    const data = JSON.stringify(message, null, 2);

    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.error(err);
        }
        console.log('File was saved!');
    });

    console.log(message);
    res.send('Will create new message here')
});

module.exports = router;