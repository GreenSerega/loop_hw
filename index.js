for (let i = 1; i <= MaxTry; i++) {
  const UserInput = prompt("Gues the Secret Password", "**");
  if (isNaN(UserInput)) {
    alert("Put correct Password");
  } else if (UserInput < SecretPassword) {
    alert("More");
  } else if (UserInput > SecretPassword) {
    alert("Less");
  } else if (UserInput === SecretPassword) {
    alert("true = " + i);
    alert("Well done");
    break;
  }
}
