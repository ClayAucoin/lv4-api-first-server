// src/middleware/requestMetaLogger.js

export default function requestMetaLogger(req, res, next) {
  const ip = req.ip
  const userAgent = req.get("User-Agent")
  const timestamp = new Date().toISOString()

  console.log(
    `[${timestamp}] ${req.method} ${req.path} - IP:${ip} - UA: ${userAgent}`
  )

  next()
}