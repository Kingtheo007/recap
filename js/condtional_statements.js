function test(){
    let age = 21;
    let name = "Motsisi";

    // Condtional Statment / Greater than operator.
    if(age > 18){
        console.log(name + " is an adult");
    }else{
        console.log(name + " is a child");
    }
}

// Greater or Equals to operator
function is_old_enough_to_drive(){
   
    let age = 11;
    
    if(age >= 18){
        console.log("Old enough to drive");
    }else{
        console.log("Not old enough to drive");
    }
}

// Equals to operator
function is_equal_to(){
    let a = 10;
    let b = "10";

    if(a === b){
        console.log("a is equal to b");
    }else{
        console.log("a is not equal to b");
    }
}