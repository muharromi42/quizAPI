const express = require('express');
const cors = require('cors');
const req = require('express/lib/request');
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.send('halo dunia');
});

app.listen(port, () => console.log(`App listening on port http://localhost:${port}!`));