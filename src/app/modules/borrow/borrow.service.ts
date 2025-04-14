import { Prisma } from "../../../../generated/prisma";
import prisma from "../../../shared/prisma";


const createBorrow = async (payload:{bookId:string,memberId:string}) => {
  const {bookId,memberId}=payload;

  const result = await prisma.borrowRecord.create({
    data: {
      bookId,
      memberId,
      borrowDate:new Date()
    },
  });

  return result;
};


const returnBook= async(id:string)=>{
  const result= await prisma.borrowRecord.deleteMany({
    where:{
      bookId:id
    }
  })
  return result;
}

const getAllBorrow = async () => {
  const result = await prisma.borrowRecord.findMany();
  return result;
};

const getBorrow = async (id: string) => {
  const result = await prisma.borrowRecord.findUniqueOrThrow({
    where: { id },
  });
  return result;
};

const updateBorrow = async (id: string, payload: any) => {
  const result = await prisma.borrowRecord.update({
    where: { id },
    data: {
      ...payload,
    },
  });

  return result;
};

const deleteBorrow = async (id: string) => {
  const result = await prisma.borrowRecord.delete({
    where: { id },
  });

  return result;
};

export const borrowRecordService = {
  getAllBorrow,
  createBorrow,
  getBorrow,
  updateBorrow,
  deleteBorrow,
  returnBook,
};
