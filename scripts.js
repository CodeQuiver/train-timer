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

    var trainList = []; //local array to hold all train data pulled from firebase


//===================== END GLOBAL VARIABLES ========================//

//===================== FUNCTIONS ========================//
    // CLEAR FORM FUNCTION- resets entire form's inputs without having to specify each field, just pass it id for entire form
    function clearForm(formName) {
        document.getElementById(formName).reset();
    }
    // END CLEAR FORM FUNCTION

    // CALC NEXT TRAIN FUNCTION
        // receives the train's start time and frequency as arguments
        // calculates next train time using moment.js
    // END CALC NEXT TRAIN FUNCTION

    // CALC MINUTES TO ARRIVAL
    // END CALC MINUTES TO ARRIVAL

    // NEW TRAIN FUNCTION
        // on click of submit button #add-train
        
    $("#add-train").on("click", function() {     

        // initialize local variables
        var name = "";
        var destination = "";
        var start = "";
        var frequency = "";

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

      clearForm("#new-train-form");
    });
        // NOTE- Tested successfully
    // END NEW TRAIN FUNCTION

    // FIREBASE FETCHING FUNCTION
    function fireBaseFetch(childSnapshot) {
        trainList.push(childSnapshot.val()); // Push children to local trainList array

        // for each in array
        for (let i = 0; i < trainList.length; i++) {
            const loopTrain = trainList[i];

            // save basic info in variable
            loopName = loopTrain.val().name;
            loopDest = loopTrain.val().destination;
            loopStart = loopTrain.val().start;
            loopFreq = loopTrain.val().frequency;
            
            // pass argument to and call calculation function for "Next Train Time"
            // save result in variable
            
            // pass argument to and call calculation function for "Minutes until Arrival"
            // save result in variable

            // call "PRINT ROW" function and pass all arguments
            
        }
           
    };
    // END FIREBASE FETCHING FUNCTION



    // PRINT TABLE ROW
    function printTableRow(thisTrain, thisDestination, thisFreq, thisArrival, thisMinutes) {
        var thisRow = "No Data";

        // build each data cell
        nameCell = $("<th scope='row'>").append(thisTrain);
        destCell = $("<td>").append(thisDestination);
        freqCell = $("<td>").append(thisFreq);
        arrCell = $("<td>").append(thisArrival);
        minCell = $("<td>").append(thisMinutes);

        // append each data cell to thisRow
        // can append multiple variables $('.div').append(var1, var2, var3)
        thisRow = $("<tr>");
        thisRow.append(nameCell, destCell, freqCell, arrCell, minCell);


        //append entire row to tbody (or maybe pre-pend so newest added on top)
        $("#train-list").append(thisRow);
    }

    // END PRINT TABLE ROW


    //PAGE LOAD MASTER FUNCTION
        //Calls all necessary functions when it itself is called on page load?
    //END PAGE LOAD MASTER FUNCTION

//===================== END FUNCTIONS ========================//

//===================== CODE BODY ========================//
    // listener for new child being added to firebase
    dataRef.ref().on("child_added", fireBaseFetch(snapshot));

    // call page load function
    // on click update page, calls page load function
    
//===================== END CODE BODY ========================//

//TEST CODE AREA
//test function call
// printTableRow('Midnight Train', 'Chicago', '30', '2:00 PM', '22');

//END TEST CODE AREA