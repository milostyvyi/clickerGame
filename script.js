var i = 1; // кількість полів //
var s = 1;
var g = 1;
var w = 1;
var l = 1;
// Номер Рівня

// var score = 0;

scoreStone = 0;
scoreGold = 0;

scoreWood = 0;
scoreBomb = 0;
// 0 - bomb
// 1 - gold
// 2 - stone
// 3 - wood

// змінна для очищення interval
let timerId;

let task1 = [
    3, // gold
    3, // stone
    2, // wood
    1,
    15, // time
];
let task2 = [
    5, // gold
    6, // stone
    9, // wood
    11, // GPU
    20, // time
];
let task3 = [
    12, // gold
    13, // stone
    15, // wood
    16, // GPU
];
let task4 = [
    15, // gold
    22, // stone
    21, // wood
    15, // GPU
];
// //////////////////////////////////////////////
var map1 = [
    "Level 1", // level
    1,
    3,
    2,
    0,
];
let map2 = [
    "Level 2",
    3,
    2,
    3,
    0,
    1
];
let map3 = [
    "Level " + 3,
    1,
    2,
    3,
    0,
    2,
    3,
    1,
    0,
    1,
    2
];
let map4 = [
    "Level " + 4,
    1,
    2,
    0,
    3,
    2,
    3,
    0,
    2,
    3,
    1,
    0,
    1,
    1,
    2,
    3
];
let map5 = [
    "Level " + 5,
    1,
    2,
    0,
    3,
    2,
    3,
    3,
    1,
    0,
    1
];
let map6 = [
    "Level " + 6,
    1,
    2,
    0,
    3,
    2,
    3,
    0,
    2,
    3,
    1,
    0,
    1,
    1,
    2,
    3,
    1,
    3,
    0,
    2,
    1,
];

let currentLevel = 1;

function makeTaskList(name) {
    let task1 = [
        2, // gold
        3, // stone
        2, // wood
        1,
        25, // time
    ];
    let task2 = [
        4, // gold
        5, // stone
        6, // wood
        9, // GPU
        20, // time
    ];
    let task3 = [
        7, // gold
        9, // stone
        10, // wood
        6, // GPU
        20, // time
    ];
    let task4 = [
        9, // gold
        5, // stone
        11, // wood
        13, // GPU
        20, // time
    ];
    let task5 = [
        13, // gold
        12, // stone
        16, // wood
        15, // GPU
        25, // time
    ];
    let task6 = [
        15, // gold
        21, // stone
        13, // wood
        15, // GPU
        20, // time
    ];
    switch (name) {
        case 1:
            return task1;
            break;
        case 2:
            return task2;
            break;
        case 3:
            return task3;
            break;
        case 4:
            return task4;
            break;
            case 5:
            return task5;
            break;
            case 6:
            return task6;
            break;
        default:
    }
}

function makeList(name) {


    let map1 = [
        "Level 1", // level
        1,
        3,
        2,
        0,
    ];
    let map2 = [
        "Level 2",
        3,
        2,
        3,
        0,
        1
    ];
    // map1.sort(function() {
    // return Math.random() - 0.5;
    // });
    let map3 = [
        "Level " + 3,
        1,
        2,
        3,
        0,
        2,
        3,
        1,
        0,
        1,
        2
    ];
    let map4 = [
        "Level " + 4,
        1,
        2,
        0,
        3,
        2,
        3,
        0,
        2,
        3,
        1,
        0,
        1,
        1,
        2,
        3
    ];
    let map5 = [
        "Level " + 5,
        1,
        2,
        0,
        3,
        2,
        3,
        3,
        1,
        0,
        1
    ];
    let map6 = [
        "Level " + 6,
        1,
        2,
        0,
        3,
        2,
        3,
        0,
        2,
        3,
        1,
        0,
        1,
        1,
        2,
        3,
        1,
        3,
        0,
        2,
        1,
    
    ];

    if (name == 1) {
        return map1;

    }
    if (name == 2) {
        return map2;
    }
    if (name == 3) {
        return map3;
    }
    if (name == 4) {
        return map4;
    }
    if (name == 5) {
        return map5;
    }
    if (name == 6) {
        return map6;
    }

    // switch(name){
    //     case 1:
    //         return task1;
    //         break;
    //     case 2:
    //         return task2;
    //         break;
    //     case 3:
    //         return task3;
    //         break;
    //     case 4:
    //         return task4;
    //         break;
    //     default:
    // }

}

// makeList(currentLevel)

console.log(makeList(currentLevel));

createItem(makeList(currentLevel));

function createItem(map) { // add Level number
    document.getElementById("Level").innerHTML = map[0];

    // set field width
    let div_number = document.getElementById("number");
    div_number.innerHTML = "";

    if (map.length - 1 <= 5) {
        fieldWidth = map.length - 1;
    } else {
        fieldWidth = 5;
    } div_number.style.width = fieldWidth * 100 + "px";

    // create items with background
    var i = 1;
    while (i <= map.length - 1) {
        const elemProg = document.createElement("div");

        elemProg.setAttribute("class", "item");
        elemProg.setAttribute("id", "item" + i);
        div_number.appendChild(elemProg);
        // add prize to item
        createPrize(i, map[i]);
        i++;
    }
}

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


