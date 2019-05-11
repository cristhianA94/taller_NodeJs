const express = require('express');
const app = express();

app.get('/usuario', (req, res) => {
    res.json({
        "ok": true,
        'msg': "All ok"
    });
    res.send('Hello world');
});

module.exports = app;