var myGamePiece;
var myBackground;
var myObstacles = [];
var myScore;
var myPauseButton = document.getElementById("PauseButton");
var myMenuPause = document.getElementById("menuPause");
var myOpsiPause = document.getElementById("btnOpsiPause");
var btnResume = document.getElementById("btnresume");
var btnRestart = document.getElementById("btnrestart");
var btnExit = document.getElementById("btnexit");
var canvas = document.getElementById("canvas");
var GameOver = document.getElementById("GameOver");
var ctx = canvas.getContext("2d");

// LOGIKA back button
// function Back() {
//   document.querySelector("#canvas");
//   canvas.classList.remove("canvas");
// }

// --------------start level 3-------------
// Gabisa di firefox
const mainLagi = () => {
  ctx.reset();
};

// const back = () => {
//   if (skin.style.display == "flex") {
//     btn.style.display = "flex";
//     skin.style.display = "none";
//   } else {
//     btn.style.display = "none";
//     skin.style.display = "flex";
//   }
// };

function GameOverGame() {
  if (GameOver.style.visibility == "hidden") {
    GameOver.style.visibility = "visible";
  }
}

function HideResumeButton() {
  if (btnResume.style.visibility == "visible") {
    btnResume.style.visibility = "hidden";
  }
}

function HideRestartButton() {
  if (btnRestart.style.visibility == "visible") {
    btnRestart.style.visibility = "hidden";
  }
}

function HideExitButton() {
  if (btnExit.style.visibility == "visible") {
    btnExit.style.visibility = "hidden";
  }
}

function PauseButton() {
  myGameAreaLevelOne.stop();
  myMenuPause.style.visibility = "visible";
  btnResume.style.visibility = "visible";
  btnRestart.style.visibility = "visible";
  btnExit.style.visibility = "visible";
}

function ResumeButton() {
  myMenuPause.style.visibility = "hidden";
  HideResumeButton();
  // HideRestartButton();
  // HideExitButton();
  myGameAreaLevelOne.start();
}

let LevelOne;
function RestartButton() {
  // if (LevelOne) clearInterval(LevelOne);
  // LevelOne = setInterval(updateLevelOne, 20);
  startGame();
  myGameAreaLevelOne.start();
  myMenuPause.style.visibility = "hidden";
  HideResumeButton();
  HideRestartButton();
  HideExitButton();
}

function PlayLevelThree() {
  var btnplay = document.getElementById("Container-Level");
  if (btnplay.style.display == "none") {
    btnplay.style.display = "block";
  } else {
    btnplay.style.display = "none";
  }
  startGame();
  myGameAreaLevelThree.start();
  myPauseButton.style.visibility = "visible";
}
// -------------- start level 3 ----------------------------------

// -------------- start level 2-----------------------------------
function PlayLevelTwo() {
  var btnplay = document.getElementById("Container-Level");
  if (btnplay.style.display == "none") {
    btnplay.style.display = "block";
  } else {
    btnplay.style.display = "none";
  }
  startGame();
  myGameAreaLevelTwo.start();
  myPauseButton.style.visibility = "visible";
}
// ------------------- end level 2 ---------------------------------

// ------------- start level 1-----------------------------------

function PlayLevelOne() {
  var btnplay = document.getElementById("Container-Level");
  if (btnplay.style.display == "none") {
    btnplay.style.display = "block";
  } else {
    btnplay.style.display = "none";
  }
  startGame();
  myGameAreaLevelOne.start();
  myPauseButton.style.visibility = "visible";
}
// ------------------------ end start 1 ----------------------------

function startGame() {
  myGamePiece = new component(80, 90, "NinjaRevisi.png", 10, 400, "image");
  myBackground = new component(
    1440,
    720,
    "BackgroundRevisi.png",
    0,
    0,
    "image"
  );
  myGamePiece.gravity = 0.4;
  myScore = new component("30px", "Consolas", "black", 280, 40, "text");
}

