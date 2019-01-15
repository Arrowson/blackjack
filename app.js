
class player{
    constructor(){
        this.money = 500;
    }
    bet(amount){
        this.money -= amount;
        console.log(this.money);
    }
}
class card{
    constructor(suit, value, link){
        this.suit = suit;
        this.value = value;
        this.link = link;
    }
}



var player1 = new player();
var player2 = new player();
var deck;
var playerCount;

function BuildDeck(){
        deck = [
        new card("Spades", 2, "Cards/2Spades.jpg"),
        new card("Spades", 3, "Cards/3Spades.jpg"),
        new card("Spades", 4, "Cards/4Spades.jpg"),
        new card("Spades", 5, "Cards/5Spades.jpg"),
        new card("Spades", 6, "Cards/6Spades.jpg"),
        new card("Spades", 7, "Cards/7Spades.jpg"),
        new card("Spades", 8, "Cards/8Spades.jpg"),
        new card("Spades", 9, "Cards/9Spades.jpg"),
        new card("Spades", 10, "Cards/10Spades.jpg"),
        new card("Spades", 10, "Cards/JSpades.jpg"),
        new card("Spades", 10, "Cards/QSpades.jpg"),
        new card("Spades", 10, "Cards/KSpades.jpg"),
        new card("Spades", 11, "Cards/ASpades.jpg"),
        
        new card("Diamonds", 2, "Cards/2Diamonds.jpg"),
        new card("Diamonds", 3, "Cards/3Diamonds.jpg"),
        new card("Diamonds", 4, "Cards/4Diamonds.jpg"),
        new card("Diamonds", 5, "Cards/5Diamonds.jpg"),
        new card("Diamonds", 6, "Cards/6Diamonds.jpg"),
        new card("Diamonds", 7, "Cards/7Diamonds.jpg"),
        new card("Diamonds", 8, "Cards/8Diamonds.jpg"),
        new card("Diamonds", 9, "Cards/9Diamonds.jpg"),
        new card("Diamonds", 10, "Cards/10Diamonds.jpg"),
        new card("Diamonds", 10, "Cards/JDiamonds.jpg"),
        new card("Diamonds", 10, "Cards/QDiamonds.jpg"),
        new card("Diamonds", 10, "Cards/KDiamonds.jpg"),
        new card("Diamonds", 11, "Cards/ADiamonds.jpg"),
        
        new card("Clubs", 2, "Cards/2Clubs.jpg"),
        new card("Clubs", 3, "Cards/3Clubs.jpg"),
        new card("Clubs", 4, "Cards/4Clubs.jpg"),
        new card("Clubs", 5, "Cards/5Clubs.jpg"),
        new card("Clubs", 6, "Cards/6Clubs.jpg"),
        new card("Clubs", 7, "Cards/7Clubs.jpg"),
        new card("Clubs", 8, "Cards/8Clubs.jpg"),
        new card("Clubs", 9, "Cards/9Clubs.jpg"),
        new card("Clubs", 10, "Cards/10Clubs.jpg"),
        new card("Clubs", 10, "Cards/JClubs.jpg"),
        new card("Clubs", 10, "Cards/QClubs.jpg"),
        new card("Clubs", 10, "Cards/KClubs.jpg"),
        new card("Clubs", 11, "Cards/AClubs.jpg"),
        
        new card("Hearts", 2, "Cards/2Hearts.jpg"),
        new card("Hearts", 3, "Cards/3Hearts.jpg"),
        new card("Hearts", 4, "Cards/4Hearts.jpg"),
        new card("Hearts", 5, "Cards/5Hearts.jpg"),
        new card("Hearts", 6, "Cards/6Hearts.jpg"),
        new card("Hearts", 7, "Cards/7Hearts.jpg"),
        new card("Hearts", 8, "Cards/8Hearts.jpg"),
        new card("Hearts", 9, "Cards/9Hearts.jpg"),
        new card("Hearts", 10, "Cards/10Hearts.jpg"),
        new card("Hearts", 10, "Cards/JHearts.jpg"),
        new card("Hearts", 10, "Cards/QHearts.jpg"),
        new card("Hearts", 10, "Cards/KHearts.jpg"),
        new card("Hearts", 11, "Cards/AHearts.jpg"),
        ];
}

function Deal(){
    //player's initial hand
    var cardNumber = Math.floor(Math.random() * deck.length);
    $("#playerFirstCard").attr("src", deck[cardNumber].link)
    playerCount = deck[cardNumber].value;
    console.log(playerCount)
    deck.splice(cardNumber, 1);
    console.log(deck);
    cardNumber = Math.floor(Math.random() * deck.length)
    $("#playerSecondCard").attr("src", deck[cardNumber].link)
    playerCount += deck[cardNumber].value;
    deck.splice(cardNumber, 1);
    console.log(playerCount)
    $("#playerCount").text(playerCount)
    //dealer's initial hand
    cardNumber = Math.floor(Math.random() * deck.length)
    $("#dealerFirstCard").attr("src", deck[cardNumber].link)
    deck.splice(cardNumber, 1);
    
}

$( document ).ready(function() {
    /*
    $("#dealerFirstCard").click(function() {
        $("#dealerFirstCard").attr("src", "Cards/2Spades.jpg")
    })
    */
    BuildDeck();
    console.log(deck)
    Deal();
});