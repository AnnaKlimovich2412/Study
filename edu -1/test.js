
// var leftBorderWidht = 1;
// let second = 2;
// const pi = 3.14;
// //alert (pi);
// console.log(leftBorderWidht);

// let persone = {
//     name: "John",
//     age: 25,
//     isMarried: false
// };
// console.log(persone.name);

// let arr = ['plum.png','orange.png','apple.png'];
// console.log(arr[2]);

//alert("Hello world!");

// let answer = confirm("Are you here?");

// console.log(answer);

// let answer = +prompt("Есть ли вам 18?", "Да");

// console.log(typeof(answer));

// // console.log("arr" + "- object");
// let incr = 10,
// decr = 10;



// console.log(incr++);
// console.log(decr--);

// console.log(incr);
// console.log(decr);

// let isChecked = true,
//     isClose = true;

// console.log(isChecked && isClose);

let num = 50;
if (num < 49) {
    console.log('Неверно!')
} else if (num>100) {
    console.log('Много!')
} else {
    console.log('Верно!')
};

(num=50) ? console.log('Верно!') : console.log('Неверно!');

switch (num) {
    case num < 49:
        console.log('Неверно!');
        break;
    case num > 100:
        console.log('Много!');
        break;
    case num > 80:
        console.log('Много!');
        break;
    case num = 50:
        console.log('Верно!');
        break;}

    let num = 50
        // while (num < 55) {
        //     console.log(num);
        //     num++;
        // }
        do {
            console.log(num);
            num++;
        }
        while (num < 55);

        for (let i = 1; i < 8; i++) {
            console.log(i)
        }