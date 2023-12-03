var bird = {
    hasWings: true,
    canFly: true,
    hasFeathers: true,
}

var eagle1 = Object.create(bird);
console.log('eagle1', eagle1);

console.log('eagle1.hasWings', eagle1.hasWings);
console.log('eagle1.canFly', eagle1.canFly);
console.log('eagle1.hasFeathers', eagle1.hasFeathers);

var eagle2 = Object.create(bird);
console.log('eagle2', eagle2);

console.log('eagle2.hasWings', eagle2.hasWings);
console.log('eagle2.canFly', eagle2.canFly);
console.log('eagle2.hasFeathers', eagle2.hasFeathers);

var penguin1 = Object.create(bird);
penguin1.canFly = false;
console.log('penguin1', penguin1);
console.log('penguin1.hasWings', penguin1.hasWings);
console.log('penguin1.canFly', penguin1.canFly);
console.log('penguin1.hasFeathers', penguin1.hasFeathers);

