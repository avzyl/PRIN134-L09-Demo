function highlightIngredients() {
    const collection = document.getElementById("recipe-ingredients").children;
    for (let i = 0; i < collection.length; i++) {
        if (i % 2 === 0) {
        collection[i].style.backgroundColor = 'pink';
        } else {
        collection[i].style.backgroundColor = 'white';
        }
    }
}

let intervalId; 

function checkInstructions() {
    const instructions = document.querySelectorAll('#recipe-instructions li');
    let index = 0;

    intervalId = setInterval(() => { 
        if (index < instructions.length) {
            instructions[index].style.color = 'green';
            instructions[index].textContent += ' - Checked';
            index++;
        } else {
            clearInterval(intervalId);
        }
    }, 3000);
}

function resetInstructions() {
    const instructions = document.querySelectorAll('#recipe-instructions li');

    clearInterval(intervalId); 
    instructions.forEach(item => {
        item.style.color = '';
        item.textContent = item.textContent.replace(' - Checked', ''); 
    });
}

function ingFunction() {
    const element = document.getElementById("ingredients");
    element.classList.add("animate__animated", "animate__bounce");

    element.addEventListener("animationend", () => {
        element.classList.remove("animate__animated", "animate__bounce");
    });
}

function insFunction() {
    const element = document.getElementById("instructions");
    element.classList.add("animate__animated", "animate__rubberBand");

    element.addEventListener("animationend", () => {
        element.classList.remove("animate__animated", "animate__rubberBand");
    });
}

function cakeFunction() {
    const element = document.getElementById("cake");
    element.classList.add("animate__animated", "animate__heartBeat");

    element.addEventListener("animationend", () => {
        element.classList.remove("animate__animated", "animate__heartBeat");
    });
}

