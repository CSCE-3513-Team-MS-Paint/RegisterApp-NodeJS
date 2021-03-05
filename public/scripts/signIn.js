document.addEventListener("DOMContentLoaded", () => {
	// TODO: Anything you want to do when the page is loaded?
	const employeeIdElement = getEmployeeIDElement();
	employeeIdElement.focus();
	employeeIdElement.select();
});

function validateForm() {
	//ensures employee ID is valid
    const employeeID = getEmployeeID();
    const employeeIDElement = getEmployeeIDElement();
	if (isNaN(Number(employeeID))
		|| (Number(employeeID) <= 0)) {

		displayError("Please provide a valid employee ID.");
        console.log("here");

		employeeIDElement.focus();
		employeeIDElement.select();
		
		return false;
	}
    //ensures password is valid
    const password = getPassword();
    const passwordElement = getPasswordElement();
    if((password == null) || (password.trim()===""))  {
        displayError("Please provide a valid password");

        passwordElement.focus();
        passwordElement.select();
        return false;
    }
    console.log("here");
	return true;
}

//getters and setters

function getEmployeeIDElement() {
    return document.getElementById("employeeId");
}
function getEmployeeID() {
    return getEmployeeIDElement().value;
}

function getPasswordElement() {
    return document.getElementById("password");
}
function getPassword()  {
    return getPasswordElement().value
}

