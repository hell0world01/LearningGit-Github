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

let companies = ["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
console.log(companies.shift());
console.log(companies);
console.log(companies.splice(1,1,"Ola"));
console.log(companies);
console.log(companies.push("Amazon"))
console.log(companies)