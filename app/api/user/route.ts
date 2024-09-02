import { log } from "console";
import { NextRequest } from "next/server";

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
  return Response.json({
    message : " You are Logged In"
  })

}