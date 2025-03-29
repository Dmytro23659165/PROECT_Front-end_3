// artems's proect
const button = document.getElementById('interactive-button');
const menu = document.getElementById('menu');

button.addEventListener('mouseenter', () => {
    menu.classList.toggle('hide');
});

button.addEventListener('mouseleave', () => {
    menu.classList.add('hide'); 
});






function checkLeapYear() {
    const year = document.getElementById('birthYear').value;
    const result = document.getElementById('resultArtem');
    
    const isLeapYear = year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
    
    if (isLeapYear) {
        result.innerHTML = 'Ви народилися у високосний рік!';
        result.style.color = 'green';
    } else {
        result.innerHTML = 'Ви народилися у звичайному році!';
        result.style.color = 'red';
    }
}



function generateRandomNumber() {
    return Math.floor(Math.random() * 10) + 1; 
}

let randomNumber = generateRandomNumber();

function checkGuess() {
    let userGuess = parseInt(document.getElementById('guessInput').value);
    let message = document.getElementById('message');

    if (userGuess === randomNumber) {
        message.innerHTML = `<span class="success">Вітаю, ви вгадали число! (${randomNumber})</span>`;
        message.style.color = "green";
    } else {
        message.innerHTML = `<span class="error">Невірно! Спробуйте ще раз. Число було ${randomNumber}.</span>`;
        message.style.color = "red";
    }

    randomNumber = generateRandomNumber(); 
}
// artem's proect






// rodion's proect
let userScore = 0;
        let computerScore = 0;

        function getComputerChoice() {
            const choices = ['rock', 'scissors', 'paper'];
            const randomIndex = Math.floor(Math.random() * choices.length);
            return choices[randomIndex];
        }

        function play(userChoice) {
            const computerChoice = getComputerChoice();
            let result = '';

            if (userChoice === computerChoice) {
                result = 'Нічия!';
            } else if (
                (userChoice === 'rock' && computerChoice === 'scissors') ||
                (userChoice === 'scissors' && computerChoice === 'paper') ||
                (userChoice === 'paper' && computerChoice === 'rock')
            ) {
                result = 'Ви виграли раунд!';
                userScore++;
            } else {
                result = 'Комп\'ютер виграв раунд!';
                computerScore++;
            }

            document.querySelector('.result').textContent = result;
            document.getElementById('user-score').textContent = userScore;
            document.getElementById('computer-score').textContent = computerScore;
        }

        function computerPlay() {
            const computerChoice = getComputerChoice();
            alert(`Комп'ютер вибрав: ${computerChoice}`);
        }
// Калькулятор
        function calculate(operation) {
            let a = parseFloat(document.getElementById('num1').value);
            let b = parseFloat(document.getElementById('num2').value);
            let result;

            if (operation === 'plus') {
                result = a + b;
            } else if (operation === 'minus') {
                result = a - b;
            } else if (operation === 'times') {
                result = a * b;
            } else if (operation === 'divide') {
                if (b === 0) {
                    result = 'Помилка: ділення на нуль';
                } else {
                    result = a / b;
                }
            }

            document.getElementById('result').innerHTML = result;
        }

        // Додавання слухачів подій
        document.getElementById('plusButton').addEventListener('click', function() {
            calculate('plus');
        });

        document.getElementById('minusButton').addEventListener('click', function() {
            calculate('minus');
        });

        document.getElementById('timesButton').addEventListener('click', function() {
            calculate('times');
        });

        document.getElementById('divideButton').addEventListener('click', function() {
            calculate('divide');
        });

// калькулятор часу
    
function calculateTime() {
    let seconds = parseInt(document.getElementById("inputNumber").value);
    if (isNaN(seconds) || seconds < 0) {
        document.getElementById("outputTime").textContent = "Некоректне значення";
        return;
    }
    let days = Math.floor(seconds / (24 * 3600));
            seconds %= 24 * 3600;
            let hours = Math.floor(seconds / 3600);
            seconds %= 3600;
            let minutes = Math.floor(seconds / 60);
            seconds %= 60;
            
            document.getElementById("outputTime").textContent = `${days} дн. ${hours}:${minutes}:${seconds}`;
        }
// rodion's proect




// header

// header-end

