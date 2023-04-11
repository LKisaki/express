const express = require('express')

const app = express()

// app.use(express.json())

app.get('/', (req, res) => {
  res.send('<h1>Lista de tarefas</h1>')
})

app.get('/json', (req, res) => {
  // console.log(req.body)
  res.json({title: 'Tarefa', done: true})
})

app.listen(3000, () => {
  console.log('Servidor foi iniciado')
})