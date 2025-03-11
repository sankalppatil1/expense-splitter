/* eslint-disable @typescript-eslint/no-unused-vars */
import AppDialogBox from "@/components/AppDialogBox";
import DialogBoxBody from "@/components/DialogBoxBody";
import ExpenseList from "@/components/ExpenseList";
import { title } from "process";
import { ReactNode } from "react";

type dialogProps = {
  dialogTitle:string;
  dialogTriggerValue:string;
   DialogBody:ReactNode
   dialogFooterTitle:ReactNode
}

const Dashboard : React.FC<dialogProps> = ({dialogTitle,dialogTriggerValue,DialogBody,dialogFooterTitle})=>{

  dialogTriggerValue='Split Bill';
return (
    <div className="width-full flex flex-col">
      <div className="flex w-full justify-center">
        <AppDialogBox
        dialogTriggerValue={dialogTriggerValue}
        dialogTitle={dialogTitle = 'Bill Splitup'}
        DialogBody={<DialogBoxBody />}
        dialogFooterTitle='Split'
      />
      </div>
      <ExpenseList />
    
    </div>
  );
}
export default Dashboard