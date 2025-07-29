// Student name
let studentName = () => {
  return document.getElementById("studentName").value;
};

let marks = [];

// Subject marks
let marksEnglish = marks.push(document.getElementById("marksEnglish").value);

let marksMath = () => {
  return document.getElementById("marksMath").value;
};
let marksScience = () => {
  return document.getElementById("marksScience").value;
};

function calculateResult() {
  console.log("marks :>> ", marks);
}
