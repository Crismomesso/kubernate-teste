import { RequestHandler } from "restify";

export class Middlewares {
  notFound(req, res, next) {
    res.status(404);
    const error = new Error(`🔍 - Not Found - ${req._cacheURL}`);
    res.json({
      message: error.message,
      stack: process.env.NODE_ENV === "production" ? "🥞" : error.stack,
    });
  }
  errorHandler(err, req, res, next) {
    const statusCode = res.statusCode !== 200 ? res.statusCode : 500;
    res.status(statusCode);
    res.json({
      message: err.message,
      stack: process.env.NODE_ENV === "production" ? "🥞" : err.stack,
    });
  }
}
const mdw = new Middlewares()
export {mdw}