// main
const field = document.getElementById('field');
const ball = document.getElementById('ball');
const ballRadius = ball.offsetWidth / 2;
field.addEventListener('click', ({ clientX, clientY }) => {
    const { left, top, width, height } = field.getBoundingClientRect();
    const x = Math.min(Math.max(clientX - left - ballRadius, 0), width - ball.offsetWidth);
    const y = Math.min(Math.max(clientY - top - ballRadius, 0), height - ball.offsetHeight);
    Object.assign(ball.style, { left: `${x}px`, top: `${y}px` });
});
// main-end

// section
let butOne = document.querySelector('button[id="button_1"]');
let butTwo = document.querySelector('button[id="button_2"]');
let butThree = document.querySelector('button[id="button_3"]');
let numbers = [];
function fullNumberFinds(promptPov, index) {
    let num = prompt(promptPov, 0);
    if (!isNaN(num) && num.trim() !== "") {
        num = parseFloat(num);
        // alert(`Ви ввели число ${num}`);
        console.log(`Введене число ${num}`);
        numbers[index] = num;
        if (numbers.length === 3 && numbers.every(n => n !== undefined)) {
            let maxNumb = Math.max(...numbers);
            // alert(`Найбільше число: ${maxNumb}`)
            console.log(`Найбільше число ${maxNumb}`);
            let textP = document.querySelector('p[class="largest-number"]');
            textP.innerHTML = `Найбільше число, яке ви ввели - (${maxNumb})`;
            console.log(textP);
        }
    } else {
        alert('Ви ввели не число!');
        console.log('Число не зараховане!');
    }
}
butOne.addEventListener('click', () => fullNumberFinds('Введіть перше число', 0));
butTwo.addEventListener('click', () => fullNumberFinds('Введіть друге число', 1));
butThree.addEventListener('click', () => fullNumberFinds('Введіть третє число', 2));
console.log(butOne);
console.log(butTwo);
console.log(butThree);
// section-end

// slider(footer)
let slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
    console.log("Changing slide by: " + n);
    showSlides(slideIndex += n);
}
function currentSlide(n) {
    console.log("Setting current slide to: " + n);
    showSlides(slideIndex = n);
}
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    let prev = document.querySelector('.prev');
    let next = document.querySelector('.next');
    
    console.log("Showing slide: " + n);

    if (n > slides.length) { slideIndex = slides.length; }
    if (n < 1) { slideIndex = 1; }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex-1].style.display = "flex"; 
    slides[slideIndex-1].style.justifyContent = "center"; 
    slides[slideIndex-1].style.flexDirection = "column"; 
    slides[slideIndex-1].style.alignItems = "center"; 
    slides[slideIndex-1].style.gap = "20px"; 
    dots[slideIndex-1].className += " active";

    if (slideIndex === 1) {
        prev.style.display = "block";
    } else {
        prev.style.display = "block";
    }

    if (slideIndex === slides.length) {
        next.style.display = "block";
    } else {
        next.style.display = "block";
    }
}
// slider(footer)-end






