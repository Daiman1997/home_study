const clearBtn = document.getElementById("buttonConsole");
clearBtn.addEventListener("click", clearConsole);
function clearConsole() {console.clear()}

const button = document.getElementById("button");
button.addEventListener("click", buttonClick);

function buttonClick() {
    /* let one;
    one = 25;
    let two = [4, 4, 4];
    console.log(two);
    
    if (one >= two) {
        console.log(true);
    } else {
        console.log(false);
    }
    
    let age = prompt('Сколько тебе лет?');
    if (age != '' && age != null) {
        alert(`Ему ${age} года`);
    } else {
        alert('Не родился еще(');
    } */
}

// Типы данных -  всего 8 типов. 7 из них примитивные, и Object не примитивен
let dataNumber = 123; //Числовой Number
//  Infinity = бесконечность ,  NaN числовая ошибка
let dataBigInt = 1234567890123456789012345678901234567890n; // BigInt 
// работает с большими числами , n в конце обозначает этот тип данных 
let dataString = 'Апельсин'; //Строка String
// "" '' `Текст ${str}` в обратных ковычках можно встраивать переменные 
let dataBoolean = true; // Булевый тип Boolean
// true false
let dataNull = null; // null 
// означает пустоту , неизвестность
let dataUndefined = undefined; // undefined 
// означает что переменная не назначена
// null мы присваиваем сами, а undefined присваивает движок
let dataObject = {name: 'Max', age: 27} //Объект Object 
let dataSymbol ; // Символ Symbol 
// используется для создания уникальных идентификаторов в объектах
//console.log(typeof dataBigInt);

//Условные операторы
let oper = 3;
if (oper == 1) {
    oper = 0;
} else {
    oper = 1;
};

//Массивы данных
let arr = [5, 25, 35, 45];
arr = [4, 233, 23, 422, 34, 53];
arr[1] = 34;
//console.log(arr.length);

//Операторы сравнения
// больше > 
// меньше < 
// равно ==  
// не !
// не равно !=
// строгое равно ===
// меньше или равно <=
// больше или равно >=
// или || находит первый true
// и && находит первый false 
// оператор нулевого сравнения ?? сравнивает null/undefined находит первый известрный 
let age = 24;
if (age >= 14 && age <= 90) {};
if (!(age >= 14 && age <= 90)) {};
if (age < 14 || age > 90) {}

/* let user = prompt('Кто там?');
if (user == 'Админ') {
    let pass = prompt('Пароль?');
    if (pass == 'Я главный') {
        alert('Здравствуйте!');
    } else if (pass == null || pass == '') {
        alert('Отменено');
    } else {
        alert('Не верный пароль');
    };
} else if (user == '' || user == null) {
    alert('Отменено');
} else {
    alert('Я вас не знаю');
};
 */
let num1 = 10,
    num2 = 20,
    result;

    result ??= num1 ?? num2;


    //Цыклы 
for(let i = 0; i < 10; ++i) {
    //console.log(i);
};

let i = 0;
while (i < 3) { // выводит 0, затем 1, затем 2
//   alert( i );
  i++;
}

do {
//   alert( i );
  i++;
} while (i < 3);