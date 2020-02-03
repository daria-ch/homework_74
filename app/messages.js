const express = require('express');
const fs = require('fs');

const router = express.Router();
const path = './messages';
let messagesText = [];

router.get('/', (req, res) => {
    fs.readdir(path, (err, files) => {
        console.log(files);
        let lastMessages = files.reverse().slice(0, 5);
        if (lastMessages.length === 0) {
            res.send('The list of messages will be here')
        }
        lastMessages.forEach(file => {
            console.log(path + '/' + file);
            fs.readFile(path + '/' + file, (err, data) => {
                if (err) {
                    console.error(err);
                } else {
                    messagesText.push(JSON.parse(data.toString()));
                }
            });
        });
        res.send(messagesText);
        messagesText = [];
    });
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