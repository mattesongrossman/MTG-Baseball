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
