import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import React, { ReactNode } from "react";

type Props = {
  dialogTriggerValue: ReactNode;
  dialogTitle: string;
  dialogBody: ReactNode;
  dialogFooter: ReactNode;
};

const AppDialogBox: React.FC<Props> = ({
  dialogTriggerValue,
  dialogTitle,
  dialogBody,
  dialogFooter,
}) => {
  return (
    // <div className="w-md h-auto border-1 flex flex-col justify-center items-center rounded-lg gap-5 relative top-0 left-0">
    <Dialog>
      <DialogTrigger asChild>{dialogTriggerValue}</DialogTrigger>
      <DialogContent className=" rounded-m w-78 h-80 inset-shadow-accent-foreground">
        <DialogHeader>
          <DialogTitle className="font-medium text-black text-center gap-2">
            {dialogTitle}
          </DialogTitle>
        </DialogHeader>
        <div>{dialogBody}</div>
        <DialogFooter className="flex  m-3">{dialogFooter}</DialogFooter>
      </DialogContent>
    </Dialog>
    // </div>
  );
};

export default AppDialogBox;
