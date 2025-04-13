import { Request, Response } from "express";
import catchAsync from "./../../../helpers/catchAsync";
import { memberService } from "./member.service";
import sendResponse from "../../../helpers/senRespose";
import httpStatus from "http-status";

const createMemberIntoDB = catchAsync(async (req: Request, res: Response) => {
  const result = await memberService.createMemberIntoDB(req.body);
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "create member",
    data: result,
  });
});

const getAllFromDB = catchAsync(async (req: Request, res: Response) => {
  const result = await memberService.getAllFromDB();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "get all member",
    data: result,
  });
});

const getFromDB = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await memberService.getFromDB(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "get the  member",
    data: result,
  });
});

const updateIntoDB = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await memberService.updateIntoDB(id, req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "update the member",
    data: result,
  });
});

const deleteIntoDB = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await memberService.deleteFromDB(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "delete the  member",
    data: result,
  });
});

export const memberController = {
  createMemberIntoDB,
  getAllFromDB,
  getFromDB,
  updateIntoDB,
  deleteIntoDB,
};
