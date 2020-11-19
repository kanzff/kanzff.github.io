

const char = document.getElementById("char")
const obs = document.getElementById("obs")

//function initialize() {
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

        if (obsLeft < 180 && obsLeft > 130 && charTop >= 340) {
            //console.log('nabrak')
            let endMessage = `Game Over`
            alert(endMessage)
            
        }
    }, 10);

    document.addEventListener("keydown", function (event) {
        jump()
    });
//}