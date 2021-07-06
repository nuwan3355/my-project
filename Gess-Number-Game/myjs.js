document.getElementById("btn").addEventListener("click", myFunc);
function myFunc() {
  var aaa = Math.floor(Math.random() * 10 + 1);
  var bb = document.getElementById("guess");
  if (bb.value > 10 || bb.value == "") {
    alert("Number is invalid");
  } else if (bb.value == aaa) {
    alert("......CONGRADULATIONS!!!..... \n  You Guessed my number");
  } else {
    alert("You Loss...... \n " + "I thought number : " + aaa);
  }
}
