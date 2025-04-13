
import  express  from 'express';
import { bookController } from './book.controller';




const router=express.Router()

router.post('/',bookController.createBookIntoDB);

router.get("/all",bookController.getAllBookFromDB)
router.get("/:id",bookController.getBookFromDB)
router.put('/:id',bookController.updateBook)
router.delete("/:id",bookController.deleteBook)

export const BookRoute=router;