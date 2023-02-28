var i = 1; // кількість полів //
var s = 1;
var g = 1;
var w = 1;


// var score = 0;

scoreStone = 0;

scoreGold = 0;

scoreWood = 0;
// 0 - bomb
// 1 - gold
// 2 - stone
// 3 - wood


let task1 = [
  1, //gold
  3, // stone
  5, // wood
]
let task4 = [
  15, //gold
  22, // stone
  21, // wood
]









////////////////////////////////////////////////
let map1 = [
  "Level 1", //level
  1,
  3,
  2,
  0,
];
let map2 = [
  "Level 2",
  3, 2, 3, 0, 1,

]
let map3 = [
  "Level " + 3,
  1, 2, 3, 0, 2, 3, 1, 0, 1
]
let map4 = [
  "Level " + 4,
  1, 2, 0, 3, 2, 3, 0, 2, 3, 1, 0, 1, 1, 2, 3
]
let map5 = [
  "Level " + 5,
  1, 2, 0, 3, 2, 3, 0, 2, 3, 1, 0, 1, 1, 2, 3, 1, 2, 0, 1, 2,
]
let map6 = [
  "Level " + 5,
  1, 2, 0, 3, 2, 3, 0, 2, 3, 1, 0, 1, 1, 2, 3, 1, 2, 0, 1, 2, 3, 2, 1, 0, 2, 0, 3, 1, 2, 3, 1, 2, 0,
  3, 2, 3, 0, 2, 3, 1, 0, 1, 1, 2, 3, 1, 2, 0, 1, 2, 3, 2, 1, 0, 2, 0, 3, 1, 2, 3, 0, 1, 2, 3, 3, 2
]

let currentLevel = 1;
var currentMap = 'map' + currentLevel;


//console.log(map1);

createItem(map4);

function createItem(map) {
  //add Level number
  document.getElementById("Level").innerHTML = map[0];

  //set field width
  let div_number = document.getElementById("number");

  if (map.length - 1 <= 5) {
    fieldWidth = (map.length - 1);
  } else {
    fieldWidth = 5;
  }

  div_number.style.width = fieldWidth * 100 + "px";
  // const div_number = document.getElementById("number");

  //create items with background
  var i = 1;
  while (i <= map.length - 1) {

    const elemProg = document.createElement("div");

    elemProg.setAttribute("class", "item");
    elemProg.setAttribute("id", "item" + i);
    div_number.appendChild(elemProg);
    //add prize to item
    createPrize(i, map[i]);
    i++;
  }
};


function createPrize(position, type) {
  const imgProg = document.createElement("img");
  if (type == 1) {
    imgProg.setAttribute("src", "img/gold.png");
    imgProg.setAttribute("id", "gold");
    imgProg.setAttribute("class", "gold");

  } else if (type == 3) {
    imgProg.setAttribute("src", "img/wood.png");
    imgProg.setAttribute("id", "wood");
    imgProg.setAttribute("class", "wood");
  } else if (type == 2) {
    imgProg.setAttribute("src", "img/stone.png");
    imgProg.setAttribute("id", "stone");
    imgProg.setAttribute("class", "stone");
  } else if (type == 0) {
    imgProg.setAttribute("src", "img/bomb.png");
    imgProg.setAttribute("id", "bomb");
    imgProg.setAttribute("class", "bomb");
  }
  imgProg.classList.add("prize");
  imgProg.setAttribute("height", "70px");
  imgProg.setAttribute("width", "70px");

  document.getElementById("item" + position).appendChild(imgProg);
}



// document.getElementById("" + "level").innerHTML=map[0];



resursButton = document.getElementById("Resurses");
resursButton.addEventListener("click", function () {

  //set hiden elements visible
  let items = document.querySelectorAll(".hide");
  items.forEach(function (item) {
    item.classList.remove("hide");
  });
  // set normal height
  let image = document.getElementsByClassName('prize');

  Array.from(image).forEach((element) => {

    element.setAttribute("height", 70 + "px");
    element.setAttribute("width", 70 + "px");
  });
});

// Add Event
addCountEvent('gold', 'scoreGold', 'taskGold', task4[0]);
addCountEvent('stone', 'scoreStone', 'taskStone', task4[1]);
addCountEvent('wood', 'scoreWood', 'taskWood', task4[2]);

function addCountEvent(imageType, scoreType, taskType, task) {
  let score = 0;
    const scoreH = document.getElementById(scoreType);

    document.getElementById(taskType).innerHTML = task;

  const imageArray = document.getElementsByClassName(imageType);
  //console.log(imageType.length);
  Array.from(imageArray).forEach((element) => {
    element.addEventListener("click", function () {
      console.log(element);
      element.setAttribute('height', element.height - 10 + 'px');
      element.setAttribute('width', element.width - 10 + 'px');
      score++;
      while (score > task){
         score--;
         element.setAttribute('height', element.height + 10 + 'px');
      element.setAttribute('width', element.width + 10 + 'px');
        }
      // console.log(task);
      // document.getElementById(taskType).innerHTML = task;
      document.getElementById(scoreType).innerHTML = score;
    })
    // Clear
    clearButton = document.getElementById("clear");
    clearButton.addEventListener("click", function () {
      score = 0;
      document.getElementById(scoreType).innerHTML = score;
      element.setAttribute("height", 70 + "px");
      element.setAttribute("width", 70 + "px");
    }
    );
  })

let imageBomb = document.getElementsByClassName('bomb');
Array.from(imageBomb).forEach((elementBomb) => {
  elementBomb.addEventListener("click", function () {
  alert("Ви програли");
  

 
  })
})
}
// check('gold', 'scoreGold', task[0], 'taskGold');
// check('stone', 'scoreStone', task[1], 'taskStone');
// check('wood', 'scoreWood', task[2], 'taskWood');
// function check(img, scoreType, task, TaskType){
// let score = 0;
// const prize = document.getElementById(img);
//     const scoreH = document.getElementById(scoreType);

//     document.getElementById(taskType).innerHTML = task;
//     prize.addEventListener('click', function(){

//     score++;

//     scoreH.innerHTML = score;

//     if (score == task) {
//         scoreH.innerHTML = "FULL";
//   }
//     if (score >= task){
        
//          score--;
//        }
//     })
// }



