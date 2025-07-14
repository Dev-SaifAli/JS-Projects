let expenses = [];

function addExpense() {
  const item = document.getElementById("item").value.trim();

  const amount = parseFloat(document.getElementById("amount").value);

  if (!item || isNaN(amount) || amount <= 0) {
    alert("Please enter a valid item and amount.");
    return;
  }

  expenses.push({ item, amount });
  document.getElementById("item").value = "";
  document.getElementById("amount").value = "";
  renderExpenses();
}

function renderExpenses() {
  let list = "";
  let total = 0;

  expenses.forEach((exp, index) => {
    list += `<p>${index + 1}) ${exp.item} - ${exp.amount} PKR</p>`;
    total += exp.amount;
  });

  document.getElementById("expensesList").innerHTML = list;
  document.getElementById("totalAmount").innerText = total.toFixed(2);
}

function clearExpenses() {
  if (confirm("Are you sure you want to clear all expenses?")) {
    expenses = [];
    renderExpenses();
  }
}
