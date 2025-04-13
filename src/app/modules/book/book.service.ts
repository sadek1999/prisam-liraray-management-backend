import prisma from "../../../shared/prisma";

const createBookIntoDB = async (payload: any) => {
  const result = await prisma.book.create({
    data: {
      title: payload.title,
      genre: payload.genre,
      publishedYear: payload.publishedYear,
      totalCopies: payload.totalCopies,
      availableCopies: payload.availableCopies,
    },
  });
  return result;
};

const updateBookIntoDB = async (id:string,payload:any) => {
  
  const result= await prisma.book.update({
    where:{
        id:id
        
    },
    data:{
        ...payload
    }
  })
  return result;
};

const getAllBookFromDB = async () => {
    const result= await prisma.book.findMany()
    return result;
};

const getBookFromDB = async (id: string) => {
    const result = await prisma.book.findUniqueOrThrow({
        where:{
            id
        }
    })

    return result;
};

const deleteBookFromDB = async (id: string) => {

    const result= await prisma.book.delete({
        where:{
            id
        }
    })
    return result;
};

export const bookService = {
  createBookIntoDB,
  updateBookIntoDB,
  getAllBookFromDB,
  getBookFromDB,
  deleteBookFromDB,
};
