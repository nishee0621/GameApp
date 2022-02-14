const express = require('express');
const path = require('path');
const port = process.env.PORT || 8085;
const app = express();

app.use(express.static(__dirname));
app.get('*', (req,res) => {
    console.log("hello");
    res.sendFile(path.resolve(__dirname, 'index.html'))
});

app.listen(port);
console.log("Listening on port ", port);
console.log("Server started");