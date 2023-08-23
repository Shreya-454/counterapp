let btn = document.querySelector("#addbtn")
let counting = document.querySelector("#counting")
let savebtn = document.querySelector("#savebtn")
let storecounting = document.querySelector("#storecounting")
    let resetbtn = document.querySelector("#resetbtn")

btn.addEventListener("click", function () {
    counting.innerHTML = +counting.innerHTML + 1;
    savebtn.classList.remove("btn-disable")
    
})
savebtn.addEventListener("click", function () {
    if (counting.innerHTML == 0) {
        savebtn.classList.add("btn-disable");
    }
    else {
        if (storecounting.innerHTML == 0) {
            storecounting.innerHTML = counting.innerHTML;
        }
        else {
            storecounting.innerHTML = storecounting.innerHTML + "," + counting.innerHTML;
        }
        counting.innerHTML = 0;
    }

    
})
resetbtn.addEventListener("click", function () {
    counting.innerHTML = 0;
    storecounting.innerHTML = 0;
})
