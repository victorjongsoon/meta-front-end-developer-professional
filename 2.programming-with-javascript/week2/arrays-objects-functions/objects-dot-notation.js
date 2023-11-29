// Object Literals and the Dot Notation
//creating an object with properties and their values
var assistantManager = {
    rangeTilesPerTurn: 3,
    socialSkills: 30,
    streetSmarts: 30,
    health: 40,
    specialAbility: "young and ambitious",
    greeting: "Let's make some money"
}

console.log(assistantManager); //display the entire object
console.log(assistantManager.rangeTilesPerTurn); //display the value of the property rangeTilesPerTurn
assistantManager.rangeTilesPerTurn = 5; //change the value of the property rangeTilesPerTurn
console.log(assistantManager.rangeTilesPerTurn); //display the new value of the property rangeTilesPerTurn