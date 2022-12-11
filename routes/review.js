const {Router}=require('express');
const reviewRouter=new Router();
const reviewController=require('../controllers/reviewController');
const multer=require('multer');
const memoStorage=multer.memoryStorage()
const upload=multer({memoStorage})

reviewRouter.get('/userreview', reviewController.getUserReview);
reviewRouter.get('/itemreview', reviewController.getItemReview);
reviewRouter.get('/onereview', reviewController.getOneReview);
reviewRouter.post('/comment', reviewController.createComment);
reviewRouter.get('/getcomments', reviewController.getComments);
reviewRouter.post('/postpic', upload.single('pic'), reviewController.createReview);
reviewRouter.get('/picture', reviewController.getPicture)


module.exports=reviewRouter;