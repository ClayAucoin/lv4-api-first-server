// src/utils/sendError.js

export function sendError(status, message) {
  const err = new Error(message)
  err.status = status
  return err
}
