const Restarantmodel = require ('../model/RestarantModel')



exports.createRrstarant = async (req,res)=>{
    try{
        const restarant = await Restarantmodel.create(req.body)
        res.status(200).json({
            status : "Add Restarant",
            restarant
        })
    }catch (error){
        res.status(500).json({
            status : "server error",
            message : error.message
        })
    }
 }


exports.getAllRestaurants = async (req, res) => {
    try {
        const restaurants = await Restarantmodel.find().populate('reviews.userId', 'name email');
        res.status(200).json({
            status : "get all restarant",
            restaurants
        })
    } catch (error) {
        res.status(400).json({
            status : "server error",
            message: error.message 
        })
    }
};


exports.getRestaurantById = async (req, res) => {
    
    try {
        const restaurant = await Restarantmodel.findById(req.params.id) .populate('reviews.userId', 'name email');
        if (!restaurant) {
             res.status(404).json({
                status: 'Restaurant not found' 
            })
        }else{
        res.status(200).json({
            status: "get one restarant",
            restaurant
        })
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


exports.updateRestaurant = async (req, res) => {
    
    try {
        const restaurant = await Restarantmodel.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!restaurant) {
            res.status(404).json({
                status: 'Restaurant not found' 
            })
        }else{
        res.status(200).json({
            status : "update successfully",
            restaurant
        })
    }
    } catch (error) {
        res.status(400).json({ 
            message: error.message 
        })
    }
};


exports.deleteRestaurant = async (req, res) => {
    const { id } = req.params;
    try {
        const restaurant = await Restarantmodel.findByIdAndDelete(id);
        if (!restaurant) {
             res.status(404).json({
                status: 'Restaurant not found'
             })
        }else {
        res.status(200).json({
            status: 'Restaurant deleted successfully'
         })
    }
    } catch (error) {
        res.status(400).json({
            message: error.message 
        })
    }
};
