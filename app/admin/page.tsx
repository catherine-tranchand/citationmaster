import { Card, CardContent, CardHeader, CardTitle } from "@/src/components/ui/card";
import { buttonVariants } from "@/src/components/ui/button";
import Link from "next/link";
import { prisma } from "@/src/lib/prisma";
import { DeleteCitationButton } from "./delete-citation-button";


export default async function Page(){
  const citations = await prisma.citation.findMany({
    orderBy: {
    createdAt: "desc"
  }
  })
 

 
  return(
    <Card className="flex flex-col gap-4"> 
      <CardHeader>
        <CardTitle>Citations</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        {citations.map(citation =>
        <Card className="p-4 flex items-start gap-4" key={citation.id}>
          <div className="flex flex-col gap-2 flex-1">
          <p className="relative pl-8 italic before:content-['“'] after:content-['”']">{citation.text}</p> 
          <p>--{citation.author}</p> 
          </div>
          <DeleteCitationButton id={citation.id} />
        </Card>

        )}
        <Link className={buttonVariants({size: "lg", variant: "outline"})}href="/admin/citations/new">
        Create citation
      </Link>
      </CardContent>
    </Card>
  );
}