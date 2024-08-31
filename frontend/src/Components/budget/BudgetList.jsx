// src/components/BudgetList.js
import React from 'react';

const BudgetList = ({ budgets, spendings, updateSpending }) => {
    return (
        <div>
            <h2>Budgets</h2>
            {budgets.map((budget) => {
                const spending = spendings[budget.category] || 0;
                const isOverBudget = spending > budget.amount;

                return (
                    <div key={budget.category} style={{ marginBottom: '20px' }}>
                        <h3>{budget.category}</h3>
                        <p>Budget: ${budget.amount.toFixed(2)}</p>
                        <p>Spent: ${spending.toFixed(2)}</p>
                        {isOverBudget && <p style={{ color: 'red' }}>Over Budget!</p>}
                        <input
                            type="number"
                            placeholder="Add spending"
                            onChange={(e) => updateSpending(budget.category, parseFloat(e.target.value))}
                        />
                    </div>
                );
            })}
        </div>
    );
};

export default BudgetList;
