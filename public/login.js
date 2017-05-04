//get elements from index.html
const txtEmail = document.getElementById('txtEmail');
const txtPassword = document.getElementById('txtPassword');
const loginBtn = document.getElementById('loginBtn');
const signUpBtn = document.getElementById('signUpBtn');
const logoutBtn = document.getElementById('logoutBtn');
var database = firebase.database();


//adding login event
loginBtn.addEventListener('click', e => {
    //get email and passs
    const email = txtEmail.value;
    const pass = txtPassword.value;
    const auth = firebase.auth();
    
    var emailDB = email;

    var badChars = ['@', '.', '$', ']', '[', '#'];
    
    String.prototype.replaceAll = function(target, replacement) {
      return this.split(target).join(replacement);
    };
  
    for (var i = 0; i < badChars.length; i++) {
        emailDB = emailDB.replaceAll(badChars[i], '_');
    }

    //sign in
    const promise = auth.signInWithEmailAndPassword(email, pass);
    promise.catch(e => console.log(e.message));
    console.log('logged in.');

    setTimeout(function () {
        firebase.database().ref('users/' + emailDB).set({
            email: email
        });
        console.log("Data entered...");
    }, 500);

});

signUpBtn.addEventListener('click', e => {
    //CHECK 4 REAL EMAIL
    //get email and pass
    const email = txtEmail.value;
    const pass = txtPassword.value;
    const auth = firebase.auth();

    //sign in
    const promise = auth.createUserWithEmailAndPassword(email, pass);

    promise
        .catch(e => console.log(e.message));
});

logoutBtn.addEventListener('click', e => {
    firebase.auth().signOut().then(function () {
        console.log('logged out');
    }, function (error) {
        console.log('error logging out.');
        console.log(error);
    });
});


firebase.auth().onAuthStateChanged(firebaseUser => {
    if (firebaseUser) {
        console.log(firebaseUser);
    } else {
        console.log('not logged in');
    }
});
