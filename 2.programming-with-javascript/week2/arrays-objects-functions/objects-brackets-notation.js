// example 1
var assistantManager = {};
assistantManager["rangeTilesPerTurn"] = 3;
assistantManager["socialSkills"] = 30;
assistantManager["streetSmarts"] = 30;
assistantManager["health"] = 40;
assistantManager["specialAbility"] = "young and ambitious";
assistantManager["greeting"] = "Let's make some money";

console.log(assistantManager); //display the entire object

// example 2
var arrOfKeys = ['speed', 'altitude', 'color'];
var drone = {
    speed: 100,
    altitude: 200,
    color: "red"
}
for (var i = 0; i < arrOfKeys.length; i++) {
    console.log(drone[arrOfKeys[i]]) // display the value of the property e.g., drone["speed"] = 100
}