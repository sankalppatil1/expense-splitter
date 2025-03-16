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
    <Dialog>
      <DialogTrigger asChild>{dialogTriggerValue}</DialogTrigger>
      <DialogContent className="rounded-m w-78 h-80 inset-shadow-accent-foreground">
        <DialogHeader>
          <DialogTitle className="font-medium text-black text-center gap-2">
            {dialogTitle}
          </DialogTitle>
        </DialogHeader>
        <div>{dialogBody}</div>
        <DialogFooter className="flex  m-3">{dialogFooter}</DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AppDialogBox;
