const {
  RESPONSE_MESSAGE,
  RESPONSE_STATUS,
} = require('../../../helper/constant/responseConstant');
const movieService = require('../services/movieService');
const { createMovieRules, filterMovieRules } = require('../movieRules');
const { validateRequest } = require('../../../helper/utils/validateRequest');

class MovieController {
  constructor() {
    this.movieService = new movieService();
  }

  async createMovie(req, res, next) {
    try {
      await validateRequest(req, res, createMovieRules);

      const data = await this.movieService.createMovie(req.body);
      return res.json({
        status: RESPONSE_STATUS.success,
        message: RESPONSE_MESSAGE.success,
        data: data,
      });
    } catch (e) {
      next(e);
    }
  }

  async updateMovie(req, res, next) {
    try {
      await validateRequest(req, res, createMovieRules);

      const id = req.params.id;
      const data = await this.movieService.updateMovie(id, req.body);
      return res.json({
        status: RESPONSE_STATUS.success,
        message: RESPONSE_MESSAGE.success,
        data: data,
      });
    } catch (e) {
      next(e);
    }
  }

  async getAllMovie(req, res, next) {
    try {
      await validateRequest(req, res, filterMovieRules);
      const data = await this.movieService.getAllMovie(req.query);
      return res.json({
        status: RESPONSE_STATUS.success,
        message: RESPONSE_MESSAGE.success,
        data: data,
      });
    } catch (e) {
      next(e);
    }
  }

  async getOneMovie(req, res, next) {
    try {
      const id = req.params.id;
      const data = await this.movieService.getOneMovie(id);
      return res.json({
        status: RESPONSE_STATUS.success,
        message: RESPONSE_MESSAGE.success,
        data: data,
      });
    } catch (e) {
      next(e);
    }
  }

  async deleteMovie(req, res, next) {
    try {
      const id = req.params.id;
      await this.movieService.deleteMovie(id);
      return res.json({
        status: RESPONSE_STATUS.success,
        message: RESPONSE_MESSAGE.successDeleteData(id),
        data: null,
      });
    } catch (e) {
      next(e);
    }
  }
}

module.exports = MovieController;
