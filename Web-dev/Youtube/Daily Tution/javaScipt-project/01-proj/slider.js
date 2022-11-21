const left = document.querySelector(".left")
const right = document.querySelector(".right")
const slider = document.querySelector(".slider")

right.addEventListener("click", () => {
    console.log("Right clicked")
    slider.style.transform = `translateX(-50vw)`
})

left.addEventListener("click", () => {
    console.log("left clicked")
})
