const txtaddTag = document.getElementById('tag');
const txtquestion = document.getElementById('question');
const txtanswer = document.getElementById('answer');

firebase.auth().onAuthStateChanged(firebaseUser => {
    if (firebaseUser) {
        console.log(firebaseUser);
    } else {
        console.log('not logged in');
    }
});

AddOne.addEventListener('click', e => {
    var tag = txtaddTag.value;
    var question = txtquestion.value;
    var answer = txtanswer.value;
    firebase.database().ref('users/' + tag).update({
        question : answer
    });
});
