const unicorn = document.getElementById("unicorn");
const spike = document.getElementById("spike");

document.addEventListener("keydown", function(event) {
    jump();
});

function jump () {
    if (unicorn.classList != "jump") {
        unicorn.classList.add("jump")
    }
    setTimeout( function() {
        unicorn.classList.remove("jump")
    }, 300)
}

let isAlive = setInterval ( function() {
    let unicornTop = parseInt(window.getComputedStyle(unicorn).getPropertyValue("top"));
    let spikeLeft = parseInt(window.getComputedStyle(spike).getPropertyValue("left"));

    if (spikeLeft < 50 && spikeLeft > 0 && unicornTop >=140) {
        alert("Game over!")
    }
}, 10)