let count = 0;
while (true) {
  const userInput = prompt("Gues the Secret Password");
  count++;
  if (userInput === "" || userInput === null || isNaN(userInput)) {
    alert("Put Number");
  }
  if (userInput === secretPassword) {
    alert("Well done");
    alert(count + usersTry);
    break;
  } else if (userInput < secretPassword) {
    alert("More");
  } else if (userInput > secretPassword) {
    alert("Less");
  } else {
    alert(usersTry + count);
  }
}
