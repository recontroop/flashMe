var database = firebase.database();
var tagName = document.getElementById('tag');

signUpBtn.addEventListener('click', e => {
    firebase.database().ref('users/' + tagName).set({});
});