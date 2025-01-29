const InventoryModel = require('../model/InventoryModel')


exports.createInventory = async (req, res) => {
    try {
        const { ItemName, Quantity, Unit, SupplierId, reorderLevel, expiryDate, storageLocation } = req.body;

        const newInventory = new InventoryModel({
            ItemName,
            Quantity,
            Unit,
            SupplierId,
            reorderLevel,
            expiryDate,
            storageLocation
        });

        await newInventory.save();
        res.status(201).json({
            status: 'Inventory item created successfully',
            data: newInventory
        });
    } catch (error) {

        res.status(500).json({
            status: 'Error creating inventory item',
            error: error.message
        });
    }
};


exports.getAllInventory = async (req, res) => {
    try {
        const inventoryItems = await InventoryModel.find()
            .populate('SupplierId', 'name contactDetails');

        return res.status(200).json({
            status: 'Inventory items retrieved successfully',
            data: inventoryItems
        });
    } catch (error) {

        res.status(500).json({
            status: 'Error fetching inventory items',
            error: error.message
        });
    }
};


exports.getInventoryById = async (req, res) => {
    try {

        const inventoryItem = await InventoryModel.findById(req.params.id)
            .populate('SupplierId', 'name contactDetails');

        if (!inventoryItem) {
            res.status(404).json({
                status: 'Inventory item not found'
            });
        } else {

            res.status(200).json({
                status: 'Inventory item retrieved successfully',
                data: inventoryItem
            })
        }
    } catch (error) {

        res.status(500).json({
            status: 'Error fetching inventory item',
            message: error.message
        });
    }
};


exports.updateInventory = async (req, res) => {
    try {

        const updatedInventory = await InventoryModel.findByIdAndUpdate(req.params.id, req.body, { new: true })
            .populate('SupplierId', 'name contactDetails');

        if (!updatedInventory) {
            res.status(404).json({
                status: 'Inventory item not found'
            });
        } else {

            res.status(200).json({
                status: 'Inventory item updated successfully',
                data: updatedInventory
            })
        }
    } catch (error) {

        res.status(500).json({
            status: 'Error updating inventory item',
            message: error.message
        });
    }
};


exports.deleteInventory = async (req, res) => {
    try {

        const deletedInventory = await InventoryModel.findByIdAndDelete(req.params.id);

        if (!deletedInventory) {
            res.status(404).json({
                status: 'Inventory item not found'
            });
        } else {

            res.status(200).json({
                status: 'Inventory item deleted successfully'
            })
        }
    } catch (error) {

        res.status(500).json({
            status: 'Error deleting inventory item',
            message: error.message
        });
    }
};
