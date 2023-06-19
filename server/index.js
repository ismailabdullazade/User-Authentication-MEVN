const express = require('express');

const app = express();

const PORT = 3500;

app.listen(PORT, () => console.log(`App listening on ${PORT} port`))