import { Request, Response } from "express";
import catchAsync from "../../../helpers/catchAsync";
import { borrowRecordService } from "./borrow.service";
import sendResponse from "../../../helpers/senRespose";
import httpStatus from "http-status";
import { bookController } from "../book/book.controller";
import { bookService } from "../book/book.service";

const createBorrowIntoDB = catchAsync(async (req: Request, res: Response) => {
const{bookId}=req.body
  const result = await borrowRecordService.createBorrow(bookId);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: "create the borrow",
    data: result,
  });
});

const bookReturn=catchAsync(async(req:Request,res:Response)=>{
  const{id}=req.params;
  const result=await borrowRecordService.returnBook(id)
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "return the  book ...",
    data: result,
  });

})

const getAllBorrow = catchAsync(async (req: Request, res: Response) => {
  const result = await borrowRecordService.getAllBorrow();
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "get all  borrow",
    data: result,
  });
});

const getBorrow = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await borrowRecordService.getBorrow(id);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "get  the borrow",
    data: result,
  });
});

const updateBorrow = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await borrowRecordService.updateBorrow(id, req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "successfully update the borrow",
    data: result,
  });
});

const deleteBorrow = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;

  const result = await borrowRecordService.deleteBorrow(id);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "delete the  borrow",
    data: result,
  });
});

export const borrowREcordController = {
  createBorrowIntoDB,
  getAllBorrow,
  getBorrow,
  updateBorrow,
  deleteBorrow,
  bookReturn
};
