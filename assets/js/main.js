// let getPitchers = () => {
//   const findAll = db.any(
//     "SELECT * FROM pitcher_table WHERE ADP <999 ORDER BY ADP ASC"
//   );
// };
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
// //FROM STACK OVERFLOW
// function playerFilter() {
//   var input, filter, table, tr, td, i;
//   input = document.getElementById("search_input");
//   filter = input.value.toUpperCase();
//   table = document.getElementById("dataTable");
//   tr = table.getElementsByTagName("tr");
//
//   // Loop through all table rows, and hide those who don't match the search query
//   for (i = 0; i < tr.length; i++) {
//     td = tr[i].getElementsByTagName("td");
//     for (j = 0; j < td.length; j++) {
//       let tdata = td[j];
//       if (tdata) {
//         if (tdata.innerHTML.toUpperCase().indexOf(filter) > -1) {
//           tr[i].style.display = "";
//           break;
//         } else {
//           tr[i].style.display = "none";
//         }
//       }
//     }
//   }
// }
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
