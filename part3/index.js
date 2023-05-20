const express = require('express')
const app = express()

app.use(express.json())

let notes = [
  {
    id: 1,
    name: 'Daniel',
    APellido: 'cardenas',
    CC: 102325232222564,
    content: 'hola1'
  },

  {
    id: 2,
    name: 'Andres',
    APellido: 'cardenas',
    CC: 1023255542564,
    content: 'hola2'
  },

  {
    id: 3,
    name: 'Nelson',
    APellido: 'cardenas',
    CC: 102325211564,
    content: 'hola3'
  }
]

// const http = require ('http') // esto es lo mismo de import http from 'http'
// const { request } = require('https')

// const app = http.createServer((request, Response) =>{
//     Response.writeHead(200,{'content-type':'application/json'})
//     Response.end(JSON.stringify(notes))
// } )

app.get('/', (request, response) => {
  response.send('<h1>Hello World</h1>')
})

app.get('/api/notes', (request, response) => { // esta es la ruta donde se va a mostrar la informacion
  response.send(notes)
})

app.get('/api/notes/:id', (request, response) => { // esta es la ruta donde se va a mostrar la informacion
  const id = Number(request.params.id)
  const nota = notes.find(notes => notes.id === id)

  if (nota) { // de esta manera le podemos poner un codigo de error en caso de no encontrar la nota
    response.json(nota)
  } else {
    response.status(404).end()
  }

  response.send(nota)
})

app.delete('/api/notes/:id', (request, response) => {
  const id = Number(request.params.id)
  notes = notes.filter((note) => note.id !== id)
  response.status(204).end()
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server is runnig on port ${PORT}`)
})

app.post('/api/notes', (request, response) => {
  const note = request.body

  if (!note || !note.content) {
    return response.status(400).json({
      error: 'No se pudo crear la nota'
    })
  }
  const ids = notes.map(note => note.id)
  const maxId = Math.max(...ids)
  const newNote = {
    id: maxId + 1,
    name: note.name,
    Apellido: note.apellido,
    CC: note.CC,
    content: note.content

  }
  notes = [...notes, newNote]
  response.json(newNote)
})