// ------------------------ start level 3 -------------------------------
var myGameAreaLevelThree = {
  canvas: document.getElementById("canvas"),
  start: function () {
    this.context = this.canvas.getContext("2d");

    this.frameNo = 0;
    this.interval = setInterval(updateLevelThree, 20);

    window.addEventListener("keydown", function (e) {
      myGameAreaLevelThree.key = e.keyCode;
    });
    window.addEventListener("keyup", function (e) {
      myGameAreaLevelThree.key = false;
    });
  },
  clear: function () {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  },
  stop: function () {
    clearInterval(this.interval);
  },
};
// -------------------------- end level 3 -------------------------------

// --------------- start level 2 ---------------------------------------
var myGameAreaLevelTwo = {
  canvas: document.getElementById("canvas"),
  start: function () {
    this.context = this.canvas.getContext("2d");

    this.frameNo = 0;
    this.interval = setInterval(updateLevelTwo, 20);

    window.addEventListener("keydown", function (e) {
      myGameAreaLevelTwo.key = e.keyCode;
    });
    window.addEventListener("keyup", function (e) {
      myGameAreaLevelTwo.key = false;
    });
  },
  clear: function () {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  },
  stop: function () {
    clearInterval(this.interval);
  },
};
// ----------------------- end level 2 ---------------------------------

// -------------- start level 1 ----------------------------------------
var myGameAreaLevelOne = {
  canvas: document.getElementById("canvas"),
  start: function () {
    this.context = this.canvas.getContext("2d");

    this.frameNo = 0;
    this.interval = setInterval(updateLevelOne, 20);

    window.addEventListener("keydown", function (e) {
      myGameAreaLevelOne.key = e.keyCode;
    });
    window.addEventListener("keyup", function (e) {
      myGameAreaLevelOne.key = false;
    });
  },
  clear: function () {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  },
  stop: function () {
    clearInterval(this.interval);
  },
};
// --------------------- end level 1 ------------------------------

function component(width, height, color, x, y, type) {
  this.type = type;
  if (type == "image") {
    this.image = new Image();
    this.image.src = color;
  }
  this.score = 0;
  this.width = width;
  this.height = height;
  this.speedX = 0;
  this.speedY = 0;
  this.x = x;
  this.y = y;
  this.gravity = 1;
  this.gravitySpeed = 0;

  // ------------------------------- start level 3 -----------------------------
  this.updateThree = function () {
    ctx = myGameAreaLevelThree.context;
    if (this.type == "text") {
      ctx.font = this.width + " " + this.height;
      ctx.fillStyle = color;
      ctx.fillText(this.text, this.x, this.y);
    } else {
      ctx = myGameAreaLevelThree.context;
      if (type == "image") {
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
      } else {
        ctx.fillStyle = color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
      }
    }
  };
  // -------------------------------- end level 3 ------------------------------

  // ------------ startlevel 2 ------------------------------------------------
  this.updateTwo = function () {
    ctx = myGameAreaLevelTwo.context;
    if (this.type == "text") {
      ctx.font = this.width + " " + this.height;
      ctx.fillStyle = color;
      ctx.fillText(this.text, this.x, this.y);
    } else {
      ctx = myGameAreaLevelTwo.context;
      if (type == "image") {
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
      } else {
        ctx.fillStyle = color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
      }
    }
  };
  // ------------------------------------ end level 2 ---------------------------

  // ---------------------------------- start level 1 ---------------------------
  this.updateOne = function () {
    ctx = myGameAreaLevelOne.context;
    if (this.type == "text") {
      ctx.font = this.width + " " + this.height;
      ctx.fillStyle = color;
      ctx.fillText(this.text, this.x, this.y);
    } else {
      ctx = myGameAreaLevelOne.context;
      if (type == "image") {
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
      } else {
        ctx.fillStyle = color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
      }
    }
  };
  // ------------------------------------- end level 1 -----------------------------
  this.newPos = function () {
    this.gravitySpeed += this.gravity;
    this.x += this.speedX;
    this.y += this.speedY + this.gravitySpeed;
    this.x += this.speedX;
    this.y += this.speedY;
    this.hitBottom();
    this.hitTop();
  };
  this.hitBottom = function () {
    var rockbottom = myGameAreaLevelOne.canvas.height - this.height;
    if (this.y > rockbottom) {
      this.y = rockbottom;
      this.gravitySpeed = 0;
    }
  };
  this.hitTop = function () {
    let objTop = 100 - this.height;
    if (this.y < objTop) {
      this.y = objTop;
    }
  };

  this.crashWith = function (otherobj) {
    var myleft = this.x;
    var myright = this.x + this.width;
    var mytop = this.y;
    var mybottom = this.y + this.height;
    var otherleft = otherobj.x;
    var otherright = otherobj.x + otherobj.width;
    var othertop = otherobj.y;
    var otherbottom = otherobj.y + otherobj.height;
    var crash = true;
    if (
      mybottom < othertop ||
      mytop > otherbottom ||
      myright < otherleft ||
      myleft > otherright
    ) {
      crash = false;
    }
    return crash;
  };
}

