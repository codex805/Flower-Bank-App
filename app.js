let balance = 0;

//js code st
const balanceDisplay = document.querySelector("#balance");
const amountInput = document.querySelector("#amount");
const historyList = document.querySelector("#history");


//function diclar 
function updateBalance() {
    balanceDisplay.innerHTML = `$${balance}`;
}

// Add list iteams
function addTransaction(type, amount) {
    const li = document.createElement("li");
    li.className = 'list-group-item';
    const date = new Date().toLocaleString();
    li.textContent = `${date} - ${type} - $${amount} (Balance: $${balance})`;
    historyList.prepend(li);
}

// add money button
document.querySelector("#addMoney").addEventListener("click", () => {
    const amount = parseFloat(amountInput.value);
    if (isNaN(amount) || amount <= 0) {
        alert("Please enter a valid positive amount.");
        return;
    }
    balance += amount;
    updateBalance();
    addTransaction("Add", amount);
    amountInput.value = '';
});

// Withdraw Money 
document.querySelector("#withdrawMoney").addEventListener("click", () => {
    const amount = parseFloat(amountInput.value);
    if (isNaN(amount) || amount <= 0) {
        alert("Please enter a valid positive amount.");
        return;
    }
    if (amount > balance) {
        alert("Insufficient balance.");
        return;
    }
    balance -= amount;
    updateBalance();
    addTransaction("Withdraw", amount);
    amountInput.value = '';
});
