let value = "";

// Clears display and value
function clearDisplay() {
  document.getElementById("display").innerHTML = "";
  value = "";
}

// Shows output on the display
let showDisplay = (output) => {
  document.getElementById("display").innerHTML = output;
};

// Adds value from buttons
const handleAdd = (param) => {
  value += param;
  showDisplay(value);
};

// Evaluates the expression
const handleEqual = () => {
  try {
    let evaluation = eval(value);
    showDisplay(evaluation);
    value = evaluation.toString();
  } catch (error) {
    showDisplay("Error");
    value = "";
  }
};
