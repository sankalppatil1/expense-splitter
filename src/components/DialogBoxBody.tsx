import React from 'react'
import data from '../assests/data'

const DialogBoxBody = () => {
  return (
    <div className=' font-light font-montserrat flex flex-col justify-center gap-5 w-full h-full items-center rounded-9xl mt-3'>
    <input type="text" placeholder='Description' className='font-light font-montserrat w-full h-m border-1 border-black rounded-md placeholder:text-center text-foreground text-xl'/>
    <div className='flex items-center justify-center gap-5 w-full'>
        <select name="currency" id="currency" className='border-1 border-black rounded-lg w-13 '>
            <option value="$">{data.currenyDollar}</option>
            <option value="AED">{data.currenyAED}</option>
            <option value="Rupee">{data.currenyRuppe}</option>
        </select>
        <input type="text" name="amount" id="amount" placeholder='Amount' className=' font-light font-montserrat text-foreground text-l placeholder:text-center pr-0.4
        w-auto border-1 border-black rounded-md'/>
    </div>
    <div className='flex gap-5 w-full'>
        <select name="paid-by" id="" className='border-1 border-black rounded-lg w-20' >
        <option value="you">{data.paidBy}</option>
            <option value="you">{data.paidByYou}</option>
            <option value="me">{data.paidByMe}</option>
        </select>
        <select name="bill-split" id="" className='border-1 border-black rounded-lg w-40 text-l text-center'>
            <option value="split equally">{data.splitEqually}</option>
            <option value="you owe me">{data.youOweMe}</option>
            <option value="i owe u">{data.iOweYou}</option>
        </select>
    </div>
   
    
</div>
  )
}

export default DialogBoxBody