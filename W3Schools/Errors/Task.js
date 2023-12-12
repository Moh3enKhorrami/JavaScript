/* Task 3: Update the addTwoNums function with a try...catch block
Add the try and catch blocks inside the function definition's body. For now, just make sure that the console log of a + b is inside the try block. Additionally, the catch block should catch an error named err and, inside the body of the catch block, you need to console log the err value.*/

function addTwoNums(a, b){
    try{
        if (typeof(a) != 'number'){
            throw new ReferenceError("the first argument is not number")
        } else if (typeof(b) != 'number'){
            throw new ReferenceError("the secend argument is not number")
        }else{
            console.log(a + b);
        }
        
    } catch(err){
        console.log("Erorr!", err);
    }
}
addTwoNums(5, "5");
console.log("It still works")
