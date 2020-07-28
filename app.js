/* COUNTDOWN */

// setInterval runs repeatedly, setTimeout runs once.
function countDown(num) {
  setInterval(function() {
    if (num >=0 ) {
      console.log(num);
      num--;
    } else {
      setTimeout(function() {
        console.log('Done!')
        clearTimeout(1); // make sure to add id.
      })
    }
  }, 1000)
}
//countDown(4)

// their solution
/* function countDown(time) {
  let timer = setInterval(function () {
    time--;
    if (time <= 0) {
      clearInterval(timer);
      console.log('DONE!');
    }
    else {
      console.log(time);
    }

  }, 1000)
} */



/* RANDOM GAME */
// 1) select random number on setInterval every 1000 milliseconds
// 2) add 1 to a counter every time a random number is picked
// 3) if number is > .75, stop the timer and console log the counter
function randomGame() {
  let randomNum = Math.random();
  let counter = 0;
  let num;
  setInterval(function() {
    num = randomNum;
    console.log(num)
    counter++;
    if (num > .75) {
      clearInterval(1);
      console.log(`It took ${counter} tries.`);
    }
  }, 1000)
}
//randomGame();

//Rewrite
function randomGame() {
  let num;
  let counter = 0;
  setInterval(function() {
    num = Math.random();
    console.log(num);
    counter++;
    if (num > .75) {
      clearInterval(1);
      console.log(`It took ${counter} tries`);
    }
  }, 1000)
}
randomGame();


// their solution
// function randomGame() {
//   let num;
//   let times = 0;
//   let timer = setInterval(function () {
//     num = Math.random();
//     times++
//     if (num > .75) {
//       clearInterval(timer);
//       console.log("It took " + times + " try/tries.");
//     }
//   }, 1000)
// }
// randomGame();

