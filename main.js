let decBtn = document.querySelector("#decBtn");
let resetBtn = document.querySelector("#resetBtn");
let incBtn = document.querySelector("#incBtn");
let changeNum = document.querySelector(".changeNum");
let number=0;

decBtn.addEventListener("click", function () {
    let newNum = number--;
    changeNum.innerHTML = `${newNum}`;
    console.log("- ", newNum);
});

resetBtn.addEventListener("click", function () {
    changeNum.innerHTML = `${number = 0}`;
    console.log("reset ", number);
});

incBtn.addEventListener("click", function () {
    newNum=number++;
    changeNum.innerHTML = `${newNum}`
    console.log("+", newNum);
})