// controllers/roomController.js
const { Room } = require('../models/Room');

exports.createRoom = async (req, res) => {
    try {
        const room = await Room.create(req.body);
        res.status(201).json(room);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getRooms = async (req, res) => {
    try {
        const rooms = await Room.findAll();
        res.json(rooms);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};