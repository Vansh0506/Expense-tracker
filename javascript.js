const form = document.getElementById('expense-form');
const descriptionInput = document.getElementById('description');
const amountInput = document.getElementById('amount');
const expenseList = document.getElementById('expense-list');
const totalDisplay = document.getElementById('total');
let expenses = [];

form.addEventListener('submit', e => {
    e.preventDefault();
    const description = descriptionInput.value.trim();
    const amount = parseFloat(amountInput.value);
    
    if (description && amount > 0) {
        const expense = { description, amount };
        expenses.push(expense);
        updateUI();
        form.reset();
    }
});

function updateUI() {
    expenseList.innerHTML = ''; // Clear the current list
    expenses.forEach(expense => {
        const div = document.createElement('div');
        div.classList.add('expense-item');
        
        const descSpan = document.createElement('span');
        descSpan.classList.add('expense-description');
        descSpan.textContent = expense.description;
        
        const amountSpan = document.createElement('span');
        amountSpan.classList.add('expense-amount');
        amountSpan.textContent = `$${expense.amount.toFixed(2)}`;
        
        div.appendChild(descSpan);
        div.appendChild(amountSpan);
        expenseList.appendChild(div);
    });
    
    const total = expenses.reduce((sum, exp) => sum + exp.amount, 0);
    totalDisplay.textContent = `Total: $${total.toFixed(2)}`;
}
