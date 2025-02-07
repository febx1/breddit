"use client";

import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { useFormStatus } from "react-dom";

const SubmitButtons = ({ text }: { text: string }) => {
  const { pending } = useFormStatus();
  return (
    <>
      {pending ? (
        <Button disabled>
          <Loader2 className="mr-2 w-4 h-4 animate-spin" />
          Please wait
        </Button>
      ) : (
        <Button type="submit">{text}</Button>
      )}
    </>
  );
};

export default SubmitButtons;

export function SaveButton() {
  const { pending } = useFormStatus();
  return (
    <>
      {pending ? (
        <Button size={"sm"} className="mt-2 w-full" disabled>
          <Loader2 className="mr-2 h-3 w-3 animate-spin" />
          Please Wait
        </Button>
      ) : (
        <Button size={"sm"} className="mt-2 w-full" type="submit">
          Save
        </Button>
      )}
    </>
  );
}
