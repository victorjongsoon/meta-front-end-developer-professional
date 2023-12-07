const car = {
    speed: 40,
    color: 'red',
};   

console.log(Object.keys(car)); // [ 'speed', 'color' ]
console.log(Object.entries(car)); // [ [ 'speed', 40 ], [ 'color', 'red' ] ]

// loop over object's own property keys and values
var clothingItem = {
    price: 50,
    color: 'beige',
    material: 'cotton',
    season: 'autumn'
}

for( const key of Object.keys(clothingItem) ) {
    console.log(key, ":", clothingItem[key])
}

console.log("-----");
// access an object's member using the bracket notation
function testBracketsDynamicAccess() {
    var dynamicKey;
    if(Math.random() > 0.5) {
      dynamicKey = "speed";
     }else{
       dynamicKey = "color";
     }
  
      var drone = {
        speed: 15,
        color: "orange"
      }
  
      console.log(drone[dynamicKey]);
  }
  testBracketsDynamicAccess();