// Conjunto de dados por tipo de filtro selecionado
const dadosPorFiltro = {
  todos: {
    pizza: [44%, 37%, 11%, 10%], // Redes Sociais, Portais, TV, Outros
    barras: [18, 12]          // Acreditaram/Compartilharam, Ficaram na dúvida/Pesquisaram
  },
  portais: {
    pizza: [0, 100, 0, 0],
    barras: [2, 28]           // Maioria pesquisou e checou a farsa
  },
  redes: {
    pizza: [100, 0, 0, 0],
    barras: [25, 5]           // Maioria acreditou de cara
  }
};

// Configuração do Gráfico 1 (Pizza)
const ctxPizza = document.getElementById('graficoPizza').getContext('2d');
const graficoPizza = new Chart(ctxPizza, {
  type: 'pie',
  data: {
    labels: ['Redes Sociais', 'Portais de Notícias', 'TV', 'Outros'],
    datasets: [{
      data: dadosPorFiltro.todos.pizza,
      backgroundColor: ['#42a5f5', '#66bb6a', '#ffa726', '#ab47bc']
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

// Configuração do Gráfico 2 (Barras)
const ctxBarras = document.getElementById('graficoBarras').getContext('2d');
const graficoBarras = new Chart(ctxBarras, {
  type: 'bar',
  data: {
    labels: ['Acreditaram e Compartilharam', 'Ficaram na dúvida e Pesquisaram'],
    datasets: [{
      label: 'Alunos',
      data: dadosPorFiltro.todos.barras,
      backgroundColor: ['#ab47bc', '#42a5f5']
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: { beginAtZero: true, max: 30 }
    },
    plugins: {
      legend: { display: false }
    }
  }
});

// Função para atualizar os gráficos dinamicamente ao mudar o filtro
function atualizarDashboard() {
  const valorFiltro = document.getElementById('canalFiltro').value;
  const novosDados = dadosPorFiltro[valorFiltro];

  // Atualiza Gráfico de Pizza
  graficoPizza.data.datasets[0].data = novosDados.pizza;
  graficoPizza.update();

  // Atualiza Gráfico de Barras
  graficoBarras.data.datasets[0].data = novosDados.barras;
  graficoBarras.update();
}