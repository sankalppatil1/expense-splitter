import React from 'react'

const DialogBoxBody = () => {
  return (
    <div className='flex flex-col justify-center gap-5 w-full h-full items-center'>
    <input type="text" placeholder='Description' className='w-xs h-m border-1 border-black rounded-md placeholder:text-center'/>
    <div className='flex items-center justify-center gap-5'>
        <select name="currency" id="currency" className='border-1 border-black rounded-md w-10'>
            <option value="$">$</option>
            <option value="AED">AED</option>
            <option value="Rupee">Rupee</option>
        </select>
        <input type="text" name="amount" id="amount" placeholder='Amount' className='border-1 border-black rounded-md'/>
    </div>
    <div className='flex gap-5'>
        <select name="paid-by" id="" className='border-1 border-black rounded-md' >
            <option value="you">You</option>
            <option value="me">Me</option>
        </select>
        <select name="bill-split" id="" className='border-1 border-black rounded-md'>
            <option value="split equally">Split Equally</option>
            <option value="you owe me">You Owe Me</option>
            <option value="i owe u">I Owe You</option>
        </select>
    </div>
    
</div>
  )
}

export default DialogBoxBody