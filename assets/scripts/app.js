const ATTACK_VALUE = 10;
const STRONG_ATTACK_VALUE = 17;
const MONSTER_ATTACK_VALUE = 14;
const HEAL_VALUE = 20;


var chosenMaxLife = 100;
var currentMonsterHealth = chosenMaxLife;
var currentPlayerHealth = chosenMaxLife;
var hasBonusLife = true; //var that holds a boolean value as true//


adjustHealthBars(chosenMaxLife);

function endRound() {
    const initialPlayerHealth = currentPlayerHealth;
    const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
    currentPlayerHealth -=playerDamage;

    /*If you just refeneence the var without the comparison operator; javascript will check to see
    //... if the currentPlayerHealth less than or equal to 0; then it will use the bonus life. But now it will use
    the bonus life and will use the removeBonusLife function. Then we stored the players intial players health
    before the monster attcked in the currentPlayerHealth for the bonus life that was used.*/
    if(currentPlayerHealth <= 0 && hasBonusLife) {
        hasBonusLife = false;
        removeBonusLife();
        currentPlayerHealth = initialPlayerHealth;
        alert('You would be dead but the bonus life has saved!')
    }

    if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
        alert('You won!');
    //checks the health and if it is true then it will alert the user//
    } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
        alert('You Lost!');
    } else if (currentPlayerHealth <= 0 && currentMonsterHealth <= 0) {
        alert('You have a draw!')
    }
}

//CREATING FUNCTION TO HANDLE BOTH MODES OF ATTACK//
function attackMonster(mode) {
    var maxDamage;
    if (mode === 'ATTACK') {
        maxDamage = ATTACK_VALUE;
    } else if (mode === 'STRONG_ATTACK') {
        maxDamage = STRONG_ATTACK_VALUE;
    }
     //launch the attack to the monster//
    //by storing the monster damage in the local const; I can use the data to adjust the monster's health.//
    const damage = dealMonsterDamage(maxDamage);
    currentMonsterHealth -= damage;
    //this means the currentmonsterhealth is set equal to currentmonsterhealth minus damage"
    endRound();
}

function attackHandler() {
   attackMonster('ATTACK');
}

function strongAttackHandler() {
   attackMonster('STRONG_ATTACK');
}

function healPlayerHandler () {
    var healValue;
    //created the if statement to ensure we do not go above our maximum health//
    if (currentPlayerHealth >= chosenMaxLife - HEAL_VALUE) {
        alert("You can't heal to more than your max initial health." );
    } else {
        healValue = HEAL_VALUE;
    }
    increasePlayerHealth(HEAL_VALUE);
    currentPlayerHealth += HEAL_VALUE;
    endRound();
}

//eventlistener that when the user clicks the attack button it will go to
//the function called attackHandler, strongAttackHandler//
attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);
healBtn.addEventListener('click', healPlayerHandler);