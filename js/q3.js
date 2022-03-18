// Create a table with 12 rows

const tblElement = document.createElement("table");

const num1 = Number(prompt("Number 1: "));
const num2 = Number(prompt("Number 2: "));

for ( i = num1; i <= num2; i++) {
  const rowElement = document.createElement("tr");
  const tdElement = document.createElement("td");
  tdElement.innerHTML = i;
  if (i % 4 === 0) {
    tdElement.classList.add("yellow");
  }
  rowElement.appendChild(tdElement);
  tblElement.append(rowElement);
}
document.getElementById("output").appendChild(tblElement);