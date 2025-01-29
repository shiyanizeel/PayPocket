const MenuItemModel = require('../model/MenuItemModel')

exports.createMenuItem = async (req, res) => {
    try {
        const menuitem = await MenuItemModel.create(req.body)
        res.status(200).json({
            status: "MenuItem addd",
            menuitem
        })
    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
};


exports.getAllMenuItems = async (req, res) => {
    try {
        const menuItems = await MenuItemModel.find().populate('Category');
        res.status(200).json({
            status: "get all Items",
            menuItems
        })
    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
};


exports.getMenuItemById = async (req, res) => {

    try {
        const menuItem = await MenuItemModel.findById(req.params.id).populate('Category');
        if (!menuItem) {
            res.status(404).json({
                status: 'Menu item not found'
            })
        } else {
            res.status(200).json({
                status: "get one MenuItems",
                menuItem
            })
        }
    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
};


exports.updateMenuItem = async (req, res) => {

    try {
        const menuItem = await MenuItemModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!menuItem) {
            res.status(404).json({
                status: 'Menu item not found'
            })
        } else {
            res.status(200).json({
                status: "update menuItem",
                menuItem
            })
        }
    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
};


exports.deleteMenuItem = async (req, res) => {

    try {
        const menuItem = await MenuItemModel.findByIdAndDelete(req.params.id);
        if (!menuItem) {
            res.status(404).json({
                status: 'Menu item not found'
            })
        } else {
            res.status(200).json({
                status: 'Menu item deleted successfully'
            })
        }
    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
};
