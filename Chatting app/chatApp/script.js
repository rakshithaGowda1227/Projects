const firebaseConfig = {
  apiKey: "AIzaSyDX0-WQQisy-LyZ2SX0HKXWDcMNmIwceME",
  authDomain: "chatapp-3cb60.firebaseapp.com",
  databaseURL: "https://chatapp-3cb60-default-rtdb.firebaseio.com",
  projectId: "chatapp-3cb60",
  storageBucket: "chatapp-3cb60.appspot.com",
  messagingSenderId: "445505596541",
  appId: "1:445505596541:web:d242aa921e6e92224ed514",
  measurementId: "G-VN9MZREE0Z",
};
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

function createAccount() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var btn = document.getElementById("btn");
  btn.innerHTML = `<i class="fa-solid fa-spinner"></i> <br> <small>Please Wait..</small>`;
  var username = document.getElementById("username").value;

  auth
    .createUserWithEmailAndPassword(email, password)
    .then(function (userCredentials) {
      const userFolder = databaseRoom.ref();
      alert("Account has been created 😎");
      btn.innerHTML = "Account Created";
    })
    .catch(function (error) {
      alert("Something went wrong please try again later..!");
      btn.innerHTML = "error";
    });
}
