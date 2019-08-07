// "use strict";

// console.log('Czołem! :)');
// const name = 'Kaka';
// const age = 33;
// console.log(name);
// console.log(age);

// console.log(`Nazywam się ${name} i mam ${age} lata`);
// console.log('Siemano');

// const about = document.querySelector('.about__paragraph--js');
// console.log(about.innerHTML);
// about.innerHTML = 'Pozdro <strong>JS</strong>';

// const paragraphs = document.querySelectorAll('p');
// console.log(paragraphs);
// console.log(paragraphs[0]);
// if ('JavaScript'!= 'Java') {
//     console.log('to prawda!')
// }
// if (age < 20) {
// console.log('masz mniej niz 20 lat');
// } else if ((age >= 20) && (age <= 30)) {
//     console.log('masz wiecej niz 20 lat, ale mniej niz 30 lat')

// } else {
// console.log('jestes 31+');
// }
// switch (age) {
//     case 20:
// console.log('masz równo 20 lat');
//     break;
//     case 30:
//         console.log('masz równo 30 lat');
//         break;
//         default:
//                 console.log(`masz ${age} lata`);
//                 break;
// }
// const amIOld = (age > 70) ? 'yes' : 'n';
// console.log(amIOld);

// function calculate(x) {
//     x = x + 3;
//     console.log(`tracycyjnie ${x}`);
//     return x*7
// }

// console.log(calculate(2));


// const calculatefat = x => (x+3)*7;

// console.log(calculatefat(2));

// function writeName(yourname, yourage) {
//     console.log(yourname, yourage);
// }
// writeName("Kaka", 33);

// const welcome = (name, age) => {
//     console.log(`Witaj ${name},masz ${age} lata`);

// }
// welcome('Koko', 33);

// const button = document.querySelector('.main__button--js');
// console.log(button);

// function handleClick() {
//     console.log('halo');
// }

// button.addEventListener('click', (e) => {
//     const header = document.querySelector('.main__header--js');
//     header.innerHTML = 'klik klik';
//     header.classList.toggle('main__header--pink');
//     if  (header.classList.contains('main__header--pink')) {
//         console.log('jest klasa');
//     }
//     else {
//     console.log('brak klasy');}
// })


// const navigationSwitcher = document.querySelector('.navigation__switcher--js');


// navigationSwitcher.addEventListener('click', (e) => {
//     const navigationList = document.querySelector('.navigation__list--js');
//     navigationList.classList.toggle('navigation__list--visable');
// })

// const faces = ['😎', '😱', '😱', 'test'];
// for (let i = 0; i < faces.length; i++) {
//     console.log(`i: ${i}`);
//  console.log(`na miejscu ${i+1} jest ${faces[i]}`);
// }

// let a = 10;

// while (a >0) {
//     a--;
//     console.log(a);
// }


// let n = 9;
// do {
//  console.log(n);
//  n = n + 3;
// } while (n < 9);
// console.log(n)

// const person = {
//     name: 'kaka',
//     age: 33
//    }
//    for (let propertyName in person) {
//     console.log(`${propertyName}: ${person[propertyName]}`);
//    }

//    const elements = ['😎', '🤯', '😱'];
// for (let element of elements) {
//  console.log(element);
// }

// const person = {
//     name: 'kaka',
//     age: 33
//     } 

//     console.log(person);

// const jsonPErson = JSON.stringify(person);

// console.log(jsonPErson);

// //localStorage.setItem('person', jsonPErson);

// //console.log(localStorage.getItem('person'));

// const personStringify = localStorage.getItem('person');
// const newPerson = JSON.parse(personStringify);
// console.log(newPerson);

const focusInput = document.querySelector('.focus--js');

//if (localStorage.getItem('focusInput').length > 0) {
//    focusInput.value = localStorage.getItem('focusInput');
//}

focusInput.addEventListener('keyup', (e) => {
    localStorage.setItem('focusInput', e.target.value);
});
