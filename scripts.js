// NextTrain train-timer app


//===================== GLOBAL VARIABLES ========================//
//===================== END GLOBAL VARIABLES ========================//

//===================== FUNCTIONS ========================//
    // NEW TRAIN FUNCTION
        // on form submit
        // captures form data in variables
        // packages form data
        // pushes to firebase DB
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