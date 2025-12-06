// Deck class

class Deck {
    constructor(){
        this.deck = [];
        this.ranks = [
            "Ace",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "10",
            "Jack",
            "Queen",
            "King"
        ];
        this.suits = [
            "Hearts ♥ ", "Spades ♦ ", "Diamonds ♦ ", "Clubs ♠"
        ]
    }

// Deal 26 Cards to each Player from a Deck of 52 cards.

createDeck() {
    for (let i = 0; i < this.suits.length; i++) {
        for (let j = 0; j < this.ranks.length; j++) {
        let card = {
             name: `${this.ranks[j]} of ${this.suits[i]}` ,
                value: j + 1
        
            }

            this.deck.push(card)
            }
        }
    }
    // Iterate through the turns where each Player plays a Card.
    shuffleDeck() {
        for (let i = this.length - 1; i > 0; i--){
            let j = Math.floor(Math.random() * (i + 1));
        
            [this.deck[i], this.deck[j]] = [this.deck[j], this.deck[i]];
        }
    }
}

class Game {
    constructor() {
        this.player1 = {
            name: 'Player 1 ',
            score: 0,
            hand: []
        }
        this.player2 = {
            name: 'Player 2 ',
            score: 0,
            hand: []
    }

}

playGame() {

    const deck = new Deck
deck.createDeck()
deck.shuffleDeck()
console.log(deck)
while (deck.deck.length !== 0) {

    this.player1.hand.push(deck.deck.shift())
    this.player2.hand.push(deck.deck.shift())
}
// The Player who played the higher card is awarded a point.
// -Ties result in zero points for both Players
console.log(this.player1.hand)
for(let i = 0; i < this.player1.hand.length; i++) {

    if(this.player1.hand[i].value > this.player2.hand[i].value){
        this.player1.score ++
        console.log(`
            P1 Card: ${this.player1.hand[i].name}
            P1 Card: ${this.player2.hand[i].name}
            Player 1 wins a point!
            Current Score: p1: ${this.player1.score}, p2: ${this.player2.score}
            `)
    }else if(this.player2.hand[i].value > this.player1.hand[i].value){
        this.player2.score ++
        console.log(`
            P1 Card: ${this.player1.hand[i].name}
            P1 Card: ${this.player2.hand[i].name}
            Player 2 wins a point!
            Current Score: p1: ${this.player1.score}, p2: ${this.player2.score}
            `)
}else{
    console.log(`
            P1 Card: ${this.player1.hand[i].name}
            P1 Card: ${this.player2.hand[i].name}
            Tie: No points awarded! 
            Current Score: p1: ${this.player1.score}, p2: ${this.player2.score}
            `)

}
// After all cards have been played, display the score and declare the winner.

if (this.player1.score > this.player2.score){
    console.log(`Player 1 wins!
    Final Score: p1: ${this.player1.score}
                 p2: ${this.player2.score}
                     `)
} else if ( this.player2.score > this.player1.score) {
 console.log(`Player 2 wins!
    Final Score: p1: ${this.player1.score}
                 p2: ${this.player2.score}
                 `)   
} else {
    console.log('Tie')
}

}

console.log(this.player1.hand)
console.log(this.player2.hand)
}

}

const game = new Game
game.playGame()