// danylo's project
const scientists = [
    {
      name: "Albert",
      surname: "Einstein",
      born: 1879,
      dead: 1955,
      id: 1,
    //   url: "./danylo's images/AlbertEinsteinHead.jpg",
    },
    {
      name: "Isaac",
      surname: "Newton",
      born: 1643,
      dead: 1727,
      id: 2,
    //   url: "./danylo's images/GodfreyKnellerIsaacNewton.jpg",
    },
    {
      name: "Galileo",
      surname: "Galilei",
      born: 1564,
      dead: 1642,
      id: 3,
    //   url: "./danylo's images/Galileo.jpg",
    },
    {
      name: "Marie",
      surname: "Curie",
      born: 1867,
      dead: 1934,
      id: 4,
    //   url: "./danylo's images/MarieCuriec.jpg",
    },
    {
      name: "Johannes",
      surname: "Kepler",
      born: 1571,
      dead: 1630,
      id: 5,
    //   url: "./danylo's images/Kepler.jpg",
    },
    {
      name: "Nicolaus",
      surname: "Copernicus",
      born: 1473,
      dead: 1543,
      id: 6,
    //   url: "./danylo's images/NicolausCopernicus.jpg",
    },
    {
      name: "Max",
      surname: "Planck",
      born: 1858,
      dead: 1947,
      id: 7,
    //   url: "./danylo's images/MaxPlanck.jpg",
    },
    {
      name: "Katherine",
      surname: "Blodgett",
      born: 1898,
      dead: 1979,
      id: 8,
    //   url: "./danylo's images/Blodgett.jpg",
    },
    {
      name: "Ada",
      surname: "Lovelace",
      born: 1815,
      dead: 1852,
      id: 9,
    //   url: "./danylo's images/Lovelace.png",
    },
    {
      name: "Sarah E.",
      surname: "Goode",
      born: 1855,
      dead: 1905,
      id: 10,
    //   url: "./danylo's images/Sarah E.jpg",
    },
    {
      name: "Lise",
      surname: "Meitner",
      born: 1878,
      dead: 1968,
      id: 11,
    //   url: "./danylo's images/Meitner.jpg",
    },
    {
      name: "Hanna",
      surname: "Hammarström",
      born: 1829,
      dead: 1909,
      id: 12,
    //   url: "./danylo's images/Hammarström.jpg",
    },
  ];
  //19 ст
  // let scientistsNot19th = scientists.filter(
  //   (scientist) => scientist.born >= 1801
  // );
  // Сума років
  let ageSum = scientists.reduce((sum, scientists) => {
    return sum + (scientists.born - scientists.dead);
  });
  
  // відсортувати прожитих років
  // let sortedByAge = scientists.sort(
  //   (a, b) => a.dead - a.born - (b.dead - b.born)
  // );
  // Фільтруємо вчених, прізвище яких починається на "С"
  // const scientistsWithC = scientists.filter(
  //   (scientist) => scientist.surname[0] === "C"
  // );
  
  // Енштейн народився
  // let albertEinsteinWasBorn = scientists.find((element) => element.born);
  //Знайти вчених в яких співпадають перші літери
  // const filteredScientists = scientists.filter(
  //   (scientist) => scientist.name[0] === scientist.surname[0]
  // );
  
  //родився найпізніше
  // let youngestScientist = scientists[0];
  // for (let i = 1; i < scientists.length; i++) {
  //   if (scientists[i].born > youngestScientist.born) {
  //     youngestScientist = scientists[i];
  //   }
  // }
  // Фільтруємо вчених ім'я яких не починається на "А"
  // const updatedScientists = scientists.filter(
  //   (scientist) => scientist.name[0] !== "A"
  // );
  
  //
  const scientistItemList = document.querySelectorAll(".item-list");
  //
  const scientistswasborn = document.getElementById("list1");
  scientistswasborn.addEventListener("click", (event) => {
    let scientistsNot19th = scientists.filter(
      (scientist) => scientist.born >= 1801
    );
    scientistItemList.forEach((element, idx) => {
      if (scientistsNot19th[idx]) {
        element.textContent = `${scientistsNot19th[idx].name} ${scientistsNot19th[idx].surname}`;
      }
    });
  });
  
  // const sorfOfNames = document.getElementById("2");
  // sorfOfNames.addEventListener("click", (event) => {
  //   const filteredScientists = scientists.sort((a, b) => {
  //     if (a.name < b.name) {
  //       return -1;
  //     }
  //     if (a.name > b.name) {
  //       return 1;
  //     }
  //     return 0;
  //   });
  
  //   if (filteredScientists[idx]) {
  //     element.textContent = `${filteredScientists[idx].name} ${filteredScientists[idx].surname}`;
  //   }
  // });
  const sorfOfNames = document.getElementById("list2");
  sorfOfNames.addEventListener("click", (event) => {
    const filteredScientists = scientists.sort((a, b) =>
      a.name.localeCompare(b.name)
    );
  
    // scientistItemList.forEach((element, idx) => {
    //   if (filteredScientists[idx]) {
    //     element.textContent = `${filteredScientists[idx].name} ${filteredScientists[idx].surname}`;
    //   }
    // });
    // if (albertEinsteinWasBorn && scientistItemList.length > 0) {
    //   scientistItemList[0].style.backgroundImage = `url("${albertEinsteinWasBorn.url}")`;
    // }
    let albertEinsteinWasBorn = scientists.find(
      (scientist) => scientist.surname === "Einstein"
    );
  
    if (albertEinsteinWasBorn && scientistItemList.length > 0) {
      scientistItemList[0].style.backgroundImage = `url("${albertEinsteinWasBorn.url}")`;
    }
  });
  //
  const sortOfDaysGone = document.getElementById("list3");
  sortOfDaysGone.addEventListener("click", (event) => {
    let sortedByAge = scientists.sort(
      (a, b) => a.dead - a.born - (b.dead - b.born)
    );
    scientistItemList.forEach((element, idx) => {
      if (sortedByAge[idx]) {
        element.textContent = `${sortedByAge[idx].name} ${sortedByAge[idx].surname}`;
      }
    });
  });
  const wasBornLeiter = document.getElementById("list4");
  wasBornLeiter.addEventListener("click", () => {
    scientistItemList.forEach((element) => {
      element.textContent = "";
    });
    let youngestScientist = scientists.reduce(
      (youngest, scientist) =>
        scientist.born > youngest.born ? scientist : youngest,
      scientists[0]
    );
  
    if (scientistItemList.length > 0) {
      scientistItemList[0].textContent = `${youngestScientist.name} ${youngestScientist.surname}`;
    }
  });
  
  const einsteinBorn = document.getElementById("list5");
  
  einsteinBorn.addEventListener("click", () => {
    scientistItemList.forEach((element) => {
      element.textContent = "";
    });
    let albertEinsteinWasBorn = scientists.find(
      (scientist) => scientist.surname === "Einstein"
    );
  
    // if (albertEinsteinWasBorn && scientistItemList.length > 0) {
    //   scientistItemList[0].style.backgroundImage = `url("${albertEinsteinWasBorn.url}")`;
    // }
  });
  
  const secondNameC = document.getElementById("list6");
  secondNameC.addEventListener("click", (event) => {
    scientistItemList.forEach((element) => {
      element.textContent = "";
    });
    const scientistsWithC = scientists.filter(
      (scientist) => scientist.surname[0] === "C"
    );
    scientistItemList.forEach((element, idx) => {
      if (scientistsWithC[idx]) {
        element.textContent = `${scientistsWithC[idx].name} ${scientistsWithC[idx].surname}`;
      }
    });
  });
  const filterOfNamesA = document.getElementById("list7");
  filterOfNamesA.addEventListener("click", (event) => {
    const updatedScientists = scientists.filter(
      (scientist) => scientist.name[0] !== "A"
    );
    scientistItemList.forEach((element) => {
      element.textContent = "";
    });
    scientistItemList.forEach((element, idx) => {
      if (updatedScientists[idx]) {
        element.textContent = `${updatedScientists[idx].name} ${updatedScientists[idx].surname}`;
      }
    });
  });
  const findTheScientistsHadLife = document.getElementById("list8");
  findTheScientistsHadLife.addEventListener("click", (event) => {});
  const firstLetter = document.getElementById("list9");
  firstLetter.addEventListener("click", (event) => {
    console.log();
  });
  
  const namesFirstLetter = document.getElementById("list9");
  
  namesFirstLetter.addEventListener("click", () => {
    const filteredScientists = scientists.filter(
      (scientist) =>
        scientist.name[0].toUpperCase() === scientist.surname[0].toUpperCase()
    );
  
    scientistItemList.forEach((element) => {
      element.textContent = "";
    });
  
    scientistItemList.forEach((element, idx) => {
      if (filteredScientists[idx]) {
        element.textContent = `${filteredScientists[idx].name} ${filteredScientists[idx].surname}`;
      }
    });
  });
  // модалка
  let buttonForModal = document.querySelector(".buttons");
  buttonForModal.addEventListener("click", (event) => {
    event.preventDefault();
    modal.style.display = "block";
  });
  let closeModal = document.getElementById("modal_close");
  closeModal.addEventListener("click", (event) => {
    event.preventDefault();
    modal.style.display = "none";
  });
  let modalBackgroung = document.getElementById("modal_backgroung");
  
  // modalBackgroung.onclick = closeModal.onclick = closeModal;
  modalBackgroung.addEventListener("click", (event) => {
    modal.style.display = "none";
  });