'use client'
import React from 'react'
import { Button } from './ui/button'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
{}
function ListItem({ amount, name}: { name: string, amount: number}) {



    return (
        <li className="py-2 flex justify-between width-full">
            <div className='flex gap-x-2'>
                <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>{name[0].toUpperCase() }</AvatarFallback>
                </Avatar>
                <div className='flex gap-x-2 flex-col'>
                    <p>{name}</p>
                    <p>{amount}</p>
                </div>
            </div>
            <div className='flex gap-x-2'>
                <Button variant={"outline"} type="button">Click me</Button>
                <Button variant={"secondary"} type="button">Click me</Button>
            </div>
        </li>
    )
}

export default ListItem