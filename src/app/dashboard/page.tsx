/* eslint-disable @typescript-eslint/no-unused-vars */
import AppDialogBox from "@/components/AppDialogBox";
import DialogBoxBody from "@/components/DialogBoxBody";
import ExpenseList from "@/components/ExpenseList";
import { ReactNode } from "react";
import AppDialogTrigger from "@/components/AppDialogTrigger";
import AppDialogFooter from "@/components/AppDialogFooter";

type dialogProps = {
  dialogTitle:string;
  dialogTriggerValue:ReactNode;
   dialogBody:ReactNode;
   dialogFooter:ReactNode;
}

const Dashboard : React.FC<dialogProps> = ({dialogTitle='Add Expense'})=>{

  
return (
    <div className="width-full flex flex-col">
      <div className="flex w-full justify-center">
        <AppDialogBox
        dialogTriggerValue={<AppDialogTrigger/>}
        dialogTitle={dialogTitle}
        dialogBody={<DialogBoxBody />}
        dialogFooter={<AppDialogFooter/>}
      />
      </div>
      <ExpenseList />
    
    </div>
  );
}
export default Dashboard