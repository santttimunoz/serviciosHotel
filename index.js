//importacin de la herramienta
const express = require('express')
const app = express()

//atendiendo peticiones
// app.get('/api/habitaciones', function (req, res) {
//   res.send('programacion de api')
// })

//levantando un servidor
app.listen(3000, function(){
    console.log("servirdor encendido")
})
//cada vex que se hace un cambio en el backend se debe reiniciar el servidor, sino saldra el error 404

//que es nodemol


app.post('/api/habitaciones', function (req, res) {
  res.send('estoy guardando un habitacion')
})
app.get('/api/habitaciones', function (req, res) {
  res.send('estoy buscando todas la habitaciones')
})
app.get('/api/habitacion', function (req, res) {
  res.send('estoy buscando una habitacion')
})
app.put('/api/habitaciones', function (req, res) {
  res.send('estoy modificando una habitacion')
})
app.delete('/api/habitaciones', function (req, res) {
  res.send('estoy eliminando una habitacion')
})

//programcion de reservas
app.post('/api/reservas', function (req, res) {
  res.send('estoy guardando una reserva')
})
app.get('/api/reservas', function (req, res) {
  res.send('estoy buscando todas la reservas')
})
app.get('/api/reserva', function (req, res) {
  res.send('estoy buscando una reserva')
})
app.put('/api/reservas', function (req, res) {
  res.send('estoy modificando una reserva')
})
app.delete('/api/reservas', function (req, res) {
  res.send('estoy eliminando una reserva')
})