// Base de dados baseada nas 27 respostas reais
const dadosFiltro = {
  todas: {
    pie: [12, 10, 3, 2], // Mensagens, Nenhuma, Jogos, Redes Sociais
    bar: [14, 7, 6]      // Olham imediatamente, Esperam pausa, Ignoram
  },
  mensagens: {
    pie: [12, 0, 0, 0],
    bar: [10, 2, 0]      // Grupo isolado: a grande maioria olha de imediato
  },
  nenhuma: {
    pie: [0, 10, 0, 0],
    bar: [1, 3, 6]       // Grupo isolado: a maioria ignora até o fim
  }
};

// Gráfico 1 - Pizza (Notificações)
const ctxPie = document.getElementById('chartPie').getContext('2d');
const chartPie = new Chart(ctxPie, {
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

// Gráfico 2 - Barras (Reação)
const ctxBar = document.getElementById('chartBar').getContext('2d');
const chartBar = new Chart(ctxBar, {
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

// Função de Interatividade do Filtro
function filtrarDados() {
  const chave = document.getElementById('filtroNotificacao').value;
  const selecao = dadosFiltro[chave];

  // Atualização dinâmica dos 2 gráficos em simultâneo
  chartPie.data.datasets[0].data = selecao.pie;
  chartPie.update();

  chartBar.data.datasets[0].data = selecao.bar;
  chartBar.update();
}