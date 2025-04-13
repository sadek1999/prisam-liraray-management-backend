import prisma from "../../../shared/prisma"




const createBookIntoDB=async(payload:any)=>{


    const result= await prisma.book.create({
        data:{
            title: payload.title,
      genre: payload.genre,
      publishedYear: payload.publishedYear,
      totalCopies: payload.totalCopies,
      availableCopies: payload.availableCopies,
        }
    })
    return result;
}

const updateBookIntoDB =async(payload:any)=>{
    console.log('this is update book')
}

const getAllBookFromDB=async()=>{

}

const getBookFromDB=async(id:string)=>{

}

const deleteBookFromDB=async(id:string)=>{

}


export const bookService={
createBookIntoDB,
updateBookIntoDB,
getAllBookFromDB,
getBookFromDB,
deleteBookFromDB,
}