// Logika klo ketabrak obstacle
function LoopingObstacleOne() {
  for (i = 0; i < myObstacles.length; i += 1) {
    if (myGamePiece.crashWith(myObstacles[i])) {
      myGameAreaLevelOne.stop();
      alert("You Lose");
      return;
    }
  }
}
function LoopingObstacleTwo() {
  for (j = 0; j < myObstacles.length; j += 1) {
    if (myGamePiece.crashWith(myObstacles[j])) {
      myGameAreaLevelTwo.stop();
      return;
    }
  }
}
function LoopingObstacleThree() {
  for (k = 0; k < myObstacles.length; k += 1) {
    if (myGamePiece.crashWith(myObstacles[k])) {
      myGameAreaLevelThree.stop();
      return;
    }
  }
}

// Logika perulangan untuk obstacle random
function RandomObstacleThree() {
  var x, height, gap, minHeight, maxHeight, minGap, maxGap;
  if (myGameAreaLevelThree.frameNo == 1 || everyintervalThree(150)) {
    x = myGameAreaLevelThree.canvas.width;
    minHeight = 20;
    maxHeight = 70;
    // height = Math.floor(
    //   Math.random() * (maxHeight - minHeight + 1) + minHeight
    // );
    minGap = 50;
    maxGap = 20;
    // gap = Math.floor(Math.random() * (maxGap - minGap + 1) + minGap);

    // //   obstacle atas
    // myObstacles.push(
    //   new component(70, 400, "satu-tombak.png", x + 100, -200, "image")
    // );
    // myObstacles.push(
    //   new component(70, 300, "satu-tombak.png", x + 300, -200, "image")
    // );

    //   obstacle bawah
    myObstacles.push(new component(60, 300, "green", x, 370));
  }
}

function RandomObstacleTwo() {
  var x, height, gap, minHeight, maxHeight, minGap, maxGap;
  if (myGameAreaLevelTwo.frameNo == 1 || everyintervalTwo(150)) {
    x = myGameAreaLevelTwo.canvas.width;
    minHeight = 20;
    maxHeight = 70;
    // height = Math.floor(
    //   Math.random() * (maxHeight - minHeight + 1) + minHeight
    // );
    minGap = 50;
    maxGap = 20;
    // gap = Math.floor(Math.random() * (maxGap - minGap + 1) + minGap);

    // //   obstacle atas
    myObstacles.push(new component(70, 400, "green", x + 100, -200));
    myObstacles.push(new component(70, 300, "green", x + 300, -200));

    //   obstacle bawah
    myObstacles.push(new component(60, 300, "green", x, 370));
  }
}

function RandomObstacleOne() {
  var x, height, gap, minHeight, maxHeight, minGap, maxGap;
  if (myGameAreaLevelOne.frameNo == 1 || everyintervalOne(150)) {
    x = myGameAreaLevelOne.canvas.width;
    minHeight = 20;
    maxHeight = 70;
    // height = Math.floor(
    //   Math.random() * (maxHeight - minHeight + 1) + minHeight
    // );
    minGap = 50;
    maxGap = 20;
    // gap = Math.floor(Math.random() * (maxGap - minGap + 1) + minGap);

    // //   obstacle atas
    myObstacles.push(
      new component(70, 100, "NewObstacleAtas.png", x + 100, -200, "image")
    );
    myObstacles.push(
      new component(70, 300, "NewObstacleAtas.png", x + 300, -200, "image")
    );

    //   obstacle bawah
    myObstacles.push(
      new component(60, 300, "NewObstacleBawah.png", x, 370, "image")
    );
  }
}

