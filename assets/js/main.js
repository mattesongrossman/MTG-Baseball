//
// // let playerFilter = () => {
// //   let $filterVal = $("input[type=search]").val();
// //   let $td = $("td");
// //   let $tr = $("tr");
// //   if ($filterVal) {
// //     for (let i = 0; i < 2; i++) {
// //       let $tableData = $tr[i].getElementsByTagName("td");
// //       let $playerCheck = $tableData.text();
// //       if ($filterVal !== $playerCheck) {
// //         $tr[i].hide();
// //       } else {
// //         $tr[i].show();
// //       }
// //     }
// //   }
// // };

//
// $("#search_input").keypress(function(key) {
//   if (key.which == 13) {
//     playerFilter();
//   }
// });
//
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
