//1

function calcTip(bill) {
    if (bill >= 50 && bill <= 300) {
      return bill * 0.15;
    } else {
      return bill * 0.2;
    }
  }
  
  console.log(calcTip(100)); // 15

  const bills = [125, 555, 44];

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(tips); // [18.75, 111, 8.8]
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(totals); // [143.75, 666, 52.8]

//2

  const arman = {
    fullName: 'Арман Халыков',
    mass: 78,
    height: 1.69,
    calcBMI: function() {
      this.bmi = this.mass / (this.height * this.height);
      return this.bmi;
    }
  };
  
  const kuat = {
    fullName: 'Куат Мамырханулы',
    mass: 92,
    height: 1.95,
    calcBMI: function() {
      this.bmi = this.mass / (this.height * this.height);
      return this.bmi;
    }
  };

  if (arman.calcBMI() > kuat.calcBMI()) {
    console.log(`ИМТ ${arman.fullName} (${arman.bmi}) выше, чем у ${kuat.fullName} (${kuat.bmi})!`);
  } else {
    console.log(`ИМТ ${kuat.fullName} (${kuat.bmi}) выше, чем у ${arman.fullName} (${arman.bmi})!`);
  }

  //3
  let bills1 = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
  let tips1 = [];
  let totals1 = [];
  for (let i = 0; i < bills1.length; i++) {
    let tip = calcTip(bills1[i]);
    tips1.push(tip);
    totals1.push(bills1[i] + tip);
  }
  function calcAverage(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum / arr.length;
  }
  let avg = calcAverage(totals);
  console.log(avg);

  //4

  const poll = {
    question: "Какой ваш любимый язык программирования?",
    options: ["JavaScript", "Python", "Rust", "C++"],
    answers: [0, 0, 0, 0],
    registerNewAnswer() {
      const input = Number(
        prompt(
          `${this.question}\n${this.options.join("\n")}\n(Напишите номер варианта)`
        )
      );
      if (input >= 0 && input < this.options.length && Number.isInteger(input)) {
        this.answers[input]++;
      }
      this.displayResults();
    },
    displayResults(type = "array") {
      if (type === "string") {
        console.log(`Результаты опроса - ${this.answers.join(", ")}`);
      } else {
        console.log(this.answers);
      }
    },
  };
  
  document.querySelector(".answer-btn").addEventListener("click", function () {
    poll.registerNewAnswer();
  });
  
  // Bonus
  const data1 = [5, 2, 3];
  const data2 = [1, 5, 3, 9, 6, 1];
  
  poll.displayResults.call({ answers: data1 }, "array");
  poll.displayResults.call({ answers: data1 }, "string");
  poll.displayResults.call({ answers: data2 }, "array");
  poll.displayResults.call({ answers: data2 }, "string");
  
  

  //5

  function checkDogs(dogsAliya, dogsSaule) {
    // А
    const aliyaCopy = dogsAliya.slice();
    aliyaCopy.splice(0, 1);
    aliyaCopy.splice(-2);
  
    // Б
    const allDogs = [...aliyaCopy, ...dogsSaule];
  
    // В
    allDogs.forEach((dogAge, i) => {
      const ageText = dogAge >= 3 ? "взрослая" : "щенок";
      console.log(`Собака номер ${i + 1} ${ageText}, и ей ${dogAge} лет`);
    });
  }
  
  // Тест 1
  const dogsAliya1 = [3, 5, 2, 12, 7];
  const dogsSaule1 = [4, 1, 15, 8, 3];
  checkDogs(dogsAliya1, dogsSaule1);
  
  // Тест 2
  const dogsAliya2 = [9, 16, 6, 8, 3];
  const dogsSaule2 = [10, 5, 6, 1, 4];
  checkDogs(dogsAliya2, dogsSaule2);
  
  