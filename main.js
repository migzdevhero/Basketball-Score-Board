let homeScore=document.querySelector("#homeScore")
let homeCount = 0
let guestScore=document.querySelector("#guestScore")
let guestCount = 0


function homeOnePoint () {
    homeCount += 1
    homeScore.innerHTML = homeCount
}
function homeTwoPoint () {
    homeCount += 2
    homeScore.innerHTML = homeCount
}
function homeThreePoint () {
    homeCount += 3
    homeScore.innerHTML = homeCount
}
function guestOnePoint () {
    guestCount += 1
    guestScore.innerHTML = guestCount
}
function guestTwoPoint () {
    guestCount += 2
    guestScore.innerHTML = guestCount
}
function guestThreePoint () {
    guestCount += 3
    guestScore.innerHTML = guestCount
}
function reset() {
    document.querySelector('#homeScore').innerHTML = "0"
    document.querySelector('#guestScore').innerHTML = "0"
}