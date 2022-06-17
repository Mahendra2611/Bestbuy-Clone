var forSignIn = JSON.parse(localStorage.getItem("bestBuyUserDetails"));
document.querySelector("#form").addEventListener("submit", signInFunction);
// var signInArray = [];
function signInFunction() {
      event.preventDefault();
      var email = document.querySelector("#email").value;
      var password = document.querySelector("#pass").value;
      for (var i = 0; i < forSignIn.length; i++) {
            if (email == forSignIn[i].email && password == forSignIn[i].password) {
                if(email!==null && password!==null){
                        alert("Sign in successfully")
                        // window.open("home.html" ,"_self");
                        window.location.href = "home.html";
                        break;
                        
                }
            }
            else{
                        alert("Wrong password or email"); 
                        break;
                }
      }
      email     = "";
      password  = "";
}