const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const movieRoutes = require('./routes/movies');
const tvShowRoutes = require('./routes/tv-shows');
const videoRoutes = require('./routes/videos');
const gameRoutes = require('./routes/games');

const PORT = 3001;

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/api/movies', movieRoutes);
app.use('/api/tv-shows', tvShowRoutes);
app.use('/api/videos', videoRoutes);
app.use('/api/games', gameRoutes);

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));