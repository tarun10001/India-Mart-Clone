const express = require('express');
const app = express();
const cors = require("cors");
const importDataLipgloss = require("./lip-gloss.json");
const importDataFoundation = require("./foundation.json");


app.use(cors());

let port = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("Hello World");
})

app.get("/lipgloss", (req, res) => {
    res.send(importDataLipgloss);
})

app.get("/foundation", (req, res) => {
    res.send(importDataFoundation);
});

app.listen(port, () => {
    console.log(`listening on port http://localhost:${port}`);
});