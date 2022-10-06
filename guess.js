let userName = prompt("Enter Your Username", "kingmusab");
let range1 = 1;
let range2 = 2;
let stage = 1;
let point = 0;
// let predict = null;
// let answer = null;

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  let answer = Math.floor(Math.random() * (max - min + 1) + min);
  return answer;
}
function userInput() {
  let predict = prompt(`Enter a guessed number between 1 and ${range2} :`);
  return predict;
}
do {
  console.log(`Your Point = ${point}`);
  let predict = userInput();
  let answer = getRandomIntInclusive(range1, range2);
  console.log(predict);
  console.log(answer);
  if (predict == answer) {
    stage++;
    range2++;
    point++;
    console.log(`${userName} guessed right!!!, stage ${stage}`)
  } else console.log("try Again")
  // } else if (predict !== answer){
  //     console.log("Do you want to Try Again");

  //   let option = prompt("Type 1 to try again or anyother number to stop", "1 or other");
  //   if(option == 1){
  //     continue;
  //   } else break;
  // }
} while (stage > 1);
console.log("Game Over");