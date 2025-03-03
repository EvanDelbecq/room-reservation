// controllers/reservationController.js
const { Reservation } = require('../models/Reservation');
const { Op } = require('sequelize');

exports.createReservation = async (req, res) => {
    try {
        // Check for existing reservations
        const existing = await Reservation.findOne({
            where: {
                roomId: req.body.roomId,
                [Op.or]: [
                    {
                        startTime: {
                            [Op.between]: [req.body.startTime, req.body.endTime]
                        }
                    },
                    {
                        endTime: {
                            [Op.between]: [req.body.startTime, req.body.endTime]
                        }
                    }
                ]
            }
        });

        if (existing) {
            return res.status(400).json({ error: 'Room already reserved for this time period' });
        }

        const reservation = await Reservation.create(req.body);
        res.status(201).json(reservation);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getReservations = async (req, res) => {
    try {
        const reservations = await Reservation.findAll({
            include: ['Employee', 'Room']
        });
        res.json(reservations);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};