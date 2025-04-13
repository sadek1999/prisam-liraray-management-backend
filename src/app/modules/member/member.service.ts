import { Prisma } from "../../../../generated/prisma";
import prisma from "../../../shared/prisma";
import { iMember } from "./member.interface";



const createMemberIntoDB=async(payload:iMember)=>{

    const result =await prisma.member.create({
        data:{
            name:payload.name,
            email:payload.email,
            phone:payload.phone,
            membershipDate:payload.membershipDate
        }
    })

    return result;
}
const getAllFromDB=async()=>{
    const result = await prisma.member.findMany();
     return result;
}

const getFromDB=async(id:string)=>{
    const result =await prisma.member.findUniqueOrThrow({
        where:{id}
    })

    return result;
}


const updateIntoDB=async(id:string,payload:Prisma.MemberUpdateInput)=>{
    const result =await prisma.member.update({
        where:{id},
        data:{...payload}
    })
    return result;
}

const  deleteFromDB=async(id:string)=>{
    const result=await prisma.member.delete({
        where:{id}
    })
    return result;
}


export const memberService={
    createMemberIntoDB,
    getAllFromDB,
    getFromDB,
    updateIntoDB,
    deleteFromDB,
}