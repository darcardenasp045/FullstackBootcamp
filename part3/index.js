const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())

let notes = [
  {
    id: 1,
    content: 'hola1',
    date: '2019-05-30T19:20:14.298Z',
    impotant: true
  },

  {
    id: 2,
    content: 'hola2',
    date: '2019-05-30T19:20:14.098Z',
    impotant: true
  },

  {
    id: 3,
    content: 'hola3',
    date: '2019-05-30T19:20:14.091Z',
    impotant: false
  }
]

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
    content: note.content,
    important: typeof note.important !== 'undefined' ? note.important : false,
    date: new Date().toISOString()

  }
  notes = [...notes, newNote]
  response.json(newNote)
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server is runnig on port ${PORT}`)
})
