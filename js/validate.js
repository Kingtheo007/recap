function validate() {

    // Fixed variable
    let name = "Theo";

    // Dynamic variable
    let fname = document.getElementById('fname').value;
    let lname = document.getElementById('lname').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let dob = document.getElementById('dob').value;

    // Conditional statement and logic operator
    if (fname == "") {
        alert("First name is required");
        return false;
    }
    
    if (lname == "") {
        alert("Last name is required");
        return false;
    }
    if(email == "") {
        alert("Email is required");
        return false;
    }
    if(phone ==""){
        alert("Phone is required");
        return false;
    }

    if(dob == "") {
        alert("Date of birth is required");
        return false;
    }

    alert("User details saved successfully!");
    return true;
}