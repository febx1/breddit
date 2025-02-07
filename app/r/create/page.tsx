"use client";

import { createCommunity } from "@/app/actions";
import SubmitButtons from "@/app/components/SubmitButtons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { toast } from "@/hooks/use-toast";
import Link from "next/link";
import React, { useEffect } from "react";
import { useFormState } from "react-dom";

const initialState = { message: "", status: "" };
const page = () => {
  const [state, formAction] = useFormState(createCommunity, initialState);

  useEffect(() => {
    if (state.status === "error") {
      toast({
        title: "Error",
        description: state.message,
        variant: "destructive",
      });
    }
  }, [state, toast]);
  return (
    <div className="max-w-[1000px] mx-auto flex flex-col mt-4">
      <form action={formAction}>
        <h1 className="text-3xl font-extrabold tracking-tight">
          Create Community
        </h1>
        <Separator className="my-4" />
        <Label className="text-lg">Name</Label>
        <p className="text-muted-foreground">
          Community names including capitalization cannot be changed!
        </p>
        <div className="relative mt-3">
          <p className="absolute left-0 w-8 flex items-center justify-center h-full text-muted-foreground">
            br/
          </p>
          <Input
            name="name"
            required
            className="pl-6"
            minLength={2}
            maxLength={21}
          />
        </div>
        <p className="mt-1 text-destructive">{state.message}</p>
        <div className="w-full flex mt-5 gap-x-5 justify-end">
          <Button variant="secondary" asChild>
            <Link href="/">Cancel</Link>
          </Button>
          <SubmitButtons text="Create Community" />
        </div>
      </form>
    </div>
  );
};

export default page;
