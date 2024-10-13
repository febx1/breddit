"use client";

import React, { useEffect } from "react";
import { SaveButton } from "./SubmitButtons";
import { Textarea } from "@/components/ui/textarea";
import { updateSubDescription } from "../actions";
import { useFormState } from "react-dom";
import { toast } from "@/hooks/use-toast";
interface iAppProps {
  subName: string;
  description: string | null | undefined;
}

const initialState = {
  message: "",
  status: "",
};
const SubDescriptionForm = ({ description, subName }: iAppProps) => {
  const [state, formAction] = useFormState(updateSubDescription, initialState);

  useEffect(() => {
    if (state.status === "green") {
      toast({
        title: "Success",
        description: state.message,
      });
    } else if (state.status === "error") {
      toast({
        title: "Error",
        description: state.message,
        variant: "destructive",
      });
    }
  }, [toast, state]);
  return (
    <form className="mt-3" action={formAction}>
      <input type="hidden" name="subName" value={subName} />
      <Textarea
        name="description"
        placeholder="Create your custom description for your subreddit"
        defaultValue={description ?? undefined}
      />
      <SaveButton />
    </form>
  );
};

export default SubDescriptionForm;
