// src/App.js
import React from 'react';
import BudgetTracker from './BudgetTracker';
import './Budget.css';

function Budget() {
    return (
        <div className="App">
            <h1>Monthly Budget Tracker</h1>
            <BudgetTracker />
        </div>
    );
}

export default Budget;