// untuk mengatur kecepatan obstacle
function SpeedObstacleOne() {
  for (var i = 0; i < myObstacles.length; i += 1) {
    myObstacles[i].x += -10; //atur kecepatan obstacle
    myObstacles[i].updateOne();
  }
}
function SpeedObstacleTwo() {
  for (var j = 0; j < myObstacles.length; j += 1) {
    myObstacles[j].x += -10; //atur kecepatan obstacle
    myObstacles[j].updateTwo();
  }
}
function SpeedObstacleThree() {
  for (var k = 0; k < myObstacles.length; k += 1) {
    myObstacles[k].x += -10; //atur kecepatan obstacle
    myObstacles[k].updateThree();
  }
}

// -------------------------start level 3 --------------------
function updateLevelThree() {
  LoopingObstacleThree();
  myGameAreaLevelThree.clear();
  // untuk menampilkan background
  myBackground.newPos();
  myBackground.updateThree();
  // logika karakter lompat
  myGamePiece.speedX = 0;
  myGamePiece.speedY = 0;
  if (
    (myGameAreaLevelThree.key && myGameAreaLevelThree.key === 87) ||
    (myGameAreaLevelThree.key && myGameAreaLevelThree.key === 38)
  ) {
    myGamePiece.gravitySpeed = -10;
  }

  myGameAreaLevelThree.frameNo += 1;
  RandomObstacleThree();
  SpeedObstacleThree();
  myScore.text = "SCORE: " + myObstacles.length;
  myScore.updateThree();
  myGamePiece.newPos();
  myGamePiece.updateThree();
}
//------------------------- end level 3 ---------------------

// ---------------- start level 2 -------------------------
function updateLevelTwo() {
  LoopingObstacleTwo();
  myGameAreaLevelTwo.clear();
  // untuk menampilkan background
  myBackground.newPos();
  myBackground.updateTwo();
  // logika karakter lompat
  myGamePiece.speedX = 0;
  myGamePiece.speedY = 0;
  if (
    (myGameAreaLevelTwo.key && myGameAreaLevelTwo.key === 87) ||
    (myGameAreaLevelTwo.key && myGameAreaLevelTwo.key === 38)
  ) {
    myGamePiece.gravitySpeed = -10;
  }

  myGameAreaLevelTwo.frameNo += 1;
  RandomObstacleTwo();
  SpeedObstacleTwo();
  myScore.text = "SCORE: " + myObstacles.length;
  myScore.updateTwo();
  myGamePiece.newPos();
  myGamePiece.updateTwo();
}
// ------------------------------ end level 2 -------------------

// -------------- start levle 1 ---------------------------------
function updateLevelOne() {
  LoopingObstacleOne();
  myGameAreaLevelOne.clear();
  // untuk menampilkan background
  myBackground.newPos();
  myBackground.updateOne();
  // logika karakter lompat
  myGamePiece.speedX = 0;
  myGamePiece.speedY = 0;
  if (
    (myGameAreaLevelOne.key && myGameAreaLevelOne.key === 87) ||
    (myGameAreaLevelOne.key && myGameAreaLevelOne.key === 38)
  ) {
    myGamePiece.gravitySpeed = -10;
  }

  myGameAreaLevelOne.frameNo += 1;
  RandomObstacleOne();
  SpeedObstacleOne();
  let scoreObstacle = myObstacles.length - 1;
  myScore.text = "SCORE: " + scoreObstacle;
  myScore.updateOne();
  myGamePiece.newPos();
  myGamePiece.updateOne();

  if (myScore.text == "SCORE: 100") {
    alert("finish");
  }
}
// ------------------------ end level 1 --------------------------

let finish = 6;

function everyintervalOne(n) {
  if ((myGameAreaLevelOne.frameNo / n) % 1 == 0) {
    return true;
  }
  return false;
}
function everyintervalTwo(n) {
  if ((myGameAreaLevelTwo.frameNo / n) % 1 == 0) {
    return true;
  }
  return false;
}

function everyintervalThree(n) {
  if ((myGameAreaLevelThree.frameNo / n) % 1 == 0) {
    return true;
  }
  return false;
}

function accelerate(n) {
  myGamePiece.gravity = n;
}
