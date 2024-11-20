import { Button, buttonVariants } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle} from "@/src/components/ui/card"


export default function Home() {
  return ( 
    <Card>
      <CardHeader>
      <CardTitle>URL : /</CardTitle>
      </CardHeader>
      <CardContent>
    <Link
       href="/admin"
        className={buttonVariants({size: "lg", variant: "outline"})} 
  >
    /admin
  </Link>
  </CardContent>
    
    </Card>
  );
    
}