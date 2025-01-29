var express = require('express');
const { createFeedback, getAllFeedbacks, getFeedbackById, deleteFeedback, updateFeedback } = require('../controller/FeedbackController');
var router = express.Router();

router.post('/createFeedback',createFeedback)
router.get('/getAllFeedbacks',getAllFeedbacks)
router.get('/getFeedbackById/:id',getFeedbackById)
router.get('/updateFeedback/:id',updateFeedback)
router.post('/deleteFeedback/:id',deleteFeedback)

module.exports = router;
