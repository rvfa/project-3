// console.log('Ready!')

// This will hide the player name form and game screen so only the start button show up
document.querySelector(".player-name").style.visibility = "hidden";
document.querySelector(".game-screen").style.visibility = "hidden";
document.querySelector(".battle-round").style.visibility = "hidden";

// This will hide the start button and show the player name form
function startGame() {
    document.querySelector(".start-button").style.visibility = "hidden";
    document.querySelector(".player-name").style.visibility = "visible";
}

// this holds the player name
var heroName;

// This sets the name chosen by the user
function setPlayerName() {
    heroName = document.querySelector(".hero-name").value;
    // console.log(heroName);

    // This transitions from the name form to the actual game
    document.querySelector(".player-name").style.visibility = "hidden";
    document.querySelector(".game-screen").style.visibility = "visible";
    document.querySelector(".player-name-chosen").innerHTML = heroName;
    document.querySelector(".battle-round").style.visibility = "visible";
}




// Starting player stats
var playerStats = {
    playerHP: 100,
    playerWeapon: "Basic Sword",
    playerPower: 10
};

// Writes the player stats to the DOM
document.querySelector(".player-hp").textContent = playerStats.playerHP;
document.querySelector(".player-weapon").textContent = playerStats.playerWeapon;




// round # displayed on top. Starts at 1 and increases as enemies get defeated
var battleRound = document.querySelector(".battle-round");
battleRound.textContent = "Round 1";




// Basic enemy object prototype
function Enemy(name, enemyHP, enemyPower) {
    this.name = name;
    this.enemyHP = enemyHP;
    this.enemyPower = enemyPower;
}

// List of all enemies
var enemyOne = new Enemy("An Angry Fly", 20, 5);
var enemyTwo = new Enemy("A Mad Giraffe", 30, 5);
var enemyThree = new Enemy("An Alcoholic Chicken", 35, 5);
var enemyFour = new Enemy("A Sad Cow", 35, 6);
var enemyFive = new Enemy("A Cool Fish", 40, 6);
var enemySix = new Enemy("A Sick Soda Can", 45, 1);
var enemySeven = new Enemy("A Furious Panda", 50, 7);
var enemyEight = new Enemy("A Smart Octopus", 55, 7);
var enemyNine = new Enemy("A Suspicious Owl", 60, 5);
var enemyTen = new Enemy("A Psychotic Squirrel", 75, 8);

// these are used to display the enemies infos
document.querySelector(".enemy-one-name").textContent = enemyOne.name;
document.querySelector(".enemy-one-hp").textContent = enemyOne.enemyHP;
document.querySelector(".enemy-one-power").textContent = enemyOne.enemyPower;

document.querySelector(".enemy-two-info").style.visibility = "hidden";
document.querySelector(".enemy-two-name").textContent = enemyTwo.name;
document.querySelector(".enemy-two-hp").textContent = enemyTwo.enemyHP;
document.querySelector(".enemy-two-power").textContent = enemyTwo.enemyPower;

document.querySelector(".enemy-three-info").style.visibility = "hidden";
document.querySelector(".enemy-three-name").textContent = enemyThree.name;
document.querySelector(".enemy-three-hp").textContent = enemyThree.enemyHP;
document.querySelector(".enemy-three-power").textContent = enemyThree.enemyPower;

document.querySelector(".enemy-four-info").style.visibility = "hidden";
document.querySelector(".enemy-four-name").textContent = enemyFour.name;
document.querySelector(".enemy-four-hp").textContent = enemyFour.enemyHP;
document.querySelector(".enemy-four-power").textContent = enemyFour.enemyPower;

document.querySelector(".enemy-five-info").style.visibility = "hidden";
document.querySelector(".enemy-five-name").textContent = enemyFive.name;
document.querySelector(".enemy-five-hp").textContent = enemyFive.enemyHP;
document.querySelector(".enemy-five-power").textContent = enemyFive.enemyPower;

