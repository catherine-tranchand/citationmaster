"use server"

import { prisma } from "@/src/lib/prisma";
import { redirect } from "next/navigation";

export async function createCitationAction(citation : {
    citation: string,
    author: string
}) {

const newCitation = await prisma.citation.create ({
    data: {
  
  author: citation.author,
  text: citation.citation,
 },
});

if (newCitation) {
    redirect ("/admin");
} 
  return {
    error: "Error while creating the citation"
  };
}

export async function deleteCitationAction(id: number) {
  await prisma.citation.delete({
    where: {
      id,
    },
  });
  return {
    message: "The citation is deleted"
  }
}