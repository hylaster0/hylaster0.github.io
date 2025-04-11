// Import our custom CSS
import LeagueBattleDeckImage from "../img/league_battle_deck.jpg"
import AccessoryImage from "../img/accessory.png"
import SinglesImage from "../img/singles_card_back.jpg"
import TrainerToolkit from "../img/trainers_toolkit.png"
import ETBImage from "../img/ETB.png"
import MysteryPackImage from "../img/singles_card_back.jpg"
import PackImage from "../img/booster_pack.jpg"
import BattleAcademyImage from "../img/battle_academy.jpg"
import WorldChampImage from "../img/WorldChampDeck.jpg"
import BuildAndBattleImage from "../img/BuildAndBattle.jpg"


const experienceDiv = document.createElement('div');
experienceDiv.classList.add("container");
const introText = document.createTextNode("Welcome to the product finder. By answering a few simple questions, we can help find the products best suited to your needs. To start, what level of experience does the recipient have with the game?");
experienceDiv.appendChild(introText);

// create the 3 buttons we need for this question
const noExpButton = document.createElement('button');
noExpButton.classList.add("btn");
noExpButton.classList.add("btn-primary");
noExpButton.innerText = 'Brand New';

const someExpButton = document.createElement('button');
someExpButton.classList.add("btn");
someExpButton.classList.add("btn-primary");
someExpButton.innerText = 'Some Casual Experience';

const compButton = document.createElement('button');
compButton.classList.add("btn");
compButton.classList.add("btn-primary");
compButton.innerText = 'Experienced/Competitive';

function createProductDiv(image, text, refLink){
  const myDiv = document.createElement('div');
  myDiv.classList.add("productDiv")
  myDiv.classList.add("container")
  const myImg = document.createElement('img');
  myImg.src = image;
  const myText = document.createElement('span');
  myText.innerHTML = text;
  
  const myLink = document.createElement('a');
  myLink.href = refLink;

  const linkSpanner = document.createElement('span');
  linkSpanner.classList.add("link-spanner");
  myLink.appendChild(linkSpanner);

  myDiv.appendChild(myImg);
  myDiv.appendChild(document.createElement('br'));
  myDiv.appendChild(myText);
  myDiv.appendChild(myLink);
  
  return myDiv;
}

const leagueBattleDeck = createProductDiv(LeagueBattleDeckImage, "The League Battle Deck provides an out-of-the-box competitive deck ready for local tournaments. By giving them an extra deck as a gift, they'll expand their arsenal AND have a way to teach you to play too. Why not join them?", "https://www.google.com")
const accessories = createProductDiv(AccessoryImage, "While often overlooked, card sleeves protect cards, making them essential for everyone from the most casual collector to the most competitive player. We also offer deck boxes, binders, and more.", "www.bing.com")
const ETB = createProductDiv(ETBImage, "Elite Trainer Boxes are the perfect product for casual collectors, sporting 9 booster packs, themed accessories like dice and sleeves, and an exclusive promo card.", "https://www.example.com");
const Boosters = createProductDiv(PackImage, "Each sealed booster pack comes with a randomized selection of cards. Pick some up as a supplementary gift, or go all-in with a Booster Box!", "https:www.example.com")
const MysteryPack = createProductDiv(MysteryPackImage, "Each Mystery Pack comes with 100 cards--10x the size of a regular booster pack. Even more, every mystery pack is guaranteed to feature 5 foil cards and a Pokémon ex. However, please note these cards are selected by store staff. This product is intended to serve as a gift for children and casual players and the cards in these packs are not typically suited for competitive play.", "https://www.example.com");
const TrainersToolkit = createProductDiv(TrainerToolkit, "With 4 booster packs, a guaranteed set of 50+ powerful cards to upgrade decks, and gameplay accessories, this product appeals to both casual and competitive players.", "https://www.example.com")
const BattleAcademy = createProductDiv(BattleAcademyImage, "The Battle Academy is the perfect introduction to card games. Each set comes with THREE complete decks, a game board, and even a step-by-step tutorial to teach you the rules of the game.The Battle Academy is the perfect introduction to card games. Each set comes with THREE complete decks, a game board, and even a step-by-step tutorial to teach you the rules of the game.", "https://www.example.com")
const WorldChampDeck = createProductDiv(WorldChampImage, "World Championship Decks are official replicas of professional players' decks, guaranteeing the strategies within are powerful and complete. For older players or those with previous card game experience, these products offer the complete Pokémon package at the best price possible. However, these decks are printed with special commemorative cardbacks, making them ineligible for competitive touranment play.", "https://www.example.com")
const BuildAndBattle = createProductDiv(BuildAndBattleImage, "Build & Battle Boxes provide premade 40-card decks, 4 booster packs, and an exclusive promo card. Designed initially for prerelease play, casual players can experience the thrill of opening packs and modifying the included deck with the contents. Please note tournament-legal decks typically require 60 cards.", "https://www.example.com")
const Singles = createProductDiv(SinglesImage, "Upgrading a competitive deck is difficult when pulling random cards from Booster Packs, and rare cards can often cost $10 or more. Try asking directly if there are any cards they need, or go for high rarity versions of 'Staple' cards like the ones suggested at https://www.justinbasil.com/guide/appendix2", "https://www.example.com")