document.querySelector(".enemy-six-info").style.visibility = "hidden";
document.querySelector(".enemy-six-name").textContent = enemySix.name;
document.querySelector(".enemy-six-hp").textContent = enemySix.enemyHP;
document.querySelector(".enemy-six-power").textContent = enemySix.enemyPower;

document.querySelector(".enemy-seven-info").style.visibility = "hidden";
document.querySelector(".enemy-seven-name").textContent = enemySeven.name;
document.querySelector(".enemy-seven-hp").textContent = enemySeven.enemyHP;
document.querySelector(".enemy-seven-power").textContent = enemySeven.enemyPower;

document.querySelector(".enemy-eight-info").style.visibility = "hidden";
document.querySelector(".enemy-eight-name").textContent = enemyEight.name;
document.querySelector(".enemy-eight-hp").textContent = enemyEight.enemyHP;
document.querySelector(".enemy-eight-power").textContent = enemyEight.enemyPower;

document.querySelector(".enemy-nine-info").style.visibility = "hidden";
document.querySelector(".enemy-nine-name").textContent = enemyNine.name;
document.querySelector(".enemy-nine-hp").textContent = enemyNine.enemyHP;
document.querySelector(".enemy-nine-power").textContent = enemyNine.enemyPower;

document.querySelector(".enemy-ten-info").style.visibility = "hidden";
document.querySelector(".enemy-ten-name").textContent = enemyTen.name;
document.querySelector(".enemy-ten-hp").textContent = enemyTen.enemyHP;
document.querySelector(".enemy-ten-power").textContent = enemyTen.enemyPower;

// This will be used to change the function being called once the attack button is clicked
var bttnAttr = document.querySelector(".player-attack");


// these functions below are used to calculate damage taken and done and update rounds and enemies. There's is one function for each enemy.
function playerAttack() {
        // Calculates player damage
        var playerDamage = playerStats.playerPower + (Math.floor(Math.random() * 10) + 1);
        // Writes how much damage the player did to the DOM
        document.querySelector(".enemy-dmg-taken").textContent = "You did " + playerDamage + " damage";
        // Subtracts the damage done from the enemy's remaining HP
        enemyOne.enemyHP -= playerDamage;
        // Updates the enemy HP shown on the DOM
        document.querySelector(".enemy-one-hp").textContent = enemyOne.enemyHP;

        // Calculates enemy damage
        var enemyDamage = enemyOne.enemyPower + (Math.floor(Math.random() * 10) + 1);
        // Writes how much damage the enemy did to the DOM
        document.querySelector(".player-dmg-taken").textContent = "You took " + enemyDamage + " damage";
        // Subtracts enemy damage from the player's remaining HP
        playerStats.playerHP -= enemyDamage;
        // Updates the player HP
        document.querySelector(".player-hp").textContent = playerStats.playerHP;

        // If the player's HP reaches 0 they will alerted and the page refreshed
        if (playerStats.playerHP < 1) {
            alert("You died =(");
            location = location;
        }

    // Once the enemy is defeated, its infos are hidden, the next enemy becomes visible, the round # is updated and the function being called by the attacked button is changed.
    if (enemyOne.enemyHP < 1) {
        document.querySelector(".enemy-one-info").style.visibility = "hidden";
        document.querySelector(".enemy-two-info").style.visibility = "visible";
        document.querySelector(".battle-round").textContent = "Round 2";
        bttnAttr.setAttribute("onclick", "playerAttackTwo();");
    }
}


