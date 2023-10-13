import  express  from "express";
import { ControlHabitacion } from "../controllers/ControlRoom.js"
import { ControlReserva } from "../controllers/ControlBooking.js";

let controladorH = new ControlHabitacion()
let contoladorR = new ControlReserva()

export let rutasAPI = express.Router()
//aca poner los endpoint(nombres de los servicios)
rutasAPI.post("/api/habitaciones", controladorH.registrarHabitacion);

    rutasAPI.get("/api/habitaciones", controladorH.BuscarHabitaciones);
    rutasAPI.get("/api/habitacion/:id", controladorH.BuscarHabitacionPorId);
    rutasAPI.put("/api/habitaciones/:id", controladorH.modificarHabitacion);
    rutasAPI.delete("/api/habitaciones/:id", controladorH.eliminarHabitacion);

    //programcion de reservas
    rutasAPI.post("/api/reservas", contoladorR.registrarReserva);
    rutasAPI.get("/api/reservas", contoladorR.BuscarReservas);
    rutasAPI.get("/api/reserva/:id", contoladorR.BuscarReservaPorId);
    rutasAPI.put("/api/reservas/:id", contoladorR.modificarReserva);
    rutasAPI.delete("/api/reservas/:id", contoladorR.eliminarReserva);