const { check } = require('express-validator');
const { MOVIE_GENRE } = require('../../helper/constant/movieConstant');

createMovieRules = [
  check('title').notEmpty().withMessage('Title is required'),
  check('director').notEmpty().withMessage('Director is required'),
  check('summary')
    .notEmpty()
    .withMessage('Summary is required')
    .isLength({ min: 1, max: 100 })
    .withMessage('Summary length between 1 and 100'),
  check('genre')
    .isArray()
    .withMessage('Genre must be an array')
    .custom((value) => {
      const isValidGenres = value.every((genre) =>
        Object.values(MOVIE_GENRE).includes(genre)
      );
      if (!isValidGenres) {
        throw new Error(
          `All genres must be one of ${Object.values(MOVIE_GENRE).join(', ')}`
        );
      }
      return true;
    }),
];

filterMovieRules = [
  check('page')
    .optional()
    .toInt()
    .isInt({ min: 1 })
    .withMessage('Must positive number'),
  check('size')
    .optional()
    .toInt()
    .isInt({ min: 1 })
    .withMessage('Must positive number'),
  check('genre')
    .optional()
    .isIn(Object.values(MOVIE_GENRE))
    .withMessage(
      `All genres must be one of ${Object.values(MOVIE_GENRE).join(', ')}`
    ),
];

module.exports = { createMovieRules, filterMovieRules };
