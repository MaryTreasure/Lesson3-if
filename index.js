/* let age = 18;
age = +age;

if (!isNaN(+age)) {
    if (age > 18) {
        console.log('Вам больше 18 лет');
    } else if (age === 18) {
        console.log("Вам 18 лет");
    } else if (age < 18) {
        console.log("Вам меньше 18 лет");
    } else {
        console.log ("Укажите Ваш возраст");
    }
}else{
    console.log ("Введите корректные данные");
}

const gender = 'ЖЕН';




if (gender.toLowerCase() === 'муж') {
    console.log('Вам налево');
} 


if (gender.toLowerCase() === 'жен') {
    console.log('Вам направо');
} */
/* const isAdmin = true;
console.log (`Добро пожаловать: ${
    isAdmin
    ? "Администратор"
    : "Пользователь"
}`); */
/* const typeUser = "admin"; // user, guest, bot
switch (typeUser) {
    case "admin":
        console.log ("Вы администратор");
        break;
    case "user":
        console.log ("Вы пользователь");
        break;
    case "guest":
        console.log ("Вы гость");
        break;
    case "bot":
        console.log ("Вы бот");
        break;
    default:
        console.log ("Вы непонятно кто такой");
        break;
} */

let value = 0;
const lastNumber = 10;
let message = "";

while (++value <= lastNumber) {
    message += `${value}${ value !== lastNumber ? "," : ""}`;
}
console.log (message);

// Сделать убавление дома

