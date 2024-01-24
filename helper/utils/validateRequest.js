const { validationResult } = require('express-validator');
const {
  RESPONSE_STATUS,
  RESPONSE_MESSAGE,
} = require('../constant/responseConstant');

validateRequest = async (req, res, rules) => {
  await Promise.all(rules.map((validation) => validation.run(req)));

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      status: RESPONSE_STATUS.failed,
      message: RESPONSE_MESSAGE.validationError,
      data: errors.array(),
    });
  }
};

module.exports = { validateRequest };
