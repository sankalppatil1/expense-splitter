"use client";
import React from "react";
import data from "../locale/data.json";

const DialogBoxBody = () => {
  console.log(data);
  return (
    <div className=" font-light font-montserrat flex flex-col justify-center gap-5 w-full h-full items-center rounded-9xl mt-3">
      <input
        type="text"
        placeholder="Description"
        className="font-medium font-montserrat w-full h-m border-1 border-black rounded-md placeholder:text-center text-foreground text-l"
      />
      <div className="flex items-center justify-center gap-5 w-full">
        <select
          name="currency"
          id="currency"
          className="border-1 border-black rounded-lg w-13 "
        >
          <option value="$">{data["curreny.dollar"]}</option>
          <option value="AED">{data["curreny.aed"]}</option>
          <option value="Rupee">{data["curreny.rupee"]}</option>
        </select>
        <input
          type="text"
          name="amount"
          id="amount"
          placeholder="Amount"
          className=" font-light font-montserrat text-foreground text-l placeholder:text-center pr-0.4
        w-auto border-1 border-black rounded-md"
        />
      </div>
      <div className="flex gap-5 w-full">
        <select
          name="paid-by"
          id=""
          className="border-1 border-black rounded-lg w-20"
        >
          <option value="you">{data.paidby}</option>
          <option value="you">{data["paidby.you"]}</option>
          <option value="me">{data["paidby.me"]}</option>
        </select>
        <select
          name="bill-split"
          id=""
          className="border-1 border-black rounded-lg w-40 text-l text-center"
        >
          <option value="split equally">{data.splitequally}</option>
          <option value="you owe me">{data["youowe.me"]}</option>
          <option value="i owe u">{data["iowe.you"]}</option>
        </select>
      </div>
    </div>
  );
};

export default DialogBoxBody;
