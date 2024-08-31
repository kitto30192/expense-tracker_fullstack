// src/components/BudgetTracker.js
import React, { useState } from 'react';
import BudgetForm from './BudgetForm';
import BudgetList from './BudgetList';

const BudgetTracker = () => {
    const [budgets, setBudgets] = useState([]);
    const [spendings, setSpendings] = useState({});

    const addBudget = (budget) => {
        setBudgets([...budgets, budget]);
    };

    const updateSpending = (category, amount) => {
        setSpendings((prevSpendings) => {
            const newSpending = (prevSpendings[category] || 0) + amount;
            const isOverBudget = budgets.find((b) => b.category === category)?.amount < newSpending;
            if (isOverBudget) {
                alert(`You have exceeded your budget for ${category}!`);
                // You can also use an email service API here to send an email.
            }
            return {
                ...prevSpendings,
                [category]: newSpending
            };
        });
    };

    return (
        <div>
            <BudgetForm addBudget={addBudget} />
            <BudgetList budgets={budgets} spendings={spendings} updateSpending={updateSpending} />
        </div>
    );
};

export default BudgetTracker;
