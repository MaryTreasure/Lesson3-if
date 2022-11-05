let age;

const gender = 'ЖЕН';

if (age > 18) {
    console.log('Вам больше 18 лет');
} else if (age === 18) {
    console.log("Вам 18 лет");
} else if (age === undefined) {
    console.log("Укажите Ваш возраст");
} else {
    console.log ("Вам меньше 18 лет");
}


if (gender.toLowerCase() === 'муж') {
    console.log('Вам налево');
} 


if (gender.toLowerCase() === 'жен') {
    console.log('Вам направо');
}