timer(makeTaskList(currentLevel)[4]);
// let timer = document.getElementById("timer");


function timer(levelTime) {
    let currentTimer = levelTime;
    let timerDiv = document.getElementById("timer");
    timerDiv.innerHTML = currentTimer;
    timerDiv.style.width = "800px";
    timerDiv.style.background = "green";

    timerId = setInterval(function () {
        timerDiv.innerHTML = currentTimer - 1;
        let w = timerDiv.offsetWidth;
        // console.log(w);
        w = w - w / currentTimer;
        // console.log(w);
        timerDiv.style.width = w + "px";
        currentTimer--;

        if (currentTimer > 10) {
            timerDiv.style.background = "green";
        } else if (currentTimer > 6) {
            timerDiv.style.background = "yellow";
        } else if (currentTimer > 3) {
            timerDiv.style.background = "orange";
        } else if (currentTimer > 0) {
            timerDiv.style.background = "red";
        }
        // console.log(currentTimer);
        if (currentTimer == 0) {
            clearInterval(timerId);
            if (confirm("Час вийшов! Спробуєте ще?")) {
                location.reload();
            }

        }
    }, 1000);
    return timerId;
}


// Кнопка наступний рівень
resursButton = document.getElementById("Resurses");
resursButton.addEventListener("click", function () { // set hiden elements visible
    let items = document.querySelectorAll(".hide");
    items.forEach(function (item) {
        item.classList.remove("hide");

    });
    // set normal height
    let image = document.getElementsByClassName("prize");

    Array.from(image).forEach((element) => {
        element.setAttribute("height", 70 + "px");
        element.setAttribute("width", 70 + "px");
    });
});


// Add Event
// makeTaskList(currentLevel)[0]
function dynamicTasks(task) {
    addCountEvent("gold", "scoreGold", "taskGold", task[0]);
    addCountEvent("stone", "scoreStone", "taskStone", task[1]);
    addCountEvent("wood", "scoreWood", "taskWood", task[2]);
    addCountEvent("bomb", "scoreBomb", "taskBomb", task[3]);
}

dynamicTasks(makeTaskList(currentLevel));

//
function addCountEvent(imageType, scoreType, taskType, task) {
    let score = 0;

    document.getElementById(taskType).innerHTML = task;

    const imageArray = document.getElementsByClassName(imageType);
    // console.log(imageType.length);
    Array.from(imageArray).forEach((element) => {
        element.addEventListener("click", function () {
            // -------------------------
            // ((document.getElementById(scoreType).innerText == task) )// {
            // // виконати код, якщо всі значення співпадають з завдання

            //     currentLevel++;
            //     console.log(makeList(currentLevel));
            // createItem(makeList(currentLevel));
            //     // поява кнопки
            // }

            element.setAttribute("height", element.height - 10 + "px");
            element.setAttribute("width", element.width - 10 + "px");

            score++;
            // ----------------------------------------------------------------------------------------------------------


            if (score == task) {

                document.getElementById(taskType).innerHTML = "FULL";
                element.setAttribute("height", element.height + 10 + "px");
                element.setAttribute("width", element.width + 10 + "px");

            } else if (score > task) {
                score--;
                element.setAttribute("height", element.height + 10 + "px");
                element.setAttribute("width", element.width + 10 + "px");
            }
            // document.getElementById(taskType).innerHTML = task;
            document.getElementById(scoreType).innerHTML = score;

            //
            checkResult();

        });
        // Clear
        clearButton = document.getElementById("clear");
        clearButton.addEventListener("click", function () {
            score = 0;
            document.getElementById(scoreType).innerHTML = score;
            element.setAttribute("height", 70 + "px");
            element.setAttribute("width", 70 + "px");
            clearInterval(timerId);
            timer((makeTaskList(currentLevel))[4]);
        });
    });
}


function checkResult() {
   

    if ((document.getElementById("taskGold").innerText == "FULL") && (document.getElementById("taskStone").innerText == "FULL") && (document.getElementById("taskBomb").innerText == "FULL") && (document.getElementById("taskWood").innerText == "FULL")) {
        if (confirm("Перейти на наступний рівень")) {
            currentLevel++;
            createItem(makeList(currentLevel));
            dynamicTasks(makeTaskList(currentLevel));
            clearInterval(timerId);
            timer((makeTaskList(currentLevel))[4]);
            document.getElementById("scoreGold").innerHTML = 0;
            document.getElementById("scoreStone").innerHTML = 0;
            document.getElementById("scoreWood").innerHTML = 0;
            document.getElementById("scoreBomb").innerHTML = 0;
        }
    }
}
