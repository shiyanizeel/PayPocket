const CategoryModel = require('../model/CategoryModel')




exports.createCategory = async (req, res) => {
    try {
        const category = await CategoryModel.create(req.body)
        res.status(200).json({
            status: "category add",
            category
        })
    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
};


exports.getAllCategories = async (req, res) => {
    try {
        const category = await CategoryModel.find();
        res.status(200).json({
            status: "get All category",
            category
        })
    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
};


exports.getCategoryById = async (req, res) => {

    try {
        const category = await CategoryModel.findById(req.params.id);
        if (!category) {
            res.status(404).json({
                status: 'Category not found'
            })
        } else {
            res.status(200).json({
                status: "get one category",
                category
            })
        }
    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
};


exports.updateCategory = async (req, res) => {

    try {
        const category = await CategoryModel.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!category) {
            res.status(404).json({
                srtatus: 'Category not found'
            })
        } else {
            res.status(200).json({
                status: "update category",
                category
            })
        }
    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
};


exports.deleteCategory = async (req, res) => {

    try {
        const category = await CategoryModel.findByIdAndDelete(req.params.id);
        if (!category) {
            return res.status(404).json({
                status: 'Category not found'
            })
        } else {
            res.status(200).json({
                status: 'Category deleted successfully'
            })
        }
    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
};
