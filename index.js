//import json-server
const jsonServer = require('json-server')


//create a json server application
const server = jsonServer.create()


//set up route for db.json
const router = jsonServer.router("db.json")

//to return a middleware
const middleware = jsonServer.defaults()

//to set up port number for server app
const port = process.env.PORT || 3000

//we have to use router middleware in server app
server.use(middleware)
server.use(router)


//to listen the server in port
server.listen(port,()=>{
    console.log(`Contact server app started at port ${port}`);
})