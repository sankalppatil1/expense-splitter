/* eslint-disable @typescript-eslint/no-unused-vars */
import AppDialogBox from "@/components/AppDialogBox";
import DialogBoxBody from "@/components/DialogBoxBody";
import ExpenseList from "@/components/ExpenseList";
import { ReactNode } from "react";

type dialogProps = {
  dialogTitle:string;
  dialogTriggerValue:string;
   dialogBody:ReactNode
   dialogFooterTitle:ReactNode
}

const Dashboard : React.FC<dialogProps> = ({dialogTitle,dialogTriggerValue,dialogBody,dialogFooterTitle})=>{

  dialogTriggerValue='+ Split Bill';
return (
    <div className="width-full flex flex-col">
      <div className="flex w-full justify-center">
        <AppDialogBox
        dialogTriggerValue={dialogTriggerValue}
        dialogTitle={dialogTitle = 'Add Expense'}
        dialogBody={<DialogBoxBody />}
        dialogFooterTitle='Split'
      />
      </div>
      <ExpenseList />
    
    </div>
  );
}
export default Dashboard