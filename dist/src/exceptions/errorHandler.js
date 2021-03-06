"use strict";
exports.__esModule = true;
/**
 *
 * The middleware for catch they erros into application
 * @category Exceptions
 * @param {HttpException} err - The error (if exist)
 * @param {Request} req - The request
 * @param {Response} res - The response
 * @param {NextFunction} cb - The next function (if pass)
 * @return {void}  void
 */
var errorHandler = function (err, req, res, cb) {
    if (res.headersSent) {
        return cb(err);
    }
    res.status(err.status).json({
        error: {
            message: err.message,
            status: err.status,
            stack: err.stack
        }
    });
};
exports["default"] = errorHandler;
