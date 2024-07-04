let scriptElement = document.querySelector('script');

let divContainer = document.createElement('div');
divContainer.classList.add('w-[300px]', 'h-[100px]', 'bg-slate-200', 'rounded-xl', 'flex', 'items-center', 'justify-center', 'flex-col');

let pElement = document.createElement('p');
pElement.innerHTML = 'Do you want to continue.'
pElement.classList.add('text-center');

divContainer.appendChild(pElement);

let actionsBtnContainer = document.createElement('div');
actionsBtnContainer.classList.add('flex', 'justify-center');

let yesBtn = document.createElement('button');
yesBtn.innerHTML = 'Yes';
yesBtn.type = 'submit';
yesBtn.classList.add('ml-4', 'text-white', 'bg-emerald-400', 'p-2', 'px-4', 'rounded-md');

let noBtn = document.createElement('button');
noBtn.innerHTML = 'No'
noBtn.type = 'submit'
noBtn.classList.add('ml-4', 'text-white', 'bg-red-500', 'p-2', 'px-4', 'rounded-md')

actionsBtnContainer.appendChild(yesBtn);
actionsBtnContainer.appendChild(noBtn);

divContainer.appendChild(actionsBtnContainer)

document.body.insertBefore(divContainer,scriptElement);
yesBtn.addEventListener('click', e => {
    alert("Thank you for saying yes.")
})

noBtn.addEventListener('click', e => {
    alert("DO you want to continue.")
})

 let topics = [
    'Getting Elements',
    'Querying the DOM',
    'Creating Elements',
    'Removing Elements',
    'Modifying Element Classes'
]

let ulElement = document.querySelector('ul');
topics.forEach(function(text){
    let liElement = document.createElement('li');
    let liText = document.createTextNode(text);
    liElement.appendChild(liText);

    ulElement.appendChild(liElement)
})

let countVowels1 = (vowels) => {
    let count = 0;
    for(let vowel of vowels){
        if(vowel == "a" || vowel == "e" ||  vowel == "i" || vowel == "o" || vowel == "u"){
            count++;
        }
    }
    console.log(`${count} vowels character in the given words.`);
}

let myArray = [90,80,83,75,92,91,95];
/*
myArray.forEach(val => {
    let result = val * val;
    console.log(result);
})
*/
/*
const output = myArray.filter( val => {
    return val > 90;
})
console.log(output)
*/
/*
let inputNumber = prompt("Enter any number");
console.log(typeof inputNumber);

let arr = [];
for(let i = 1; i <= inputNumber; i++){
    arr[i-1] = i;
    console.log(arr)
}
console.log(typeof arr)

const sum = arr.reduce( (prevs , curr) => {
    return prevs + curr;
})
console.log(sum)
*/

const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    address: {
        street: '123 Main St',
        city: 'Anytown',
        zip: '12345'
    },
    greet: function() {
        console.log('Hello!');
    }
};

// Using console.log()
console.log(person);

// Using console.dir()
console.dir(person);
let heading = document.querySelector("#heading");

const textArr = [
    "Div1",
    "Div2",
    "Div3",
]

let box = document.querySelectorAll('.box');

textArr.forEach( (val, i)=> {
        box[i].innerHTML = `<i>${val}</i>`;
})
