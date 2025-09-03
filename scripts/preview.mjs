#!/usr/bin/env node
import http from 'node:http'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(__dirname, '..', 'out')
const defaultPort = Number(process.env.PORT || 5173)

const types = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.txt': 'text/plain; charset=utf-8',
  '.xml': 'application/xml; charset=utf-8',
  '.wasm': 'application/wasm',
  '.map': 'application/json; charset=utf-8',
  '.woff2': 'font/woff2',
  '.woff': 'font/woff',
  '.ttf': 'font/ttf',
  '.otf': 'font/otf',
}

function send(res, status, body, headers = {}) {
  res.writeHead(status, {
    'Cache-Control': 'no-store',
    ...headers,
  })
  res.end(body)
}

function serveFile(res, filePath) {
  const ext = path.extname(filePath).toLowerCase()
  const type = types[ext] || 'application/octet-stream'
  const stream = fs.createReadStream(filePath)
  res.writeHead(200, { 'Content-Type': type, 'Cache-Control': 'no-store' })
  stream.pipe(res)
}

const server = http.createServer((req, res) => {
  try {
    const urlPath = decodeURIComponent(new URL(req.url, 'http://localhost').pathname)
    const joined = path.join(root, urlPath)
    const safePath = path.normalize(joined)
    if (!safePath.startsWith(root)) return send(res, 403, 'Forbidden')

    let target = safePath
    if (fs.existsSync(target) && fs.statSync(target).isDirectory()) {
      const indexHtml = path.join(target, 'index.html')
      if (fs.existsSync(indexHtml)) return serveFile(res, indexHtml)
    }

    if (!fs.existsSync(target)) {
      // Try appending "/index.html" for exported routes
      const indexCandidate = path.join(target, 'index.html')
      if (fs.existsSync(indexCandidate)) return serveFile(res, indexCandidate)
    }

    if (fs.existsSync(target) && fs.statSync(target).isFile()) {
      return serveFile(res, target)
    }

    // Fallback to 404.html or index.html
    const notFound = path.join(root, '404.html')
    if (fs.existsSync(notFound)) return serveFile(res, notFound)
    const indexHtml = path.join(root, 'index.html')
    if (fs.existsSync(indexHtml)) return serveFile(res, indexHtml)
    return send(res, 404, 'Not found')
  } catch (e) {
    return send(res, 500, 'Internal Server Error')
  }
})

function startServer(port, attempt = 0) {
  server.removeAllListeners('error')
  server.on('error', (err) => {
    if (err && err.code === 'EADDRINUSE') {
      const userForcedPort = !!process.env.PORT
      if (userForcedPort) {
        console.error(`Port ${port} is in use. Choose another: PORT=3000 npm run serve:out`)
        process.exit(1)
      }
      const next = port + 1
      if (attempt < 10) {
        console.warn(`Port ${port} in use, trying ${next}...`)
        startServer(next, attempt + 1)
        return
      }
      console.warn(`Falling back to a random free port`)
      server.listen(0, () => {
        const address = server.address()
        console.log(`Serving out/ at http://localhost:${address.port}`)
      })
      return
    }
    console.error(err)
    process.exit(1)
  })

  server.listen(port, () => {
    console.log(`Serving out/ at http://localhost:${port}`)
  })
}

process.on('SIGINT', () => server.close(() => process.exit(0)))
process.on('SIGTERM', () => server.close(() => process.exit(0)))

startServer(defaultPort)
