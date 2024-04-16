function validate() {

    // Fixed variable
    let name = "Theo Motsisi"

    // Dynamic variable
    let fname = document.getElementById("fname").value;
    let lname =  document.getElementById("lname").value;

    console.log('Fixed variable: '+ name +'\n'+ 'Dynamic variable: '+ fname);

    // Validation 
    if(fname == ""){
        alert("Please enter your name");
        return false;
    }
    
    if(lname == ""){
        alert("Please enter your last name");
        return false;
    }
  
    alert('Details saved successfully :)')
    return true;
}