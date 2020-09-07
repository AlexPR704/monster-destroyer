const ATTACK_VALUE = 10;
const MONSTER_ATTACK_VALUE = 14;

var chosenMaxLife = 100;
var currentMonsterHealth = chosenMaxLife;
var currentPlayerHealth = chosenMaxLife;


adjustHealthBars(chosenMaxLife);

function attackHandler() {
    //launch the attack to the monster//
    //by storing the monster damage in the local const; I can use the data to adjust the monster's health.//
    const damage = dealMonsterDamage(ATTACK_VALUE);
    currentMonsterHealth -= damage;
    //this means the currentmonsterhealth is set equal to currentmonsterhealth minus damage"
    const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
    currentPlayerHealth -=playerDamage;
    if (currentMonsterHealth <= 0) {
        alert('You won!');
    //checks the health and if it is true then it will alert the user//
    } else if (currentPlayerHealth <= 0) {
        alert('You Lost!');
    }
}
//eventlistener that when the user clicks the attack button it will go to
//the function called attackHandler//
attackBtn.addEventListener('click', attackHandler);