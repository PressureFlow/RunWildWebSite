const userName = document.getElementById("name")
const lastName = document.getElementById("last-name")
const userEmail = document.getElementById("email")


document.getElementById('myForm').addEventListener('submit', function(event) {  

    if (userName.value == "" || lastName.value == "" || userEmail.value == "") {
        event.preventDefault();
        userName.style.borderColor = "red"; 
        lastName.style.borderColor = "red"
        userEmail.style.borderColor = "red"
    } else {
        userName.style.borderColor = "green"; 
        lastName.style.borderColor = "green"
        userEmail.style.borderColor = "green"
    }

        
});
    
  