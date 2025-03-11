'use client'
import React from 'react';
import ListItem from './ListItem';
import AppDialogBox from './AppDialogBox';
const expenses = [
    { id: 1, name: 'John Doe', amount: 50 },
    { id: 2, name: 'John Doe', amount: 75 },
    { id: 3, name: 'John Doe', amount: 500 },
];

const ExpenseList: React.FC = () => {

    const handleClick = () =>{
        <AppDialogBox />
    }

    return (
        <ul className="list-none p-5 rounded-lg">
            {expenses.map((expense, index) => (
                <React.Fragment key={expense.id}>
                    <ListItem name={expense.name} amount={expense.amount} handleClick={handleClick}/>
                    {index < expenses.length - 1 && <hr className="my-2" />}
                </React.Fragment>
            ))}
        </ul>
    );
};

export default ExpenseList;
