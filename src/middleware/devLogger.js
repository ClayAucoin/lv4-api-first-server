// src/middleware/devLogger.js
const colors = {
  reset: "\x1b[0m",
  green: "\x1b[32m",
  yellow: "\x1b[33m",
  red: "\x1b[31m"
}

const SHOW_BODY = true // turn off in production

export default function devLogger(req, res, next) {
  const start = Date.now()

  res.on("finish", () => {
    const duration = Date.now() - start
    const ip = req.ip
    const userAgent = req.get("User-Agent")
    const timestamp = new Date().toISOString()

    let color = colors.green
    if (res.statusCode >= 500) color = colors.red
    else if (res.statusCode >= 400) color = colors.yellow

    console.log(
      `${color}[${timestamp}] ${req.method} ${req.originalUrl} ` +
      `${res.statusCode} ${duration}ms - IP:${ip} - UA:${userAgent}${colors.reset}`
    )

    if (SHOW_BODY && req.body && Object.keys(req.body).length > 0) {
      console.log("   BODY:", req.body)
    }
  })

  next()
}
