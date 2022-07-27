const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')

const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(router)

const url = 'https://json-server-ecommercelamp.herokuapp.com/'

//process.env.PORT 

const port = url || 3000

server.listen(port, () => {
    console.log(`JSON Server is running on port ${port}`)
})