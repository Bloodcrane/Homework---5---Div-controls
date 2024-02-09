const container = document.body.querySelector(".container");
const toggleBtn = document.getElementById("toggleBtn");
const textDiv = document.getElementById("textDiv");
const textArr = ["Lotus Flower", "Treefingers", "Morning bell"]

// console.log(container, toggleBtn, textDiv)

let isToggled = true;

toggleBtn.addEventListener('click', function() {
    isToggled = !isToggled;
    toggleDiv();
    // console.log(isToggled)
});

const toggleDiv = () => {
    if (isToggled) { 
        textDiv.style.backgroundColor = "#131313a4" 
        textDiv.style.color = "#fff" 
        textDiv.style.boxShadow = '0 0 0 2px #fff';
    } 
        else {
        textDiv.style.backgroundColor = "#13131300"
        textDiv.style.color = "#13131300"
        textDiv.style.boxShadow = '0 0 0 2px #ffffff23'; // მთლიანად არ დავმალე რადგან ასე უფრო ლამაზია
    }
}

const randomizeText = () => {
    textDiv.textContent = textArr[Math.floor(Math.random() * textArr.length)]
}
randomizeText();