users = [{"id":1, "username":"Wayne", "password":654321}, {"id":2, "username":"King", "password":123456}]

function regEventListeners(){
    
    var loginBtn = document.getElementById('loginBtn')
    //loginBtn.onclick = authenticate

    if(loginBtn)
        loginBtn.addEventListener("click", authenticate, true)

}

$(document).ready(function(){
    init();
    displayClothes()

})

function init(){
    regEventListeners()

}

function authenticate(event){
    //username and password
    var uname = document.getElementById('uname')
    var passwd = document.getElementById('passwd')
    var isAuthenticated = false
    if(uname.value && passwd.value){
        users.forEach(u=> {
            if(u.username== uname.value && u.password==passwd.value){
                isAuthenticated = true
                return;
            }
        });
    }
    if(isAuthenticated){
        window.location.href="profile.html"
    }
    else{
        alert("Authentication Failed!")
        window.location.href="login.html"

    }
}

