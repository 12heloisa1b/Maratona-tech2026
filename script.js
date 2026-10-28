document.addEventListener("DOMContentLoaded", function() {
  const dadosFiltro = {
    todas: {
      pie: [12, 10, 3, 2],
      bar: [14, 7, 6]
    },
    mensagens: {
      pie: [12, 0, 0, 0],
      bar: [10, 2, 0]
    },
    nenhuma: {
      pie: [0, 10, 0, 0],
      bar: [1, 3, 6]
    }
  };

  const ctxPie = document.getElementById('chartPie').getContext('2d');
  window.chartPie = new Chart(ctxPie, {
    type: 'pie',
    data: {
      labels: ['Mensagens/Grupos', 'Nenhuma (Ignoram)', 'Jogos/Notícias', 'Redes Sociais'],
      datasets: [{
        data: dadosFiltro.todas.pie,
        backgroundColor: ['#3a7bd5', '#4caf50', '#ff9800', '#9c27b0']
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { position: 'bottom' }
      }
    }
  });

  const ctxBar = document.getElementById('chartBar').getContext('2d');
  window.chartBar = new Chart(ctxBar, {
    type: 'bar',
    data: {
      labels: ['Olham Imediatamente', 'Esperam Pausa', 'Ignoram até o Fim'],
      datasets: [{
        label: 'Nº de Estudantes',
        data: dadosFiltro.todas.bar,
        backgroundColor: ['#e53935', '#fbc02d', '#009688']
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: { beginAtZero: true, max: 16 }
      },
      plugins: {
        legend: { display: false }
      }
    }
  });

  window.filtrarDados = function() {
    const chave = document.getElementById('filtroNotificacao').value;
    const selecao = dadosFiltro[chave];

    window.chartPie.data.datasets[0].data = selecao.pie;
    window.chartPie.update();

    window.chartBar.data.datasets[0].data = selecao.bar;
    window.chartBar.update();
  };
});