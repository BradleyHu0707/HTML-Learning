let userResponse = confirm("Do you want to continue?");
if (userResponse) {
    let password = prompt("Please enter the password:");
        
    if (password === '1234') {
        alert('Successful!');
    }
}
