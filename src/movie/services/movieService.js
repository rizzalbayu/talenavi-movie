const { Op } = require('sequelize');
const {
  RESPONSE_MESSAGE,
} = require('../../../helper/constant/responseConstant');
const { CustomError } = require('../../../helper/utils/customError');
const { MovieModel } = require('../models/movieModel');

class movieService {
  constructor() {
    this.movieModel = MovieModel;
  }

  getAllMovie = async (payload) => {
    const filter = this.buildFilter(payload);
    const data = await this.movieModel.findAll(filter);
    return data;
  };

  buildFilter = (payload) => {
    const { search = '', genre = '', page = 1, size } = payload;

    const limit = size && parseInt(size) > 0 ? parseInt(size) : null;
    const offset = (page - 1) * (limit || 1);

    const filter = {
      where: {
        [Op.and]: [
          {
            [Op.or]: [
              { title: { [Op.like]: `%${search}%` } },
              { director: { [Op.like]: `%${search}%` } },
            ],
          },
        ],
      },
      order: [['id', 'DESC']],
      offset,
      limit,
    };

    if (genre) {
      filter.where[Op.and].push({ genre: { [Op.like]: `%${genre}%` } });
    }

    return filter;
  };

  getOneMovie = async (id) => {
    const data = await this.movieModel.findOne({
      where: { id },
    });
    if (!data) throw new CustomError(RESPONSE_MESSAGE.movieNotFound, 404);
    return data;
  };

  createMovie = async (payload) => {
    const data = await this.movieModel.create({
      title: payload.title,
      director: payload.director,
      summary: payload.summary,
      genre: payload.genre.toString(),
      createdBy: 0,
    });
    return data;
  };

  updateMovie = async (id, payload) => {
    const movie = await this.getOneMovie(id);
    const data = await movie.update({
      title: payload.title,
      director: payload.director,
      summary: payload.summary,
      genre: payload.genre.toString(),
      updatedBy: 0,
    });
    return data;
  };

  deleteMovie = async (id) => {
    const movie = await this.getOneMovie(id);
    const data = await movie.destroy();
    return data;
  };
}

module.exports = movieService;
