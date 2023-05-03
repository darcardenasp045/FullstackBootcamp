const notes = [
    {
        id: 1,
        name: "Daniel",
        APellido: "cardenas",
        CC: 102325232222564
    },
    
    {
        id: 2,
        name: "Andres",
        APellido: "cardenas",
        CC: 1023255542564
    },
    
    {
        id:3,
        name: "Nelson",
        APellido: "cardenas",
        CC: 102325211564
    }
]

const http = require ('http') // esto es lo mismo de import http from 'http'

const app = http.createServer((request, Response) =>{
    Response.writeHead(200,{'content-type':'application/json'})
    Response.end(JSON.stringify(notes)) 
    
} )
const PORT = 3001
app.listen(PORT)
console.log(`Server is runnig on port ${PORT}`)

    