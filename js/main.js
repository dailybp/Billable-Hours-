// Initialize Firebase
  var config = {
    apiKey: "AIzaSyDBOhLxkxwNxmHcZk9bGOgZO6BUlSyOXMI",
    authDomain: "billable-hours-ad3b0.firebaseapp.com",
    databaseURL: "https://billable-hours-ad3b0.firebaseio.com",
    projectId: "billable-hours-ad3b0",
    storageBucket: "",
    messagingSenderId: "681334220029"
  };
  firebase.initializeApp(config);

var url ="https://my-train-schedule.firebaseio.com/";
var dataRef = firebase.database();

console.log(dataRef);

$("#employee-submit").on("click", function(event){
  event.preventDefault();

  var name = $('#name-input').val().trim();
  var role = $('#role-input').val().trim();
  var startDate = moment($('#start-date-input').val().trim(),"DD/MM/YY").format();
  // var monthlyRate = $('#monthly-rate-input').val().trim();

  var newEmp = {
    name: name,
    role: role,
    startDate: startDate,
    // rate: monthlyRate
  };

  dataRef.ref().push(newEmp);
    console.log(newEmp.name);
    console.log(newEmp.role);
    console.log(newEmp.startDate);
    // console.log(newEmp.monthlyRate);

    // alert("Employee Added");

})
// $(document).ready(function() {
//
//      $("#employee-submit").on("click", function() {
//       // YOUR TASK!!!
//       // Code in the logic for storing and retrieving the most recent user.
//       // Dont forget to provide initial data to your Firebase database.
//       name = $('#name-input').val().trim();
//       role = $('#role-input').val().trim();
//       startDate = $('#start-date-input').val().trim();
//       monthlyRate = $('#monthly-rate-input').val().trim();
// database.ref().push({
//
// });



          // firstTimeConverted = moment(firstTrainTime, "hh:mm").subtract(1, "years");
          // currentTime = moment();
          // diffTime = moment().diff(moment(firstTimeConverted), "minutes");
          // tRemainder = diffTime % frequency;
          // minutesTillTrain = frequency - tRemainder;
          // nextTrain = moment().add(minutesTillTrain, "minutes");
          // nextTrainFormatted = moment(nextTrain).format("hh:mm");

//      	// Code for the push
//      	keyHolder = dataRef.push({
//      		name: name,
//      		destination: destination,
//      		firstTrainTime: firstTrainTime,  // 2:22 in my example
//      		frequency: frequency,
//                nextTrainFormatted: nextTrainFormatted,
//                minutesTillTrain: minutesTillTrain
//      	});
//           // The notes below are for finding the path to the key in the data being pushed, leaving as notes to save for later use.
//           /*console.log(keyHolder.path.u[0]);
//           var key = keyHolder.path.u[0];
//           console.log(key);*/
//      	// Don't refresh the page!
//
//           $('#name-input').val('');
//      	$('#destination-input').val('');
//      	$('#first-train-time-input').val('');
//      	$('#frequency-input').val('');
//
//      	return false;
//      });
//           //id=" + "'" + keyHolder.path.u[0] + "'" + "
//      dataRef.on("child_added", function(childSnapshot) {
// 	// full list of items to the well
//
// 		$('.train-schedule').append("<tr class='table-row' id=" + "'" + childSnapshot.key() + "'" + ">" +
//                "<td class='col-xs-3'>" + childSnapshot.val().name +
//                "</td>" +
//                "<td class='col-xs-2'>" + childSnapshot.val().destination +
//                "</td>" +
//                "<td class='col-xs-2'>" + childSnapshot.val().frequency +
//                "</td>" +
//                "<td class='col-xs-2'>" + childSnapshot.val().nextTrainFormatted + // Next Arrival Formula ()
//                "</td>" +
//                "<td class='col-xs-2'>" + childSnapshot.val().minutesTillTrain + // Minutes Away Formula
//                "</td>" +
//                "<td class='col-xs-1'>" + "<input type='submit' value='remove train' class='remove-train btn btn-primary btn-sm'>" + "</td>" +
//           "</tr>");
// // Handle the errors
// }, function(errorObject){
// 	//console.log("Errors handled: " + errorObject.code)
// });
//
// $("body").on("click", ".remove-train", function(){
//      $(this).closest ('tr').remove();
//      getKey = $(this).parent().parent().attr('id');
//      dataRef.child(getKey).remove();
// });
//
// }); // Closes jQuery wrapper
