// let playerPoints = () => {
//   let table = document.getElementById("dataTable");
//   let tr = table.getElementsByTagName("tr");
//   for (let i = 0; i < 1; i++) {
//     let td = tr[i].getElementsByTagName("td");
//     for (let j = 4; j < 5; j++) {
//       let tData = td[j];
//       let points = Number(tData) * 2;
//       console.log(points);
//     }
//   }
// };
// playerPoints();

let draftedStatus = () => {
  $("#draftedCell").click(function() {
    $("#draftedStatus").submit();
    // alert("ya");
  });
};

$("#dataTable").dataTable({
  pageLength: 25
});

if ($("button").val() == "false") {
  $("button").css("background-color", "red");
}

// $("#draftedStatus").on("submit", evt => {
//   // evt.preventDefault();
//   // make ajax request to the /fantasy_central_pitchers/:id" route
//   // send a PUT request with the player data hitting that endpoint.
// });

$("button").click(evt => {
  let buttonTarget = (evt.target.innerHTML = "true");
  buttonTarget
    ? (evt.target.innerHTML = "false")
    : (evt.target.innerHTML = "true");
});