function compInterestClicked(){
  casualDiv.style.display = "none"
  const competitiveDiv = document.createElement('div');
  competitiveDiv.classList.add("container");
  const compInterestIntro = document.createElement('span');
  compInterestIntro.innerText = "Jumping into competitive play can be exciting! Let's take a look at products that help modify existing decks, provide new decks out-of-the-box, and the other game pieces needed for the tournament-aspiring player."
  
  const suggestionList = document.createElement('div')
  suggestionList.appendChild(TrainersToolkit);
  suggestionList.appendChild(leagueBattleDeck);
  suggestionList.appendChild(accessories);
  competitiveDiv.appendChild(suggestionList);
  document.body.appendChild(competitiveDiv);

}

function casualInterestClicked(){
  casualDiv.style.display = "none"
  const funDiv = document.createElement('div');
  const casualInterestIntro = document.createElement('span');
  casualInterestIntro.innerText = "The classic casual TCG experience involves opening Booster Packs and building decks from a personalized collection. Several products below also offer additional accessories like dice, card sleeves, and coins."
  funDiv.appendChild(casualInterestIntro)

  const suggestionList = document.createElement('div');
  suggestionList.appendChild(TrainersToolkit)
  suggestionList.appendChild(Boosters)
  suggestionList.appendChild(ETB)
  suggestionList.appendChild(MysteryPack)
  funDiv.appendChild(suggestionList)
  document.body.appendChild(funDiv)
}

const newPlayerDiv = document.createElement('div');
const newPlayerText = document.createElement('span');
newPlayerText.innerText = "How does the recipient plan to engage with the TCG?"
newPlayerDiv.appendChild(newPlayerText);
newPlayerDiv.appendChild(document.createElement('br'));

function newCompClicked() {
  newPlayerDiv.style.display = "none";

  const competitiveDiv = document.createElement('div');
  competitiveDiv.classList.add("container");
  const compInterestIntro = document.createElement('span');
  compInterestIntro.innerText = "Jumping into competitive play can be exciting! Let's take a look at products that help modify existing decks, provide new decks out-of-the-box, and the other game pieces needed for the tournament-aspiring player."

  const suggestionList = document.createElement('div')
  suggestionList.appendChild(leagueBattleDeck);
  suggestionList.appendChild(TrainersToolkit);
  suggestionList.appendChild(accessories);
  competitiveDiv.appendChild(compInterestIntro)
  competitiveDiv.appendChild(suggestionList);
  document.body.appendChild(competitiveDiv);

}

function newCasualClicked() {
  newPlayerDiv.style.display = "none";

  const funDiv = document.createElement('div');
  const casualInterestIntro = document.createElement('span');
  casualInterestIntro.innerText = "Pokémon has several products designed specifically with new players in mind! If the players are young or new to card games, check out the Battle Academy. If you're looking for the full TCG experience, check out the World Championship Decks."
  funDiv.appendChild(casualInterestIntro)

  const suggestionList = document.createElement('div');
  suggestionList.appendChild(BattleAcademy);
  suggestionList.appendChild(WorldChampDeck);
  suggestionList.appendChild(BuildAndBattle);

  funDiv.append(suggestionList)
  document.body.appendChild(funDiv)
}

