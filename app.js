  let userScore = 0
 let compScore = 0

 let choices = document.querySelectorAll(".choice")
 let msg = document.querySelector("#msg")
 let userScoreBoard = document.querySelector("#user-score")
 let compScoreBoard = document.querySelector("#comp-score")

let genCompChoice = () => {
   let options = ["rock","paper","scissors"]
   let randomIdx = Math.floor(Math.random() * 3)
   return options[randomIdx]

}

let drawGame  = () => { 
      msg.innerText = "Game was draw Play again 😐" 
      msg.style.backgroundColor = "#081b31" 


}

let showWinner = (userWin ,userChoice ,compChoice) =>{
   if(userWin){
       userScore++;
       userScoreBoard.innerText = userScore
      msg.innerText = `You win! your ${userChoice} beats ${compChoice} 😎` 
      msg.style.backgroundColor = "green" 
      
   }
   else{
       compScore++;
       compScoreBoard.innerText = compScore
      msg.innerText =   `You lose. ${compChoice} beats  your ${userChoice} 😔`
      msg.style.backgroundColor = "red" 
   }
}


let playGame = (userChoice)=>{ 
   // computer choice
   let compChoice = genCompChoice(); 

    if (userChoice === compChoice) {
  // draw
  drawGame();
} else {
  let userWin = true;

  if (userChoice === "rock") {
    // scissor vs paper
    userWin = compChoice === "paper" ? false : true;
  } else if (userChoice === "paper") {
    // paper vs rock
    userWin = compChoice === "scissors" ? false : true;
  } 
  else {  userWin = compChoice === "rock" ? false : true;
}
showWinner(userWin ,userChoice , compChoice)

}
}
 choices.forEach((choice)=>{
   choice.addEventListener("click",()=>{
      let userChoice = choice.getAttribute("id")
      // console.log("clicked", userChoice)
      playGame(userChoice)
   })
 }) 
