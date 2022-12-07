const {Router}=require('express');
const router=new Router();
const movieRouter=require('./movies');
const seriesRouter=require('./series');
const bookRouter=require('./books');
const gameRouter=require('./games');
const authRouter=require('./auth');
const reviewRoter=require('./review');


router.use('/movies', movieRouter);
router.use('/series', seriesRouter);
router.use('/books', bookRouter);
router.use('/games', gameRouter);
router.use('/user', authRouter);
router.use('/review', reviewRoter);

module.exports=router;