var harveyHealth = 500;
var playerHealth = 500;
var randIntPlayer = 240;
var snd = new Audio("crit.mp3");
var snd2 = new Audio("crit.mp3");
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
function punch() {
    var punchDamage = getRandomInt(200);
    harveyHealth = harveyHealth - punchDamage;
    if (punchDamage > 150){
        snd.play();
        alert("You land a CRITICAL HIT on Steve Harvey, dealing " + punchDamage + " damage. Steve Harvey still has " + harveyHealth + " health left.");
    }
    else {
        alert("You punch Steve Harvey, dealing " + punchDamage + " damage. Steve Harvey still has " + harveyHealth + " health left.");
    }
    if (harveyHealth <= 0) {
        alert('You win! Steve Harvey returns to his cavern. Hibernating, resting, waiting for his next strike...')
        alert('Starting new game!')
        harveyHealth = 500
        playerHealth = 500
        randIntPlayer = 150
        alert("Steve Harvey challenges you to a duel! Do you punch, defend or end?")
    }
    else {
        var steveAttack = getRandomInt(randIntPlayer)
        playerHealth = playerHealth - steveAttack
        if (steveAttack > 150){
            snd2.play();
            alert('Steve Harvey lands a CRITICAL HIT on you, dealing ' + steveAttack + ' damage. You have ' + playerHealth + ' health left.')
        }
        else {
            alert('Steve Harvey attacks you, dealing ' + steveAttack + ' damage. You have ' + playerHealth + ' health left.')
        }
        if (playerHealth <= 0) {
            alert('You lose! Steve Harvey takes over the world.')
            alert('Starting new game!')
            harveyHealth = 500
            playerHealth = 500
            randIntPlayer = 150
            alert("Steve Harvey challenges you to a duel! Do you punch, defend or end?")
        }
    }
}
function defend(){
    var addedDefend = getRandomInt(35)
    randIntPlayer = randIntPlayer - addedDefend
    if (randIntPlayer <= 0) {
        randIntPlayer = 80
    }
    alert('You defend! An extra ' + addedDefend + ' defense points have been added!')
    var steveAttack = getRandomInt(randIntPlayer)
    playerHealth = playerHealth - steveAttack
    if (steveAttack > 150){
        snd.play();
        alert('Steve Harvey lands a CRITICAL HIT on you, dealing ' + steveAttack + ' damage. You have ' + playerHealth + ' health left.')
    }
    else {
        alert('Steve Harvey attacks you, dealing ' + steveAttack + ' damage. You have ' + playerHealth + ' health left.')
    }
    if (playerHealth <= 0) {
        alert('You lose! Steve Harvey takes over the world.')
        alert('Starting new game!')
        harveyHealth = 500
        playerHealth = 500
        randIntPlayer = 150
        alert("Steve Harvey challenges you to a duel! Do you punch, defend or end?")
    }
}
function defendDebug(healthForHarvey, healthForPlayer){
    harveyHealth = healthForHarvey
    playerHealth = healthForPlayer
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
        alert("Steve Harvey challenges you to a duel! Do you punch, defend or end?")
    }
}
function end(){
    alert('You end the game resulting in Steve Harvey conquering the world.')
    alert('Starting new game!')
    harveyHealth = 500
    playerHealth = 500
    randIntPlayer = 150
    alert("Steve Harvey challenges you to a duel! Do you punch, defend or end?")
}