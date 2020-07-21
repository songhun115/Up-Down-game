const container = document.querySelector(".container");
const input = container.querySelector("input");
const countBox = document.querySelector(".count__box");
let count = document.querySelector(".count");
let max__number = 100;
let min__number = 0;
let min__max = document.querySelector(".min__max");
const random__number = Math.floor(Math.random() * max__number);
let countNumber = 5;
min__max.innerText = `최소${min__number}에서 ~ 최대${max__number}까지`;
count.innerText = `기회:${countNumber}`;
function paintNumber(number) {
  console.log(number);
  if (number == random__number) {
    alert("정답입니다~!");
    console.log("정답!");
  } else if (number !== random__number) {
    countNumber = countNumber - 1;
    count.innerText = `기회:${countNumber}`;
    if (number > random__number) {
      max__number = number;
      alert(`${number}보다 낮습니다`);
      min__max.innerText = `최소 ${min__number} 에서 ~ 최대 ${max__number}까지`;
    } else if (number < random__number) {
      min__number = number;
      alert(`${number}보다 높습니다`);
      min__max.innerText = `최소 ${min__number} 에서 ~ 최대 ${max__number}까지`;
    }
  }

  if (countNumber == 0) {
    alert("게임끝..you lose....");
  }
}

function handleSubmit(event) {
  event.preventDefault();
  const inputValue = input.value;
  if (inputValue > max__number) {
    alert(`${inputValue}보다 낮은 숫자를 입력해주세요`);
  } else if (inputValue <= min__number) {
    alert(`${inputValue}보다 높은 숫자를 입력해주세요`);
  } else {
    paintNumber(inputValue);
    input.value = "";
  }
}
function init() {
  container.addEventListener("submit", handleSubmit);
}
init();
