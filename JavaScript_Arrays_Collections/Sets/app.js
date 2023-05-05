let ctx = document.getElementById("monthlySales").getContext("2d");
let pieCtx = document.getElementById("deptSales").getContext("2d");

let quaterRevenue = document.getElementById("quaterRevenue");

let newAmount = document.getElementById("itemAmount");
let newMonth = document.getElementById("monthID");

let quaterTotal = 0;

const monthlySales = new Set();
const monthLables = new Set();

function addSale() {
  monthlySales.add(parseInt(newAmount.value));
  monthLables.add(newMonth.value);

  quaterTotal = 0;
  monthlySalesChart.data.datasets.forEach((element) => {
    element.data = [];
  });
  for (let amount of monthlySales) {
    quaterTotal += amount;
    monthlySalesChart.data.datasets.forEach((dataset) => {
      dataset.data.push(amount);
    });
  }

  monthlySalesChart.data.labels = Array.from(monthLables);
  monthlySalesChart.update();
  newMonth.value = "";
  newAmount.value = "";
}

function deleteSale() {
  monthlySales.delete("1500");
  console.log(monthlySales);
}

function addTotal() {
  quaterRevenue.innerHTML = "$" + quaterTotal;
}

var monthlySalesChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: [],
    datasets: [
      {
        label: "# of Sales",
        data: [],
        backgroundColor: [
          "rgba(238,184,104,1)",
          "rgba(75,166,223,1)",
          "rgba(239,118,122,1)",
        ],
        borderWidth: 0,
      },
    ],
  },
  options: {
    scales: {
      y: [
        {
          min: 0,
          tricks: {
            beginAtZero: true,
          },
        },
      ],
    },
  },
});
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
