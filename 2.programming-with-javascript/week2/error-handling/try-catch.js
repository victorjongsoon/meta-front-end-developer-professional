try {
    console.log(a + b); // ReferenceError
} catch (error) {
    console.log(error.name);
    console.log(error.message);
    console.log('The error has been caught!')
}

console.log("My program doesn't crash because of try catch!")