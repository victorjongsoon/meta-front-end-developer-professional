/*
function example() {
    console.log('line 1');
    console.log('line 2');
    console.log('line 3');
    example();
}

example();
*/ // this will run forever

let counter = 3;

function example() {
    console.log(counter);
    counter = counter - 1;
    if (counter === 0) {
        return;
    }
    example();
}   

example();