function playerAttackTwo() {
    // Calculates player damage
    var playerDamage = playerStats.playerPower + (Math.floor(Math.random() * 10) + 1);
    // Writes how much damage the player did to the DOM
    document.querySelector(".enemy-dmg-taken").textContent = "You did " + playerDamage + " damage";
    // Subtracts the damage done from the enemy's remaining HP
    enemyTwo.enemyHP -= playerDamage;
    // Updates the enemy HP shown on the DOM
    document.querySelector(".enemy-two-hp").textContent = enemyTwo.enemyHP;

    // Calculates enemy damage
    var enemyDamage = enemyTwo.enemyPower + (Math.floor(Math.random() * 10) + 1);
    // Writes how much damage the enemy did to the DOM
    document.querySelector(".player-dmg-taken").textContent = "You took " + enemyDamage + " damage";
    // Subtracts enemy damage from the player's remaining HP
    playerStats.playerHP -= enemyDamage;
    // Updates the player HP
    document.querySelector(".player-hp").textContent = playerStats.playerHP;

    // If the player's HP reaches 0 they will alerted and the page refreshed
    if (playerStats.playerHP < 1) {
        alert("You died =(");
        location = location;
    }

    // Once the enemy is defeated, its infos are hidden, the next enemy becomes visible, the round # is updated and the function being called by the attacked button is changed.
    if (enemyTwo.enemyHP < 1) {
        document.querySelector(".enemy-two-info").style.visibility = "hidden";
        document.querySelector(".enemy-three-info").style.visibility = "visible";
        document.querySelector(".battle-round").textContent = "Round 3";
        bttnAttr.setAttribute("onclick", "playerAttackThree();");
    }
}


function playerAttackThree() {
    // Calculates player damage
    var playerDamage = playerStats.playerPower + (Math.floor(Math.random() * 10) + 1);
    // Writes how much damage the player did to the DOM
    document.querySelector(".enemy-dmg-taken").textContent = "You did " + playerDamage + " damage";
    // Subtracts the damage done from the enemy's remaining HP
    enemyThree.enemyHP -= playerDamage;
    // Updates the enemy HP shown on the DOM
    document.querySelector(".enemy-three-hp").textContent = enemyThree.enemyHP;


    // Calculates enemy damage
    var enemyDamage = enemyThree.enemyPower + (Math.floor(Math.random() * 10) + 1);
    // Writes how much damage the enemy did to the DOM
    document.querySelector(".player-dmg-taken").textContent = "You took " + enemyDamage + " damage";
    // Subtracts enemy damage from the player's remaining HP
    playerStats.playerHP -= enemyDamage;
    // Updates the player HP
    document.querySelector(".player-hp").textContent = playerStats.playerHP;

    // If the player's HP reaches 0 they will alerted and the page refreshed
    if (playerStats.playerHP < 1) {
        alert("You died =(");
        location = location;
    }

    // Once the enemy is defeated, its infos are hidden, the next enemy becomes visible, the round # is updated and the function being called by the attacked button is changed.
    if (enemyThree.enemyHP < 1) {

        // during this rounds player HP is restored by 70 points
        alert("You found a potion. HP restored by 70 points");
        var potion = 70;
        playerStats.playerHP += potion;
        document.querySelector(".player-hp").textContent = playerStats.playerHP;

        alert("From now on, for every enemy defeated, there's a chance of finding potions. Good luck!");


        document.querySelector(".enemy-three-info").style.visibility = "hidden";
        document.querySelector(".enemy-four-info").style.visibility = "visible";
        document.querySelector(".battle-round").textContent = "Round 4";
        bttnAttr.setAttribute("onclick", "playerAttackFour();");
    }
}


function playerAttackFour() {
    // Calculates player damage
    var playerDamage = playerStats.playerPower + (Math.floor(Math.random() * 10) + 1);
    // Writes how much damage the player did to the DOM
    document.querySelector(".enemy-dmg-taken").textContent = "You did " + playerDamage + " damage";
    // Subtracts the damage done from the enemy's remaining HP
    enemyFour.enemyHP -= playerDamage;
    // Updates the enemy HP shown on the DOM
    document.querySelector(".enemy-four-hp").textContent = enemyFour.enemyHP;


    // Calculates enemy damage
    var enemyDamage = enemyFour.enemyPower + (Math.floor(Math.random() * 10) + 1);
    // Writes how much damage the enemy did to the DOM
    document.querySelector(".player-dmg-taken").textContent = "You took " + enemyDamage + " damage";
    // Subtracts enemy damage from the player's remaining HP
    playerStats.playerHP -= enemyDamage;
    // Updates the player HP
    document.querySelector(".player-hp").textContent = playerStats.playerHP;

    // If the player's HP reaches 0 they will alerted and the page refreshed
    if (playerStats.playerHP < 1) {
        alert("You died =(");
        location = location;
    }

    // Once the enemy is defeated, its infos are hidden, the next enemy becomes visible, the round # is updated and the function being called by the attacked button is changed.
    if (enemyFour.enemyHP < 1) {

        var potion = 70;
        var potionChance = (Math.floor(Math.random() * 10) + 1);
        if (potionChance > 4) {
            alert("You found another potion. HP restored by 70");
            playerStats.playerHP += potion;
        }
        console.log(potionChance + "potion");


        document.querySelector(".enemy-four-info").style.visibility = "hidden";
        document.querySelector(".enemy-five-info").style.visibility = "visible";
        document.querySelector(".battle-round").textContent = "Round 5";
        bttnAttr.setAttribute("onclick", "playerAttackFive();");
    }
}


