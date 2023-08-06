let sum= 0
let cards = [] //array
let hasBlack = false
let isAlive = false
let message=""

let messageEl= document.getElementById("message-el")
console.log(messageEl)

let sumEl = document.getElementById("sum-el")
console.log(sumEl)

let cardsEl = document.getElementById("cards-el")
console.log(cardsEl)

console.log(cards)

let player = {
     name: "Ayushi",
     chips: 145
}

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard()
{
    let randomNumber = Math.floor(Math.random()*13) +1
    if(randomNumber>10)
    {
        return 10
    }
    else if(randomNumber===1)
    {
        return 11
    }
    else{
        return randomNumber
    }
}

function startGame()
{
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame()
{
    sumEl.textContent = "Sum: " + sum

    cardsEl.textContent = "Cards: "

    //create a for loop that renders all the cards insteacd of just two
    for(let i=0; i<cards.length; i++)
    {
        cardsEl.textContent += cards[i] + " "
    }
    if (sum <= 20)
{
    message="Do you want to draw a new card?"
}
else if(sum === 21)
{
    message = "You've got BlackJack!!!"
    hasBlack = true
}
else
{
    message = "You're out of the game."
    isAlive = false
}

messageEl.textContent = message
}

console.log(hasBlack)
console.log(isAlive)

function newCard()
{
    if(isAlive===true && hasBlack === false) {
    let card = getRandomCard()
    sum += card
    cards.push(card)
    renderGame()
    }
}