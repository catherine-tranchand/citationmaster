"use client"

import { useState } from "react"
import { Button } from "@/src/components/ui/button"
import { Trash } from "lucide-react"
import { deleteCitationAction } from "./citations/new/citations.action"
import { useRouter } from "next/navigation"

export function DeleteCitationButton(props: {id: number}){
     const[isConfirm, setIsConfirm] = useState(false)
     const router = useRouter();


     const onDelete = async () =>{
       const result = await deleteCitationAction(props.id)
       if(result){
        router.refresh();
       }
     };

     return <Button 
     onClick={() => {
        if (isConfirm){
            onDelete();
        } else {
            setIsConfirm(true);
        }
     }}
     variant={isConfirm ? "destructive" : "outline"}>
        X
     </Button>
}