function playerAttackFive() {
    // Calculates player damage
    var playerDamage = playerStats.playerPower + (Math.floor(Math.random() * 10) + 1);
    // Writes how much damage the player did to the DOM
    document.querySelector(".enemy-dmg-taken").textContent = "You did " + playerDamage + " damage";
    // Subtracts the damage done from the enemy's remaining HP
    enemyFive.enemyHP -= playerDamage;
    // Updates the enemy HP shown on the DOM
    document.querySelector(".enemy-five-hp").textContent = enemyFive.enemyHP;


    // Calculates enemy damage
    var enemyDamage = enemyFive.enemyPower + (Math.floor(Math.random() * 10) + 1);
    // Writes how much damage the enemy did to the DOM
    document.querySelector(".player-dmg-taken").textContent = "You took " + enemyDamage + " damage";
    // Subtracts enemy damage from the player's remaining HP
    playerStats.playerHP -= enemyDamage;
    // Updates the player HP
    document.querySelector(".player-hp").textContent = playerStats.playerHP;

    // If the player's HP reaches 0 they will alerted and the page refreshed
    if (playerStats.playerHP < 1) {
        alert("You died =(");
        location = location;
    }

    // Once the enemy is defeated, its infos are hidden, the next enemy becomes visible, the round # is updated and the function being called by the attacked button is changed.
    if (enemyFive.enemyHP < 1) {

        var potion = 70;
        var potionChance = (Math.floor(Math.random() * 10) + 1);
        if (potionChance > 4) {
            alert("You found another potion. HP restored by 70");
            playerStats.playerHP += potion;
        }
        console.log(potionChance + "potion");

        document.querySelector(".enemy-five-info").style.visibility = "hidden";
        document.querySelector(".enemy-six-info").style.visibility = "visible";
        document.querySelector(".battle-round").textContent = "Round 6";
        bttnAttr.setAttribute("onclick", "playerAttackSix();");
    }
}


function playerAttackSix() {
    // Calculates player damage
    var playerDamage = playerStats.playerPower + (Math.floor(Math.random() * 10) + 1);
    // Writes how much damage the player did to the DOM
    document.querySelector(".enemy-dmg-taken").textContent = "You did " + playerDamage + " damage";
    // Subtracts the damage done from the enemy's remaining HP
    enemySix.enemyHP -= playerDamage;
    // Updates the enemy HP shown on the DOM
    document.querySelector(".enemy-six-hp").textContent = enemySix.enemyHP;


    // Calculates enemy damage
    var enemyDamage = enemySix.enemyPower + (Math.floor(Math.random() * 10) + 1);
    // Writes how much damage the enemy did to the DOM
    document.querySelector(".player-dmg-taken").textContent = "You took " + enemyDamage + " damage";
    // Subtracts enemy damage from the player's remaining HP
    playerStats.playerHP -= enemyDamage;
    // Updates the player HP
    document.querySelector(".player-hp").textContent = playerStats.playerHP;

    // If the player's HP reaches 0 they will alerted and the page refreshed
    if (playerStats.playerHP < 1) {
        alert("You died =(");
        location = location;
    }

    // Once the enemy is defeated, its infos are hidden, the next enemy becomes visible, the round # is updated and the function being called by the attacked button is changed.
    if (enemySix.enemyHP < 1) {
        document.querySelector(".enemy-six-info").style.visibility = "hidden";
        document.querySelector(".enemy-seven-info").style.visibility = "visible";
        document.querySelector(".battle-round").textContent = "Round 7";
        bttnAttr.setAttribute("onclick", "playerAttackSeven();");
    }
}

