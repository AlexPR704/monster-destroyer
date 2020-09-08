const ATTACK_VALUE = 10;
const STRONG_ATTACK_VALUE = 17;
const MONSTER_ATTACK_VALUE = 14;
const HEAL_VALUE = 20;


var chosenMaxLife = 100;
var currentMonsterHealth = chosenMaxLife;
var currentPlayerHealth = chosenMaxLife;


adjustHealthBars(chosenMaxLife);

function endRound() {
    const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
    currentPlayerHealth -=playerDamage;
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
    increasePlayerHealth(HEAL_VALUE);
    endRound();
}

//eventlistener that when the user clicks the attack button it will go to
//the function called attackHandler, strongAttackHandler//
attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);
healBtn.addEventListener('click', healPlayerHandler);