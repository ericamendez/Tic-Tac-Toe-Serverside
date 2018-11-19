// DOM SELECTORS
// box is an array with [each element with the class box] console.log(box)
const box = document.querySelectorAll(".box")
const clear = document.querySelector("#clear")
const players = document.querySelector(".describe")
const winnerCon = document.querySelector(".winnerCon")
const result = document.querySelector("#result")

// keeps track of whos turn it is
let turn = 0;
// keeps global track of clicked box index
let cur = null;

// GAME OBJECT
const game = {
  player1: "X",
  player2: "O",
  bot: "O",
  // arrays for every combination of indexes that can give me a win, horizontally, vertically, diagonally
  wins: [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ],
  // A placement to compare the content in the indexes of wins property
  box1: "",
  box2: "",
  box3: "",

  playGame(){
    if(box[cur].textContent == ""){
    // player1 turn=0, player2 turn=1
      if(turn === 0){
        box[cur].textContent = this.player1;
        turn+=1;
      }else if (turn === 1) {
        box[cur].textContent = this.player2;
        turn=0;
      }
    }
    // After each play, check if player won
    this.checkWin();
  },

  checkWin(){
    // checks for all the arrays in the win property to see if any of our boxes has a winning combination
    for(let i = 0; i < this.wins.length; i++){
      // Will let the conditional what content is in the each box, in wins combos
      box1 = box[this.wins[i][0]].textContent
      box2 = box[this.wins[i][1]].textContent
      box3 = box[this.wins[i][2]].textContent

      // conditions for winning
      if(box1 == "X" && box2 == "X" && box3 == "X"){
        players.style.display = "none";
        result.textContent = "PLAYER 1 WINS!"
        winnerCon.style.display = "grid";
      }else if(box1 == "O" && box2 == "O" && box3 == "O"){
        players.style.display = "none";
        result.textContent = "PLAYER 2 WINS!"
        winnerCon.style.display = "grid";
      }
    }
  },
}

// CLICK EVENTS (for each box, and for clearing all boxes)
for(let i = 0; i < box.length; i++){
  box[i].addEventListener("click", function(e){
    e.preventDefault();
    cur = i;
    game.playGame();
  });
}

clear.addEventListener("click", function(){
  for(let i = 0; i < box.length; i++){
    box[i].textContent = "";
  }
  players.style.display = "grid";
  winnerCon.style.display = "none";
  turn=0;
})
