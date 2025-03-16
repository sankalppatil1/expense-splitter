import React from "react";
import { Button } from "./ui/button";

const AppDialogFooter = () => {
  return (
    <div>
      {/* <button className="bg-black text-white w-20 h-8 rounded-xl justify-center items-center mt-10 hover:cursor-pointer">
        Split
      </button> */}
      <Button variant={"secondary"}>Split</Button>
    </div>
  );
};

export default AppDialogFooter;
