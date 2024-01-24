const RESPONSE_MESSAGE = {
  movieNotFound: 'Movie data not found',
  success: 'Success',
  internalServerError: 'Internal Server Error',
  validationError: 'Validation error',
  successDeleteData: (id) => `Success delete data with id ${id}`,
};

const RESPONSE_STATUS = {
  success: 'Success',
  failed: 'Failed',
};

module.exports = { RESPONSE_MESSAGE, RESPONSE_STATUS };
