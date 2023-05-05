let ctx = document.getElementById("monthlySales").getContext("2d");
let pieCtx = document.getElementById("deptSales").getContext("2d");

let quaterRevenue = document.getElementById("quaterRevenue");

let newAmount = document.getElementById("itemAmount");
let newMonth = document.getElementById("monthID");

let quaterTotal = 0;

const monthlySales = new Set();
const monthLables = new Set();

function addSale() {
  monthlySales.add(newAmount.value);
  monthLables.add(newMonth.value);
  alert("You have entered in " + monthlySales.size + " sales");
}

function deleteSale() {
  monthlySales.delete("1500");
  console.log(monthlySales);
}

// var monthlySalesChart = new Chart(ctx, {
//   type: "bar",
//   data: {
//     labels: monthLables,
//     datasets: [
//       {
//         label: "# of Sales",
//         data: monthlySales,
//         backgroundColor: [
//           "rgba(238,184,104,1)",
//           "rgba(75,166,223,1)",
//           "rgba(239,118,122,1)",
//         ],
//         borderWidth: 0,
//       },
//     ],
//   },
//   options: {
//     scales: {
//       yAxes: [
//         {
//           tricks: {
//             beginAtZero: true,
//           },
//         },
//       ],
//     },
//   },
// });
//
// var deptSalesChart = new Chart(pieCtx, {
//   type: "pie",
//   data: {
//     labels: deptLabels,
//     datasets: [
//       {
//         label: "# of Sales",
//         data: deptSales,
//         backgroundColor: [
//           "rgba(238,184,104,1)",
//           "rgba(75,166,223,1)",
//           "rgba(239,118,122,1)",
//         ],
//         borderWidth: 0,
//       },
//     ],
//   },
//   options: {},
// });
