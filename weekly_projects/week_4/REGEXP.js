document.addEventListener("DOMContentLoaded", function() {
    let username = document.getElementById('username');
    let usernameErrPara = document.getElementById('error-msg');

    username.addEventListener("input", function(e) {
        let pattern = /^\w{3,12}$/;
        let currentValue = e.target.value;
        let valid = pattern.test(currentValue);

        if(valid){
            usernameErrPara.style.display = 'none';
        } else {
            usernameErrPara.style.display = 'block';
        }
    });

    // Show error message on page load if initial value is invalid
    let currentValue = username.value;
    let pattern = /^\w{3,12}$/;
    let valid = pattern.test(currentValue);

    if(!valid){
        usernameErrPara.style.display = 'block';
    }
});