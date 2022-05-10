let count = 0;
while (true) {
  const userInput = prompt("Gues the Secret Password");
  count++;
  if (userInput === "" || userInput === null || isNaN(userInput)) {
    alert("Put Number");
  } else if (userInput < secretPassword) {
    alert("More");
  } else if (userInput > secretPassword) {
    alert("Less");
  } else {
    alert("Well done");
    alert(usersTry + count);
    break;
  }
}
