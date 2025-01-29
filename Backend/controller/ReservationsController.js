const ReservationsModel = require('../model/ReservationsModel');


exports.createReservation = async (req, res) => {
    try {
        const { CustomerId, TableId, Status, PartySize, SpecialRequests } = req.body;

        const newReservation = new ReservationsModel({
            CustomerId,
            TableId,
            Status,
            PartySize,
            SpecialRequests
        });

        await newReservation.save();
        res.status(201).json({
            status: 'Reservation created successfully',
            data: newReservation
        });
    } catch (error) {

        res.status(500).json({
            status: 'Error creating reservation',
            message: error.message
        });
    }
};


exports.getAllReservations = async (req, res) => {
    try {
        const reservations = await ReservationsModel.find()
            .populate('CustomerId', 'name email')
            .populate('TableId', 'tableNumber');

        res.status(200).json({
            status: 'Reservations retrieved successfully',
            data: reservations
        });
    } catch (error) {

        res.status(500).json({
            status: 'Error fetching reservations',
            message: error.message
        });
    }
};


exports.getReservationById = async (req, res) => {
    try {

        const reservation = await ReservationsModel.findById(req.params.id)
            .populate('CustomerId', 'name email')
            .populate('TableId', 'tableNumber');

        if (!reservation) {
            res.status(404).json({
                status: 'Reservation not found'
            });
        } else {

            res.status(200).json({
                status: 'Reservation retrieved successfully',
                data: reservation
            })
        }
    } catch (error) {

        res.status(500).json({
            status: 'Error fetching reservation',
            message: error.message
        });
    }
};


exports.updateReservation = async (req, res) => {
    try {


        const updatedReservation = await ReservationsModel.findByIdAndUpdate(req.params.id, req.body, { new: true })
            .populate('CustomerId', 'name email')
            .populate('TableId', 'tableNumber');

        if (!updatedReservation) {
            return res.status(404).json({
                status: 'Reservation not found'
            });
        } else {

            res.status(200).json({
                status: 'Reservation updated successfully',
                data: updatedReservation
            })
        }
    } catch (error) {

        res.status(500).json({
            status: 'Error updating reservation',
            message: error.message
        });
    }
};


exports.deleteReservation = async (req, res) => {
    try {

        const deletedReservation = await ReservationsModel.findByIdAndDelete(req.params.id);

        if (!deletedReservation) {
            res.status(404).json({
                status: 'Reservation not found'
            });
        } else {

            res.status(200).json({
                status: 'Reservation deleted successfully'
            })
        }
    } catch (error) {

        res.status(500).json({
            status: 'Error deleting reservation',
            error: error.message
        });
    }
};
