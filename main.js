// let decBtn = document.querySelector("#decBtn");
// let resetBtn = document.querySelector("#resetBtn");
// let incBtn = document.querySelector("#incBtn");
// let changeNum = document.querySelector(".changeNum");
// let number=0;
//First compound
// decBtn.addEventListener("click", function () {
//     number--;
//     changeNum.innerHTML = number;
//     console.log("- ", newNum);
// });

// resetBtn.addEventListener("click", function () {
//     changeNum.innerHTML = number = 0;
//     console.log("reset ", number);
// });

// incBtn.addEventListener("click", function () {
//     number++;
//     changeNum.innerHTML = number;
//     console.log("+", newNum);
// })

//Secound Compound

let changeNum = document.querySelector(".changeNum");
let btns = document.querySelectorAll(".btn");
let count = 0;

btns.forEach((btn) => {
    // console.log(btn);
    btn.addEventListener("click", function (e) {
        let classShow = e.currentTarget.classList;
        // console.log(classShow);
        if (classShow.contains("decBtn")) {
            count--;
            
        }
        else if (classShow.contains("incBtn")) {
            count++;
            
        }
        else {
            count = 0;
        }

        if(count>0){
            changeNum.style.color="green";
        }
        else if(count<0){
            changeNum.style.color="red";
        }
        else{
            changeNum.style.color="black";
        }
        changeNum.textContent=count;

    });


});

