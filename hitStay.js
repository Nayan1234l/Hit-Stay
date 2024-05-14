

var opponentSum = 0, yourSum = 0, opponentTekkaCount = 0, yourTekkaCount = 0;
var secret, deck, canHit = true;//allows the player to draw while yourSum<=21


window.onload = () => {
    constructDeck()
    shufflingDeck()
    startGame()
}


const constructDeck = () => {
    let values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']
    let types = ['C', 'D', 'H', 'S']//club,diamond,heart,spades
    deck = []
    //for each type we go through the whole values and push it to the deck where we play 
    for (let i = 0; i < types.length; i++) {
        for (let j = 0; j < values.length; j++) {
            deck.push(`${values[j]}-${types[i]}`)//got here 52 cards
        }
    }
    // console.log(deck)
}

const shufflingDeck = () => {
    for (let card = 0; card < deck.length; card++) {
        let randomCard = Math.floor(Math.random() * deck.length);
        [deck[randomCard], deck[card]] = [deck[card], deck[randomCard]]
    }
    console.log(deck)
}


const startGame = () => {
    secret = deck.pop()
    opponentSum += getValue(secret);
    opponentTekkaCount += checkTekka(secret);
    // console.log(secret)
    // console.log(opponentSum)
    while (opponentSum < 17) {
        //create img tag to give the opponent if this condition match
        let imgCard = document.createElement("img");
        let card = deck.pop()
        // imgCard.src=`./cards/ ${card} .png`
        imgCard.src = "./cards/" + card + ".png"
        opponentSum += getValue(card)
        opponentTekkaCount += checkTekka(card)
        document.getElementById("opponent-cards").append(imgCard)
    }
    console.log(opponentSum)
}

const getValue = (card) => {
    let data = card.split('-')
    let value = data[0]
    //if its a char
    if (isNaN(value)) {
        if (value === 'A') {
            return 11;//because A==11 tekka
        }
        else {
            return 10;//others J Q K ==10
        }
    }
    else {
        return parseInt(value);//otherwise return the value itself
    }
}

const checkTekka = (card) => {
    if (card[0] === 'A') {
        return 1;
    }
    else {

        return 0;
    }
}