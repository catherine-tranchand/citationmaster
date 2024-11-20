"use client";

import Form from "next/form";
import { useState } from "react";
import { Label } from "@/src/components/ui/label";
import { Input } from "@/src/components/ui/input";
import { Button } from "@/src/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/src/components/ui/card";
import { useFormStatus } from "react-dom";
import { createCitationAction } from "./citations.action";

export default function Page() {
  const [isLoading, setIsLoading] = useState(false);

  const createCitation = async (FormData: FormData) => {
    
    const json = await createCitationAction({
      author: String(FormData.get("author")), 
      citation: String(FormData.get("citation")),
    })  
    
    console.log(json);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Create Citation</CardTitle>
      </CardHeader>
      <CardContent>
        <form
          action={async (formData) => {
            await createCitation(formData);
          }}
          className="flex flex-col gap-2"
        >
          <Label>
            Citation
            <Input name="citation" />
          </Label>
          <Label>
            Author
            <Input name="author" />
          </Label>
          <SubmitButton isLoading={isLoading} />
        </form>
      </CardContent>
    </Card>
  );
}

const SubmitButton = ({ isLoading }: { isLoading: boolean }) => {
  const { pending } = useFormStatus();

  return (
    <Button disabled={isLoading} type="submit">
      {isLoading ? "Loading..." : "Submit"}
    </Button>
  );
};

