function insertName() {
    firebase.auth().onAuthStateChanged(user => {
        // Check if user is signed in:
        if (user) {
            console.log(user.uid);
            currentUser = db.collection("Users").doc(user.uid);
            currentUser.get()
                .then(userDoc => {
                    var user_Name = userDoc.data().name;
                    console.log(user_Name);
                    //method #1:  insert with html only
                    document.getElementById("name-goes-here").innerText = user_Name;    //using javascript
                    //method #2:  insert using jquery
                    $("name-goes-here").text(user_Name); //using jquery
                })
        } else {
            // No user is signed in.
        }
    });
}
insertName();

function insertBite() {
    
    console.log(BiteDoc)
    db.collection("Mindful Bites").doc("Bite")
    .onSnapshot(BiteDoc => {
        console.log(BiteDoc.data().bite);
        document.getElementById("bite1").innerHTML = BiteDoc.data().bite;
        document.getElementById("bite1" + "-time").innerHTML = " (Estimated Time: " + BiteDoc.data().mins + " minutes)";
    })
}
insertBite();