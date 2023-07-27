let s1 = 0;
let s2 = 0;
let currentPlayer = "player1";
let sL = [ 2, 4, 8,21,28,51,80,72];
let eL = [38,14,31,42,84,67,99,91];
function p1() {
  if (currentPlayer === "player1") {
    let r1 = Math.floor(Math.random() * 6) + 1;
    s1 = s1 + r1;
    let pos = sL.indexOf(s1);
    if (pos !== -1) {
      s1 = eL[pos];
    }
    if (s1 >= 100) {
      alert("Player 1 Wins!");
    } else {
      document.getElementById("t1").innerHTML= s1;
      document.getElementById("r1").innerHTML= r1;
    }
    currentPlayer = "player2";
    document.getElementById("p1-button").disabled = true;
    document.getElementById("p2-button").disabled = false;
  }
}
function p2() {
  if (currentPlayer === "player2") {
    let r2 = Math.floor(Math.random() * 6) + 1;
    s2 = s2 + r2;
    let pos = sL.indexOf(s2);
    if (pos !== -1) {
      s2 = eL[pos];
    }
    if (s2 >= 100) {
      alert("Player 2 Wins!");
    } else {
      document.getElementById("t2").innerHTML= s2;
      document.getElementById("r2").innerHTML= r2;
    }
    currentPlayer = "player1";
    document.getElementById("p2-button").disabled = true;
    document.getElementById("p1-button").disabled = false;
  }
}