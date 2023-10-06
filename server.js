// import { createServer } from "node:http"

// const server = createServer((request, response) => {
//   response.write("Hello world")

//   return response.end()
// })

// server.listen(3333)

import { fastify } from "fastify"

const server = fastify()

server.get("/", (request, response) => {
  return "Hello World"
})

server.get("/hello", (request, response) => {
  return "Hello Erik"
})

server.get("/node", (request, response) => {
  return "Hello Node"
})

server.listen({
  port: 3333,
})
