require('dotenv').config()
require('./mongo')

const express = require('express')
const cors = require('cors')
const Note = require('./models/Note')

const app = express()
app.use(cors())
app.use(express.json())

let notes = []

app.get('/', (request, response) => {
  response.send('<h1>Hello World</h1>')
})

app.get('/api/notes', (request, response) => { // esta es la ruta donde se va a mostrar la informacion
  Note.find({}).then(notes => {
    response.json(notes)
  })
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

app.post('/api/notes', (request, response) => {
  const note = request.body

  if (!note || !note.content) {
    return response.status(400).json({
      error: 'No se pudo crear la nota'
    })
  }
  const newNote = new Note({
    content: note.content,
    important: note.important || false,
    date: new Date()

  })
  newNote.save().then(savedNote => {
    response.json(savedNote)
  })
})

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server is runnig on port ${PORT}`)
})
