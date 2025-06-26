//js code st
let balance = 0;
const balanceDisply = document.getElementById("#balance");
const amountInput = document.querySelector("#amount");
const historyList = document.querySelector("#history")
//vrb selected

//function diclar 
function updataBalance(){
    balanceDisply.innerHTML = `$${balance}`;
}

function addTransation(type, amount){
    const li = document.createElement("li");
}