function playerAttackSeven() {
    // Calculates player damage
    var playerDamage = playerStats.playerPower + (Math.floor(Math.random() * 10) + 1);
    // Writes how much damage the player did to the DOM
    document.querySelector(".enemy-dmg-taken").textContent = "You did " + playerDamage + " damage";
    // Subtracts the damage done from the enemy's remaining HP
    enemySeven.enemyHP -= playerDamage;
    // Updates the enemy HP shown on the DOM
    document.querySelector(".enemy-seven-hp").textContent = enemySeven.enemyHP;


    // Calculates enemy damage
    var enemyDamage = enemySeven.enemyPower + (Math.floor(Math.random() * 10) + 1);
    // Writes how much damage the enemy did to the DOM
    document.querySelector(".player-dmg-taken").textContent = "You took " + enemyDamage + " damage";
    // Subtracts enemy damage from the player's remaining HP
    playerStats.playerHP -= enemyDamage;
    // Updates the player HP
    document.querySelector(".player-hp").textContent = playerStats.playerHP;

    // If the player's HP reaches 0 they will alerted and the page refreshed
    if (playerStats.playerHP < 1) {
        alert("You died =(");
        location = location;
    }

    // Once the enemy is defeated, its infos are hidden, the next enemy becomes visible, the round # is updated and the function being called by the attacked button is changed.
    if (enemySeven.enemyHP < 1) {

        var potion = 70;
        var potionChance = (Math.floor(Math.random() * 10) + 1);
        if (potionChance > 5) {
            alert("You found another potion. HP restored by 70");
            playerStats.playerHP += potion;
        }
        console.log(potionChance + "potion");

        document.querySelector(".enemy-seven-info").style.visibility = "hidden";
        document.querySelector(".enemy-eight-info").style.visibility = "visible";
        document.querySelector(".battle-round").textContent = "Round 8";
        bttnAttr.setAttribute("onclick", "playerAttackEight();");
    }
}


function playerAttackEight() {
    // Calculates player damage
    var playerDamage = playerStats.playerPower + (Math.floor(Math.random() * 10) + 1);
    // Writes how much damage the player did to the DOM
    document.querySelector(".enemy-dmg-taken").textContent = "You did " + playerDamage + " damage";
    // Subtracts the damage done from the enemy's remaining HP
    enemyEight.enemyHP -= playerDamage;
    // Updates the enemy HP shown on the DOM
    document.querySelector(".enemy-eight-hp").textContent = enemyEight.enemyHP;


    // Calculates enemy damage
    var enemyDamage = enemyEight.enemyPower + (Math.floor(Math.random() * 10) + 1);
    // Writes how much damage the enemy did to the DOM
    document.querySelector(".player-dmg-taken").textContent = "You took " + enemyDamage + " damage";
    // Subtracts enemy damage from the player's remaining HP
    playerStats.playerHP -= enemyDamage;
    // Updates the player HP
    document.querySelector(".player-hp").textContent = playerStats.playerHP;

    // If the player's HP reaches 0 they will alerted and the page refreshed
    if (playerStats.playerHP < 1) {
        alert("You died =(");
        location = location;
    }

    // Once the enemy is defeated, its infos are hidden, the next enemy becomes visible, the round # is updated and the function being called by the attacked button is changed.
    if (enemyEight.enemyHP < 1) {

        var potion = 70;
        var potionChance = (Math.floor(Math.random() * 10) + 1);
        if (potionChance > 5) {
            alert("You found another potion. HP restored by 70");
            playerStats.playerHP += potion;
        }
        console.log(potionChance + "potion");

        document.querySelector(".enemy-eight-info").style.visibility = "hidden";
        document.querySelector(".enemy-nine-info").style.visibility = "visible";
        document.querySelector(".battle-round").textContent = "Round 9";
        bttnAttr.setAttribute("onclick", "playerAttackNine();");
    }
}

