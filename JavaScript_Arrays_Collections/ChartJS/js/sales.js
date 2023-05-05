let ctx = document.getElementById("monthlySales").getContext("2d");
let pieCtx = document.getElementById("deptSales").getContext("2d");

let quaterRevenue = document.getElementById("quaterRevenue");

let monthlySales = Array.of(500, 9000, 3000);
let monthLables = Array.of("Oct", "Nov", "Dec");

let deptSales = Array.of(12, 9, 3);
let deptLabels = Array.of("Hiking", "Running", "Hunting");

function addQuaterTotal(firstMonth, secondMonth, thirdMonth) {
  return firstMonth + secondMonth + thirdMonth;
}

let octNums = Array.of(1200, 1000, 9000);
let novNums = Array.of(1100, 2000, 9000);
let decNums = Array.of(4000, 1000, 5000);

let total = Array.of(
  addQuaterTotal(...octNums),
  addQuaterTotal(...novNums),
  addQuaterTotal(...decNums)
);

let quaterTotal = addQuaterTotal(...monthlySales);

quaterRevenue.innerHTML = "$" + quaterTotal;

function findOver1000() {
  let firstThousand = monthlySales.findIndex((element) => element > 1000);
  alert(firstThousand);
}

var monthlySalesChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: monthLables,
    datasets: [
      {
        label: "# of Sales",
        data: monthlySales,
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
      yAxes: [
        {
          tricks: {
            beginAtZero: true,
          },
        },
      ],
    },
  },
});

var deptSalesChart = new Chart(pieCtx, {
  type: "pie",
  data: {
    labels: deptLabels,
    datasets: [
      {
        label: "# of Sales",
        data: deptSales,
        backgroundColor: [
          "rgba(238,184,104,1)",
          "rgba(75,166,223,1)",
          "rgba(239,118,122,1)",
        ],
        borderWidth: 0,
      },
    ],
  },
  options: {},
});
