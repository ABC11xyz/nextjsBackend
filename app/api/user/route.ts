import { log } from "console";
import { NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client"
const client = new PrismaClient();

export function GET(){
  //some logic
  return Response.json({
    name : "Harkirat",
    email : "harkirat@yahoo.in"
  })
}

export async function POST (req : NextRequest) {
  const body = await req.json();
  log(body);
  
  client.user.create({
    data : {
      username : body.username,
      password : body.password 
    }
  })


  return Response.json({
    message : " You are Logged In"
  })

}