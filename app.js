const cards = document.querySelectorAll(".card")

let matched = 0;

let score = 0;

let time = document.querySelector(".time")
let scoreResult = document.querySelector(".score")
let refresh = document.querySelector(".refresh")

let cardOne, cardTwo;
let disableDeck = false;


function flipCard(e){
    let clickedCard = e.target; // getting user clicked card
    if(clickedCard !== cardOne && !disableDeck){
        clickedCard.classList.add("flip")
            if(!cardOne){
                // return the cardOne value to clickedCard
                return cardOne = clickedCard
            }
    cardTwo = clickedCard
        disableDeck = true
    let cardOneImg = cardOne.querySelector("img").src
    let cardTwoImg = cardTwo.querySelector("img").src
    matchCards(cardOneImg, cardTwoImg)
    }
}

function matchCards(img1, img2){
    if(img1 === img2){
        matched++
        score++
        scoreResult.innerHTML = score;
        if(matched == 8){
            scoreResult.innerHTML = "You won!"
            score = 0;
            scoreResult.innerHTML = score
            setTimeout( ()=> {
            return shuffleCard();
           }, 1000)
        }
        cardOne.removeEventListener("click", flipCard)
        cardTwo.removeEventListener("click", flipCard)
        cardOne = cardTwo = ""
        return disableDeck = false;  // returning if the two cards are matched so the bottom codes won't run
    }
    
    setTimeout(() => {
        cardOne.classList.add("shake")
        cardTwo.classList.add("shake")
    }, 300);


    setTimeout(() => {
        cardOne.classList.remove("shake", "flip")
        cardTwo.classList.remove("shake", "flip")
        cardOne = cardTwo = ""
        disableDeck = false
    }, 1100);
}

function shuffleCard(){
    matched = 0
    cardOne = cardTwo = ""
    disableDeck = false

    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8]
    arr.sort(() => Math.random() > 0.5 ? 1 : -1) // sorting array item randomly


    // removing flip class from all cards and passing randomg image to each card
    cards.forEach((card, index) => {
        card.classList.remove("flip")
        let imgTag = card.querySelector("img")
        imgTag.src = `./img/img-${arr[index]}.png`
        card.addEventListener("click", flipCard)
    })
}

shuffleCard()

cards.forEach(card => {
    card.addEventListener("click", flipCard)
})



