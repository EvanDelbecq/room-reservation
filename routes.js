// routes/index.js
const express = require('express');
const router = express.Router();
const roomController = require('./controllers/roomController');
const employeeController = require('./controllers/employeeController');
const reservationController = require('./controllers/reservationController');

// Room routes
router.post('/rooms', roomController.createRoom);
router.get('/rooms', roomController.getRooms);

// Employee routes
router.post('/employees', employeeController.createEmployee);
router.get('/employees', employeeController.getEmployees);

// Reservation routes
router.post('/reservations', reservationController.createReservation);
router.get('/reservations', reservationController.getReservations);

module.exports = router;