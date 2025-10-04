// Chart.js - Wind/Pressure graph
const ctx = document.getElementById('windChart').getContext('2d');

new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'],
    datasets: [{
      label: 'Wind Speed',
      data: [5,7,3,8,6,4,7],
      borderColor: '#00e0ff',
      backgroundColor: 'rgba(0,224,255,0.2)',
      fill: true,
      tension: 0.4
    }]
  },
  options: {
    plugins: { legend: { display: false } },
    scales: {
      x: { ticks: { color: '#fff' } },
      y: { ticks: { color: '#fff' } }
    }
  }
});