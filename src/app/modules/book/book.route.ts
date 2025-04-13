
import  express  from 'express';
import { bookController } from './book.controller';




const router=express.Router()

router.post('/',bookController.createBookIntoDB);

router.get("/all",bookController.getAllBookFromDB)

export const BookRoute=router;