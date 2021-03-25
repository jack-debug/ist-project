var harveyHealth = 500;
var playerHealth = 500;
var randIntPlayer = 150;
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
function punch() {
    var punchDamage = getRandomInt(200);
    harveyHealth = harveyHealth - punchDamage;
    alert("You punch Steve Harvey, dealing " + punchDamage + " damage. Steve Harvey still has " + harveyHealth + " health left.");
    if (harveyHealth <= 0) {
        alert('You win! Steve Harvey returns to his cavern. Hibernating, resting, waiting for his next strike...')
        alert('Starting new game!')
        harveyHealth = 500
        playerHealth = 500
        randIntPlayer = 150
        alert("Steve Harvey challenges you to a duel! Do you punch or defend?")
    }
    else {
        var steveAttack = getRandomInt(randIntPlayer)
        playerHealth = playerHealth - steveAttack
        alert('Steve Harvey attacks you, dealing ' + steveAttack + ' damage. You have ' + playerHealth + ' health left.')
        if (playerHealth <= 0) {
            alert('You lose! Steve Harvey takes over the world.')
            alert('Starting new game!')
            harveyHealth = 500
            playerHealth = 500
            randIntPlayer = 150
            alert("Steve Harvey challenges you to a duel! Do you punch or defend?")
        }
    }
}
function defend(){
    var addedDefend = getRandomInt(30)
    randIntPlayer = randIntPlayer - addedDefend
    alert('You defend! An extra ' + addedDefend + ' defense points have been added!')
    var steveAttack = getRandomInt(randIntPlayer)
    playerHealth = playerHealth - steveAttack
    alert('Steve Harvey attacks you, dealing ' + steveAttack + ' damage. You have ' + playerHealth + ' health left.')
    if (playerHealth <= 0) {
        alert('You lose! Steve Harvey takes over the world.')
        alert('Starting new game!')
        harveyHealth = 500
        playerHealth = 500
        randIntPlayer = 150
        alert("Steve Harvey challenges you to a duel! Do you punch or defend?")
    }
}