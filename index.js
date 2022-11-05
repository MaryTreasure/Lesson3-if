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
const isAdmin = true;
console.log (`Добро пожаловать: ${
    isAdmin
    ? "Администратор"
    : "Пользователь"
}`);