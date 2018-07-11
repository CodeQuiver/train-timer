// NextTrain train-timer app

// Initialize Firebase
var config = {
apiKey: "AIzaSyC6_p8Rvp7K1Wd7CVxl0xNGihc6i6xbpDA",
authDomain: "train-timer-df5de.firebaseapp.com",
databaseURL: "https://train-timer-df5de.firebaseio.com",
projectId: "train-timer-df5de",
storageBucket: "",
messagingSenderId: "511274681299"
};

firebase.initializeApp(config);
// End Initialize Firebase

//===================== GLOBAL VARIABLES ========================//

    // Get a reference to the database service
    var dataRef = firebase.database();


//===================== END GLOBAL VARIABLES ========================//

//===================== FUNCTIONS ========================//
    // NEW TRAIN FUNCTION
        // on click of submit button #add-train
        
    $("#add-train").on("click", function(event) {
        event.preventDefault();

        // initialize local variables
        name = "";
        destination = "";
        start = "";
        frequency = "";

        // capture form data in variables
        name = $("#new-train-name").val().trim();
        destination = $("#train-destination").val().trim();
        start = $("#train-start-time").val().trim();
        frequency = $("#train-frequency").val().trim();

        // package form data
        // pushes to Firebase in a JSON property
        // Note how we are using the Firebase .push() method to add a new object without overwriting the others
        dataRef.ref().push({
        
        name: name,
        destination: destination,
        start: start,
        frequency: frequency,
        dateAdded: firebase.database.ServerValue.TIMESTAMP
      });
    });

    // END NEW TRAIN FUNCTION

    // FIREBASE FETCHING FUNCTION
        // retrieve all train listings from firebase
        // for each
            // pass argument to and call calculation function for "Next Train Time"
                // save result in variable
            // pass argument to and call calulation function for "Minutes until Arrival"
                // save result in variable
            // call "PRINT ROW" function and pass all arguments
    // END FIREBASE FETCHING FUNCTION

    // CALC NEXT TRAIN FUNCTION
        // receives the train's start time and frequency as arguments
        // calculates next train time using moment.js
    // END CALC NEXT TRAIN FUNCTION

    // CALC MINUTES TO ARRIVAL
    // END CALC MINUTES TO ARRIVAL

    // PRINT TABLE ROW
    // END PRINT TABLE ROW


    //PAGE LOAD MASTER FUNCTION
        //Calls all necessary functions when it itself is called on page load
    //END PAGE LOAD MASTER FUNCTION

//===================== END FUNCTIONS ========================//

//===================== CODE BODY ========================//
    // call page load function
    // on click update page, calls page load function
//===================== END CODE BODY ========================//