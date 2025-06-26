//js code st
let balance = 0;
const balanceDisply = document.querySelector("#balance");
const amountInput = document.querySelector("#amount");
const historyList = document.querySelector("#history")
//vrb selected

//function diclar 
function updataBalance(){
    balanceDisply.innerHTML = `$${balance}`;
}

function addTransation(type, amount){
    const li = document.createElement("li");
    li.className = 'list-group-item';
    const date = new Date().toLocaleString();
       li.textContent = `${date} - ${type} - $${amount} (Balance: $${balance})`;
       historyList.prepend(li);
}

document.getElementById("#addMoney").addEventListener("click", ()=>{
    const amount = parseFloat(amountInput.value);
    if(isNaN(amount) || amount <=0){
        alert("Please enter a valid positive amount.");
        return;
    }
    balance += amount;
    updataBalance();
    addTransation("Add", amount);
    amountInput.value = '';
});


document.querySelector("#withdrawMoney").addEventListener("click", ()=>{
  const amount = parseFloat(amountInput.value);
  if(isNaN(amount) || amount <= 0){
    alert("Please enter a valid positive amount.")
    return;
  }
  if(amount > balance){
    alert("Insufficient balance.");
    return;
  }
  balance -= amount;
   updataBalance();
   addTransation("Flower Bank App", amount);
   amountInput.value = '';
})