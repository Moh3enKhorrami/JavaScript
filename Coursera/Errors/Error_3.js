try{
    throw new ReferenceError();
} catch (err) {
    console.log(err);
    console.log("there was a Reference error");
}
console.log("My program does not stop");