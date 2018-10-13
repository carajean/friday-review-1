//passes all tests. Core skills: constructor functions, prototype, ternary with way its written

// pokemon constructor function
function Pokemon(name, health, att) {
    this.name = name;
    this.health = health;
    this.attackBonus = att;
}

// pokemon prototype methods
let pp = Pokemon.prototype;

pp.biteAttack = function () {
    return this.attackBonus + 2;
}

pp.isDefeated = function () {
    return this.health <= 0;
}
// simulate battle function (fun!)
function simulateBattle(poke1, poke2, first) {
    let attacker = poke1.name === first ? poke1 : poke2;
    let defender = !poke1.name === first ? poke1 : poke2;
    // while both pokes are alive, fight
    while(!poke1.isDefeated() && !poke2.isDefeated()){
        defender.health  -= attacker.biteAttack();
        if(!defender.isDefeated()){
            attacker.health -= defender.biteAttack();
        }
    }
    return poke1.isDefeated() ? poke2.name + " Wins!" : poke1.name + " Wins!";

}

pikachu = new Pokemon('Pikachu', 25, 4);
charizard = new Pokemon('Charizard', 300, 5);

console.log(simulateBattle(pikachu,charizard,'Pikachu')); // Charizard;
console.log(simulateBattle(charizard, pikachu, 'Pikachu')); // Charizard
console.log(simulateBattle(pikachu, charizard, 'Charizard')); // Charizard

let krabby = new Pokemon('Krabby', 400, 5);
let squirtle = new Pokemon('Squirtle', 600, 2);
console.log(simulateBattle(krabby, squirtle, 'Krabby')); // Krabby
console.log(simulateBattle(squirtle, krabby, 'Krabby')); // Krabby