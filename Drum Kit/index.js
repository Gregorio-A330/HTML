/*----------Detecting Button Press---------------*/
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        //criar uma nova variavel para receber "o innerHTML de drum" em this.innerHTML quando clicar em um botão ele pega a letra correspondente que recebe do FOR e aplica na variavel 
        //ou seja ele vai pegar o index do querySelectorAll indicando qual posição e chamar o pelo  this.innerHTML atribuindo em uma variavel
        var buttonInnerHTML = this.innerHTML
        // para assim jogar no swith case e executar o que foi definido
        //ao clicar no botão joga na função o innerHTML correspondente
        makeSound(buttonInnerHTML)
        buttonAnimation(buttonInnerHTML)
    });
}
// adiciona um evento de listener para toda a pagina e joga na função o event.key ou seja a tecla que foi pressionada no teclado

/* --------------Detecting Keyboard Press---------------*/
//função de alta ordem, função que recebe outra função como parametro
document.addEventListener("keydown", function (event) {
    makeSound(event.key)
    buttonAnimation(event.key)

})

// dois casos para uma função, uma ao clicar no botão e outra ao pressionar no teclado
function makeSound(key) {
    switch (key) {
        case "w":
            var tom1 = new Audio("./sounds/tom-1.mp3")
            tom1.play()
            break;
        case "a":
            var tom2 = new Audio("./sounds/tom-2.mp3")
            tom2.play()
            break;
        case "s":
            var tom3 = new Audio("./sounds/tom-3.mp3")
            tom3.play()
            break;
        case "d":
            var tom4 = new Audio("./sounds/tom-4.mp3")
            tom4.play()
            break;
        case "j":
            var snare = new Audio("./sounds/snare.mp3")
            snare.play()
            break;
        case "k":
            var crash = new Audio("./sounds/crash.mp3")
            crash.play()
            break;
        case "l":
            var kick = new Audio("./sounds/kick-bass.mp3")
            kick.play()
            break;
        default:
            break;
    }
}

function buttonAnimation(currentKey){

    var activeButton = document.querySelectorAll("."+ currentKey);

    activeButton.classList.add("pressed");
    setTimeout(function () {
        activeButton.classList.remove("pressed");
    }, 100);

}