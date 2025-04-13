import { Request, Response } from "express";
import catchAsync from "../../../helpers/catchAsync";
import { bookService } from "./book.service";
import sendResponse from "../../../helpers/senRespose";
import  httpStatus  from 'http-status';




const createBookIntoDB=catchAsync(async(req:Request,res:Response)=>{
    console.log(req.body)
    const result= await bookService.createBookIntoDB(req.body);

    sendResponse(res,{
        statusCode:httpStatus.OK,
        success:true,
        message:"successfully create book",
        data:result,
    })
})

const getAllBookFromDB=catchAsync(async(req:Request,res:Response)=>{
    // console.log('from book controller')
    const result=await bookService.getAllBookFromDB()
    sendResponse(res,{
        statusCode:httpStatus.OK,
        success:true,
        message:'get all books',
        data:result
    })
})

const getBookFromDB=catchAsync(async(req:Request,res:Response,)=>{
   const{id}=req.params;
   
    const result =await bookService.getBookFromDB(id);

    sendResponse(res,{
        statusCode:httpStatus.OK,
        success:true,
        message:'get book',
        data:result,
    })
})

const updateBook=catchAsync(async(req:Request,res:Response)=>{
   const{id}=req.params;
   
    
    const result= await bookService.updateBookIntoDB(id,req.body)
    sendResponse(res,{
        statusCode:httpStatus.OK,
        success:true,
        message:'update book',
        data:result,
    })
})

const deleteBook=catchAsync(async(req:Request,res:Response)=>{
    const {id}=req.params;
    const result =await bookService.deleteBookFromDB(id);
    sendResponse(res,{
        statusCode:httpStatus.OK,
        success:true,
        message:'delete book',
        data:result,
    })
})


export const bookController={
    createBookIntoDB,
    updateBook,
    deleteBook,
    getAllBookFromDB,
    getBookFromDB,
}