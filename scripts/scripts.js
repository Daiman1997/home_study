let arr = [5, 25, 35, 45];
arr = [4, 233, 23, 422, 34, 53]
arr[1] = 34;
//console.log(arr.length)


const clearBtn = document.getElementById("buttonConsole");
clearBtn.addEventListener("click", clearConsole);
function clearConsole() {console.clear()}

const button = document.getElementById("button");
button.addEventListener("click", buttonClick);

function buttonClick() {
    for(let i = 0; i < 10; i++) {
        console.log(i);
    }
















}