import  express  from "express";

export let rutasAPI = express.Router()

//aca poner los endpoint(nombres de los servicios)
rutasAPI.post("/api/habitaciones", function (req, res) {
      res.send("estoy guardando un habitacion");
    });

    rutasAPI.get("/api/habitaciones", function (req, res) {
      res.send("estoy buscando todas la habitaciones");
    });
    rutasAPI.get("/api/habitacion", function (req, res) {
      res.send("estoy buscando una habitacion");
    });
    rutasAPI.put("/api/habitaciones", function (req, res) {
      res.send("estoy modificando una habitacion");
    });
    rutasAPI.delete("/api/habitaciones", function (req, res) {
      res.send("estoy eliminando una habitacion");
    });

    //programcion de reservas
    rutasAPI.post("/api/reservas", function (req, res) {
      res.send("estoy guardando una reserva");
    });
    rutasAPI.get("/api/reservas", function (req, res) {
      res.send("estoy buscando todas la reservas");
    });
    rutasAPI.get("/api/reserva", function (req, res) {
      res.send("estoy buscando una reserva");
    });
    rutasAPI.put("/api/reservas", function (req, res) {
      res.send("estoy modificando una reserva");
    });
    rutasAPI.delete("/api/reservas", function (req, res) {
      res.send("estoy eliminando una reserva");
    });