// Selectors
const integerInput = document.querySelector('#integer');
const oddOrEven = document.querySelector('#oddOrEven');
const voterForm = document.querySelector('#voter-eligibility-form');
const fullName = document.querySelector('#fullname');
const age = document.querySelector('#age');
const citizenship = document.querySelector('#citizenship');
const residency = document.querySelector('#residency');
const human = document.querySelector('#human');
const submitBtn = document.querySelector('#submit-btn');

// Listeners
integerInput.addEventListener('input', integerResult);
oddOrEven.addEventListener('input', oddOrEvenResult);
fullName.addEventListener('input', nameValidator);
age.addEventListener('input', ageValidator);
citizenship.addEventListener('input', citizenshipValidator);
residency.addEventListener('input', residencyValidator);
human.addEventListener('input', humanValidator);
submitBtn.addEventListener('click', checkSubmit);

// Functions
function integerResult(e) {
    const input = parseFloat(integerInput.value);
    const result = document.getElementById("integer-result");

    if(input == 0) {
        result.innerHTML = `<i class="fa-solid fa-square-0"></i> Input is Zero(0).`;
    }
    else if(input > 0) {
        result.innerHTML = `<i class="fa-solid fa-square-plus"></i> Input is a positive number.`;
    }
    else if(input < 0) {
        result.innerHTML = `<i class="fa-solid fa-square-minus"></i> Input is a negative number.`;
    }
    else {
        result.innerHTML = "<i class='fa-solid fa-circle-xmark'></i> Invalid input!";
    }
}


function oddOrEvenResult(e) {
    const input = parseFloat(oddOrEven.value);
    const result = document.getElementById('ooe-result');

    if(input % 2 == 0) {
        result.innerHTML = `<i class="fa-solid fa-circle-check"></i> Input is an Even number.`;
    }
    else if(input % 2 > 0) {
        result.innerHTML = `<i class="fa-solid fa-circle-check"></i> Input is an Odd number.`;
    }
    else {
        result.innerHTML = `<i class='fa-solid fa-circle-xmark'></i> Invalid input!`;
    }
}

function nameValidator(e) {
    const name = document.getElementById('name-validator');
    const input = fullName.value;
    
    input.length > 0 ? name.innerHTML = `<i class="fa-solid fa-circle-check"></i> Nice name!` : name.innerHTML = "<i class='fa-solid fa-circle-xmark'></i> Please enter your name";
}

function ageValidator(e) {
    const userAge = document.getElementById('age-validator');
    const input = parseFloat(age.value);

    input >= 18 ? userAge.innerHTML = `<i class="fa-solid fa-circle-check"></i> You are qualified!` : userAge.innerHTML = `<i class='fa-solid fa-circle-xmark'></i> You are not qualified!`;
}

function citizenshipValidator(e) {
    const userCitizenship = document.getElementById('citizenship-validator');
    const input = citizenship.value;

    input.toLowerCase() === 'filipino' ? userCitizenship.innerHTML = `<i class="fa-solid fa-circle-check"></i> You are qualified!` : userCitizenship.innerHTML = `<i class='fa-solid fa-circle-xmark'></i> You are not qualified!`;
}

function residencyValidator(e) {
    const userResidency = document.getElementById('residency-validator');
    const input = parseFloat(residency.value);

    input >= 1 ? userResidency.innerHTML = `<i class="fa-solid fa-circle-check"></i> You are qualified!` : userResidency.innerHTML = `<i class='fa-solid fa-circle-xmark'></i> You are not qualified!`;
}

function humanValidator(e) {
    const humanValidator = document.getElementById('human-validator');
    
    human.checked ? humanValidator.innerHTML = `<i class="fa-solid fa-circle-check"></i> You are a human!` : humanValidator.innerHTML = `<i class='fa-solid fa-circle-xmark'></i> You are not a human! Go away!`;
}

function checkSubmit(e) {
    e.preventDefault();
}
