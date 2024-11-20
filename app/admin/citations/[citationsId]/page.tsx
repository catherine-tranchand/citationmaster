import { Card, CardHeader, CardTitle } from "@/src/components/ui/card";

export default async function Page( props: {
   params: Promise <{
    citationId: string;
   }>;
}){
    const params = await props.params;
    return(
        <Card>
            <CardHeader>
                <CardTitle>{JSON.stringify(params, null, 2)}</CardTitle>
            </CardHeader>
        </Card>
    )
}