function playerAttackNine() {
    // Calculates player damage
    var playerDamage = playerStats.playerPower + (Math.floor(Math.random() * 10) + 1);
    // Writes how much damage the player did to the DOM
    document.querySelector(".enemy-dmg-taken").textContent = "You did " + playerDamage + " damage";
    // Subtracts the damage done from the enemy's remaining HP
    enemyNine.enemyHP -= playerDamage;
    // Updates the enemy HP shown on the DOM
    document.querySelector(".enemy-nine-hp").textContent = enemyNine.enemyHP;


    // Calculates enemy damage
    var enemyDamage = enemyNine.enemyPower + (Math.floor(Math.random() * 10) + 1);
    // Writes how much damage the enemy did to the DOM
    document.querySelector(".player-dmg-taken").textContent = "You took " + enemyDamage + " damage";
    // Subtracts enemy damage from the player's remaining HP
    playerStats.playerHP -= enemyDamage;
    // Updates the player HP
    document.querySelector(".player-hp").textContent = playerStats.playerHP;

    // If the player's HP reaches 0 they will alerted and the page refreshed
    if (playerStats.playerHP < 1) {
        alert("You died =(");
        location = location;
    }

    // Once the enemy is defeated, its infos are hidden, the next enemy becomes visible, the round # is updated and the function being called by the attacked button is changed.
    if (enemyNine.enemyHP < 1) {

        var potion = 70;
        alert("Wow. You actually got this far. Here's one last potion");
        playerStats.playerHP += potion;
        document.querySelector(".player-hp").textContent = playerStats.playerHP;

        document.querySelector(".enemy-nine-info").style.visibility = "hidden";
        document.querySelector(".enemy-ten-info").style.visibility = "visible";
        document.querySelector(".battle-round").textContent = "Final Battle";
        bttnAttr.setAttribute("onclick", "playerAttackTen();");
    }
}

function playerAttackTen() {
    // Calculates player damage
    var playerDamage = playerStats.playerPower + (Math.floor(Math.random() * 10) + 1);
    // Writes how much damage the player did to the DOM
    document.querySelector(".enemy-dmg-taken").textContent = "You did " + playerDamage + " damage";
    // Subtracts the damage done from the enemy's remaining HP
    enemyTen.enemyHP -= playerDamage;
    // Updates the enemy HP shown on the DOM
    document.querySelector(".enemy-ten-hp").textContent = enemyTen.enemyHP;


    // Calculates enemy damage
    var enemyDamage = enemyTen.enemyPower + (Math.floor(Math.random() * 10) + 1);
    // Writes how much damage the enemy did to the DOM
    document.querySelector(".player-dmg-taken").textContent = "You took " + enemyDamage + " damage";
    // Subtracts enemy damage from the player's remaining HP
    playerStats.playerHP -= enemyDamage;
    // Updates the player HP
    document.querySelector(".player-hp").textContent = playerStats.playerHP;

    // If the player's HP reaches 0 they will alerted and the page refreshed
    if (playerStats.playerHP < 1) {
        alert("You died =(");
        location = location;
    }

    // Once the enemy is defeated, its infos are hidden, the next enemy becomes visible, the round # is updated and the function being called by the attacked button is changed.
    if (enemyTen.enemyHP < 1) {
        document.querySelector(".enemy-ten-info").style.visibility = "hidden";
        document.querySelector(".player-attack").style.visibility = "hidden";
        document.querySelector(".player-dmg-taken").style.visibility = "hidden";
        document.querySelector(".enemy-dmg-taken").style.visibility = "hidden";

        document.querySelector(".player-avatar").setAttribute("src", "images/youwon.png");

        alert("YOU WON!");
    }
}

function restartGame() {
    location = location;
}
