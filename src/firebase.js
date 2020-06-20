// // •••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••
// // signup form
// // •••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••
// $(document).ready(function() {

// var singoutButton = document.querySelector("#signout");
// var currentEmail = document.querySelector("#current-email");

// var singupForm = document.querySelector("#signup-form");
// var userName = document.querySelector("#username");
// var email = document.querySelector("#email");
// var password = document.querySelector("#password");
// var singupButton = document.querySelector("#signup");


// singupButton.addEventListener("click", clickSignupButton);
// singoutButton.addEventListener("click", clickSignoutButton);


// function clickSignupButton(){

//   //signup firebase method
//   auth.createUserWithEmailAndPassword(email.value, password.value).
//   then(function(user){
//     console.log(auth.currentUser.email)


//   }, function(error) {
//     console.log(error.message);
//     // error message show that you need to enable that authentication in firebase
//   });

// }

// function clickSignoutButton(){
//   auth.signOut()
// }

// // •••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••
// // singin form
// // •••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••
// var signinEmail = document.querySelector("#signinEmail");
// var signinPassword = document.querySelector("#signinPassword");
// var singinButton = document.querySelector("#signin");

// singinButton.addEventListener("click", clickSigninButton);


// function clickSigninButton() {

//   auth.signInWithEmailAndPassword(signinEmail.value, signinPassword.value).
//   then(function(user){
//     console.log(user)
//   }, function(error) {
//     console.log(error.message);
//     // error message show that you need to enable that authentication in firebase
//   });
// }
