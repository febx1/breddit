"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { updateUsername } from "../actions";
import SubmitButtons from "./SubmitButtons";
import { useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import { useFormState } from "react-dom";

const initialState = {
  message: "",
  status: "",
};

const SettingsForm = ({
  username,
}: {
  username: string | null | undefined;
}) => {
  const [state, formAction] = useFormState(updateUsername, initialState);

  const { toast } = useToast();

  useEffect(() => {
    if (state?.status == "green") {
      toast({
        title: "Succesfull",
        description: state.message,
        variant: "default",
      });
    } else if (state?.status === "error") {
      toast({
        title: "Error",
        description: state.message,
        variant: "destructive",
      });
    }
  }, [state, toast]);

  return (
    <form action={formAction}>
      <h1 className="text-3xl font-extrabold tracking-tighter">Settings</h1>
      <Separator className="my-4" />
      <Label className="text-lg">Username</Label>
      <p className="text-muted-foreground">
        In this settings page you can change your username
      </p>
      <Input
        name="username"
        defaultValue={username ?? ""}
        required
        className="mt-2"
        min={2}
        maxLength={21}
      />
      {state?.status === "error" && (
        <p className="text-red-500 text-destructive">{state.message}</p>
      )}
      <div className="w-full flex mt-5 gap-x-5 justify-end">
        <Button variant={"secondary"} asChild type="button">
          <Link href={"/"}>Cancel</Link>
        </Button>
        <SubmitButtons text="Change Username" />
      </div>
    </form>
  );
};

export default SettingsForm;
