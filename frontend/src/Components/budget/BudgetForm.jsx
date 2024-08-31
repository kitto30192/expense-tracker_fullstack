// src/components/BudgetForm.js
import React, { useState } from 'react';

const BudgetForm = ({ addBudget }) => {
    const [category, setCategory] = useState('');
    const [amount, setAmount] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (category && amount) {
            addBudget({ category, amount: parseFloat(amount) });
            setCategory('');
            setAmount('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Set Budget</h2>
            <label>
                Category:
                <input
                    type="text"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                />
            </label>
            <label>
                Amount:
                <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                />
            </label>
            <button type="submit">Add Budget</button>
        </form>
    );
};

export default BudgetForm;
