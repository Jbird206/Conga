


  var config = {
    apiKey: "AIzaSyAlEwKfPbEbX-N_JI5IVK-pxNNwR9B13wo",
    authDomain: "conga-1a2fe.firebaseapp.com",
    databaseURL: "https://conga-1a2fe.firebaseio.com",
    projectId: "conga-1a2fe",
    storageBucket: "conga-1a2fe.appspot.com",
    messagingSenderId: "765021567556",
    appId: "1:765021567556:web:7bb254bdaaf84d79bb5a11",
    measurementId: "G-XGC50ZTY23"
  };

firebase.initializeApp(config);


const dbRef = firebase.database().ref();

const usersRef = dbRef.child('users');
const userListUI = document.getElementById("userList");

usersRef.on("child_added", snap => {

	let user = snap.val();

	let $li = document.createElement("li");
	$li.innerHTML = user.name;
	$li.setAttribute("child-key", snap.key);
	$li.addEventListener("click", userClicked)
	userListUI.append($li);

});


function userClicked(e) {

	var userID = e.target.getAttribute("child-key");

	const userRef = dbRef.child('users/' + userID);
	const userDetailUI = document.getElementById("userDetail");

	userDetailUI.innerHTML = ""

	userRef.on("child_added", snap => {


		var $p = document.createElement("p");
		$p.innerHTML = snap.key  + " - " +  snap.val()
		userDetailUI.append($p);


	});

}
