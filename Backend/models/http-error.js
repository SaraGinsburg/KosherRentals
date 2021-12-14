class HttpError extends Error {
  constructor(message, errorCode) {
    super() //call the parent constructor
    this.message = message //add a 'message' propery
    this.code = errorCode //adds a 'code' property
  }
}
module.exports = HttpError
