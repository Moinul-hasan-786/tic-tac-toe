let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let message = document.querySelector(".message-container");
let msg = document.querySelector("#msg");
let turnX = true;
let cnt = 0;
const winpatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

boxes.forEach((box, index) => {
  box.addEventListener("click", () => {
    
    if (turnX) {
      box.innerText = "X";
      box.classList.add("X-color");
    } else {
        box.innerText = "O";
        box.classList.add("O-color");
    }
    box.disabled = true;
    turnX = !turnX;
    cnt++;
    let iswinner = checkWinner();
    if (cnt == 9 && !iswinner) {
      msg.innerText = "Oops! Game was a Draw 🤝";
      message.classList.remove("hide");
      disableAllboxes();
    }
  });
});
const checkWinner = () => {
  for (let pattern of winpatterns) {
    let pat1 = boxes[pattern[0]];
    let pat2 = boxes[pattern[1]];
    let pat3 = boxes[pattern[2]];
    let ch1 = pat1.innerText, ch2 = pat2.innerText, ch3 = pat3.innerText;
    if (ch1 != "" && ch2 != "" && ch3 != "") {
      if (ch1 == ch2 && ch2 == ch3) {
        winnerGreeting(ch1);
        disableAllboxes();
        return true;
      }
    }
  }
  return false;
};

const disableAllboxes = () => {
  boxes.forEach((box) => {
    box.disabled = true;
  });
};

resetBtn.addEventListener("click", () => {
  turnX = true;
  cnt = 0;
  
  boxes.forEach((box) => {
    box.innerText = "";
    box.disabled = false;
    box.classList.remove("X-color" , "O-color");
  });
  message.classList.add("hide");
});

const winnerGreeting = (winner) => {
  msg.innerText = `Hurray! Player with ${winner} win the Game!!!`;
  message.classList.remove("hide");
};
