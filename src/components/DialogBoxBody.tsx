import React from 'react'

const DialogBoxBody = () => {
  return (
    <div className=' font-light font-montserrat flex flex-col justify-center gap-5 w-full h-full items-center rounded-9xl mt-3'>
    <input type="text" placeholder='Description' className='font-light font-montserrat w-full h-m border-1 border-black rounded-md placeholder:text-center text-foreground text-xl'/>
    <div className='flex items-center justify-center gap-5 w-full'>
        <select name="currency" id="currency" className='border-1 border-black rounded-lg w-13 '>
            <option value="$">$</option>
            <option value="AED">AED</option>
            <option value="Rupee">Rupee</option>
        </select>
        <input type="text" name="amount" id="amount" placeholder='Amount' className=' font-light font-montserrat text-foreground text-l placeholder:text-center pr-0.4
        w-auto border-1 border-black rounded-md'/>
    </div>
    <div className='flex gap-5 w-full'>
        <select name="paid-by" id="" className='border-1 border-black rounded-lg w-20' >
        <option value="you">Paid by</option>
            <option value="you">You</option>
            <option value="me">Me</option>
        </select>
        <select name="bill-split" id="" className='border-1 border-black rounded-lg w-40 text-l text-center'>
            <option value="split equally">Equally</option>
            <option value="you owe me">You Owe Me</option>
            <option value="i owe u">I Owe You</option>
        </select>
    </div>
    <button className="bg-black text-white w-20 h-8 rounded-xl justify-center items-center mt-10 hover:cursor-pointer">Split</button>
    
</div>
  )
}

export default DialogBoxBody