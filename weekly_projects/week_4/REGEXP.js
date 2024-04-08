var username = document.getElementById('username');
var loginFform = document.getElementById('login-form');
var usernameErrPara = document.getElementById('error-msg');
//initialize regEx pattern

username.addEventListener("input", function(e) {
    var Pattern = /^[\w]{6,8}$/;
    var currentValue = e.target.value;
    var Valid = Pattern.test(currentValue);
    if(Valid){
        usernameErrPara.style.display = 'block'
    } else {
        usernameErrPara.style.display = 'none'
    }
})