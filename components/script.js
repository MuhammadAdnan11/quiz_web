//Register user
function registerUser(){
    let username= document.getElementById("regUsername").value;
    let password=document.getElementById("regPassword").value;
    
    if(localStorage.getItem(username)){
        document.getElementById("registerError").innerHTML="Username already exists!";
        return false;
    }
    localStorage.setItem(username,password);
    alert("Registration successful! You can now login.");
    window.location.href="login.html";
    return false;

}

//Login User
function loginUser(){
    let username= document.getElementById("loginUsername").value;
    let password=document.getElementById("loginPassword").value;
    let storedPassword= localStorage.getItem(username);

    if(storedPassword && storedPassword===password){
        sessionStorage.setItem("loggedInUser",username);
        window.location.href="../index.html";
    }else{
        document.getElementById("loginError").innerText="Invalid username or password!";
            }
        return false;
}

//Display Username on Home Page
window.onload= function(){
    let loggedInUser=sessionStorage.getItem("loggedInUser");
    if(loggedInUser && document.getElementById("username")){
        document.getElementById("username").innerText=loggedInUser;
    }else if(!loggedInUser && window.location.pathname.includes("../index.html")){
        window.location.href="login.html";
    }
}

// Logout User
// function logout(){
//     sessionStorage.removeItem("loggedInUser")
//     window.location.hre="login.html"
// }