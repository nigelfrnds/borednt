const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const movieRoutes = require('./routes/movies');

const PORT = 3001;

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/api/movies', movieRoutes);
app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));