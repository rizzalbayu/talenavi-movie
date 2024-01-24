const express = require('express');
const router = express.Router();
const MovieController = require('../src/movie/controllers/movieController');
const movieController = new MovieController();

router.get('/movie', (req, res, next) =>
  movieController.getAllMovie(req, res, next)
);

router.get('/movie/:id', (req, res, next) =>
  movieController.getOneMovie(req, res, next)
);

router.post('/movie', (req, res, next) =>
  movieController.createMovie(req, res, next)
);

router.put('/movie/:id', (req, res, next) =>
  movieController.updateMovie(req, res, next)
);

router.delete('/movie/:id', (req, res, next) =>
  movieController.deleteMovie(req, res, next)
);

module.exports = router;
