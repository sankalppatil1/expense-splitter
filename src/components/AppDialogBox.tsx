import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@radix-ui/react-dialog";
import React, { ReactNode } from "react";
import { DialogFooter, DialogHeader } from "./ui/dialog";

type Props = {
  dialogTriggerValue: string;
  dialogTitle: string;
  DialogBody: ReactNode;
  dialogFooterTitle:ReactNode
};

const AppDialogBox: React.FC<Props> = ({
  dialogTriggerValue,
  dialogTitle,
  DialogBody,
  dialogFooterTitle
  
}) => {
  return (
    <div className="w-md h-auto border-1 flex flex-col justify-center items-center rounded-lg gap-5 relative top-0 left-0">
      <Dialog>
        <DialogTrigger asChild>
          <button>{dialogTriggerValue}</button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="font-medium text-black text-center gap-2">
              {dialogTitle}
            </DialogTitle>
          </DialogHeader>
          <div>{DialogBody}</div>
          <DialogFooter className="flex  m-3">
            <button className="bg-black text-white w-50 rounded-sm justify-center items-center">{dialogFooterTitle}</button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AppDialogBox;
