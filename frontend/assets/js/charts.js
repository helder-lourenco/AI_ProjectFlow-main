const ctx = document.getElementById("evolucaoGrafico").getContext("2d");
new Chart(ctx, {
  type: "line",
  data: {
    labels: ["Jan", "Fev", "Mar", "Abr", "Mai"],
    datasets: [
      {
        label: "Progresso do Projeto",
        data: [10, 25, 45, 70, 90],
        borderColor: "rgba(75, 192, 192, 1)",
        fill: false,
        tension: 0.1,
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      legend: { display: true },
    },
  },
});