function newCollectorClicked() {
  newPlayerDiv.style.display = "none";
  const collectorDiv = document.createElement('div');
  const collectorIntro = document.createElement('span');
  collectorIntro.innerText = "Opening packs is the fastest way to build a collection! But new collectors are also in need of ways to protect and display them! Our recommended products below cover both bases."

  const suggestionList = document.createElement('div');
  suggestionList.appendChild(Boosters)
  suggestionList.appendChild(ETB)
  suggestionList.appendChild(MysteryPack)
  suggestionList.appendChild(accessories)
  collectorDiv.appendChild(collectorIntro)
  collectorDiv.appendChild(suggestionList)
  document.body.appendChild(collectorDiv)

}

function noExpClicked(){
  experienceDiv.style.display = "none";

  const compInterest = document.createElement('button');
  compInterest.classList.add("btn");
  compInterest.classList.add("btn-primary");
  compInterest.innerText = "Competitive Play";

  const casualInterest = document.createElement('button');
  casualInterest.classList.add("btn");
  casualInterest.classList.add("btn-primary");
  casualInterest.innerText = "Casual Play";

  const collectingInterest = document.createElement('button');
  collectingInterest.classList.add("btn");
  collectingInterest.classList.add("btn-primary");
  collectingInterest.innerText = "Collecting!"

  compInterest.addEventListener('click', () => {
    newCompClicked();
  })

  casualInterest.addEventListener('click', () => {
    newCasualClicked();
  })

  collectingInterest.addEventListener('click', () => {
    newCollectorClicked();
  })

  newPlayerDiv.appendChild(compInterest)
  newPlayerDiv.appendChild(casualInterest)
  newPlayerDiv.appendChild(collectingInterest)
  document.body.appendChild(newPlayerDiv);
}

const casualDiv = document.createElement('div');
casualDiv.classList.add("container");
const casualIntroText = document.createTextNode("Is the recipient looking to join competitive play, or do they plan to continue casually playing?");
casualDiv.appendChild(casualIntroText);
casualDiv.appendChild(document.createElement('br'));

function someExpClicked(){
  experienceDiv.style.display = "none";

  const compInterest = document.createElement('button');
  compInterest.classList.add("btn");
  compInterest.classList.add("btn-primary");
  compInterest.innerText = 'Competitive Interest';

  const casualInterest = document.createElement('button');
  casualInterest.classList.add("btn");
  casualInterest.classList.add("btn-primary");
  casualInterest.innerText = 'Just Having Fun';

  compInterest.addEventListener('click', () => {
    compInterestClicked();
  })

  casualInterest.addEventListener('click', () => {
    casualInterestClicked();
  })

  casualDiv.appendChild(compInterest);
  casualDiv.appendChild(casualInterest);
  document.body.appendChild(casualDiv);
}

function competitiveClicked(){
  // competitive players have a few specific items to recommend, so we end the page here.
  experienceDiv.style.display = "none";

  const competitiveDiv = document.createElement('div');
  competitiveDiv.classList.add("container");
  const introText = document.createTextNode("Competitive players tend to have established collections, which can making finding the perfect gift a challenge. Nevertheless, here are our best suggestions.");
  
  const suggestionList = document.createElement('div')

  const suggestion2 = document.createElement('div')
  const image2 = document.createElement('img')
  image2.src = SinglesImage
  const suggestionText2 = document.createTextNode("Upgrading a competitive deck is difficult when pulling random cards from Booster Packs, and rare cards can often cost $10 or more. Try asking directly if there are any cards they need, or go for high rarity versions of 'Staple' cards like the ones suggested at https://www.justinbasil.com/guide/appendix2");

  suggestion2.appendChild(image2);
  suggestion2.appendChild(suggestionText2);
  suggestionList.appendChild(leagueBattleDeck);
  suggestionList.appendChild(accessories);
  suggestionList.appendChild(Singles);
  competitiveDiv.appendChild(introText);
  competitiveDiv.appendChild(suggestionList);
  document.body.appendChild(competitiveDiv);
}

someExpButton.addEventListener('click', () => {
  someExpClicked();
})
// 2. Add an event listener to the button (optional)
compButton.addEventListener('click', () => {
  competitiveClicked();
});

noExpButton.addEventListener('click', () => {
  noExpClicked();
})
// 3. Append the buttons to the div, and the div to the page
experienceDiv.appendChild(noExpButton);
experienceDiv.appendChild(someExpButton);
experienceDiv.appendChild(compButton);
document.body.appendChild(experienceDiv);