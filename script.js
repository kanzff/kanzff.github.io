
const counter = document.getElementById("counter") 

//var bgm = new Audio('audio/bgm.mp3')
var auGeh = new Audio('audio/geh.mp3')
var mjump = new Audio('audio/mjump.mp3')
mjump.volume = 0.03;

let skor = 0
//let countD = `Your Score : ${skor}`


function increment() {
    counter.textContent = 'Your Score : ' + skor;
    skor++;
}

(function initialize(){
    var c = document.getElementById('obs');
    var d = document.getElementById("start")
    function addAnim() {
        setInterval('increment()', 500);
        c.classList.add('ricrush')
        // remove the listener, no longer needed
        d.removeEventListener('mouseover', addAnim);
    };

     //listen to mouseover for the container
    d.addEventListener('mouseover', addAnim);
    
})();

const char = document.getElementById("char")
const obs = document.getElementById("obs")

//alert('Are you Geh? click ok to find out')

/*const counter = document.getElementById("counter") 

let skor = 0
//let countD = `Your Score : ${skor}`


function increment() {
    counter.textContent = 'Your Score : ' + skor;
    skor++;
} */

//if () {
//setInterval('increment()', 1000);
//}



function jump() {
    if (char.classList != "jump") {
        char.classList.add("jump");
    
        setTimeout(function () {
            char.classList.remove("jump");
        }, 300)
    }
} 


let isCollision = setInterval(function () {
    let charTop = parseInt(window.getComputedStyle(char).getPropertyValue("top"));
    let obsLeft = parseInt(window.getComputedStyle(obs).getPropertyValue("left"));
    //let posAwal = parseint(window.getComputedStyle(obs).getPropertyValue("left"));

    //console.log(obsLeft)

    if (obsLeft < 230 && obsLeft > 130 && charTop >= 290) {
        //console.log('nabrak')
        auGeh.play()
        let endMessage = `You Are GEH!!!`
        alert(endMessage)
        skor = 0
        
    }
}, 10);

document.addEventListener("keydown", function (event) {
    mjump.play()
    jump()
});

