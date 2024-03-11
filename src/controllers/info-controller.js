const { StatusCodes } = require("http-status-codes");

const info = (req, res) => {
  return res.status(StatusCodes.OK).json({
    success: true,
    message: "Status is ok",
    error: {},
    data: {},
  });
};

module.exports = { info };
