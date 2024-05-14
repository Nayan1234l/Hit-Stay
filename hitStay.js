

var opponentSum = 0, yourSum = 0, opponentTekkaCount = 0, yourTekkaCount = 0;
var secret, deck, canHit = true;//allows the player to draw while yourSum<=21


window.onload = () => {
    constructDeck()
    shufflingDeck()
}


const constructDeck = () => {
    let values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']
    let types = ['C', 'D', 'H', 'S']//club,diamond,heart,spades
    deck = []
    //for each type we go through the whole values and push it to the deck where we play 
    for (let i = 0; i < types.length; i++) {
        for (let j = 0; j < values.length; j++) {
            deck.push(`${values[j]} - ${types[i]}`)//got here 52 cards
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