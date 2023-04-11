const express = require('express');
const checkListRouter = require('./src/routes/checklist')

const app = express();
app.use(express.json());

app.use('/checklists', checkListRouter);

const log = (req,res, next) => {
  console.log (`Data: ${Date.now()}`);
  next();
}

app.use(log);

app.get('/', (req, res) => {
  res.send('<h1>Lista de tarefas</h1>');
})

app.get('/json', (req, res) => {
  console.log(req.body);
  res.json({title: 'Tarefa', done: true});
})

app.listen(3000, () => {
  console.log('Servidor foi iniciado');
})