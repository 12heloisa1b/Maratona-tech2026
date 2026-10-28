// Objeto com os dados reais filtrados
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

// Variáveis globais para armazenar os gráficos
let graficoPizza = null;
let graficoBarras = null;

// Função executada assim que a página carrega totalmente
window.onload = function() {
  const ctxPie = document.getElementById('chartPie');
  const ctxBar = document.getElementById('chartBar');

  if (ctxPie && ctxBar) {
    // Inicializa o Gráfico 1 (Pizza)
    graficoPizza = new Chart(ctxPie.getContext('2d'), {
      type: 'pie',
      data: {
        labels: ['Mensagens/Grupos', 'Nenhuma (Ignoram)', 'Jogos/Notícias', 'Redes Sociais'],
        datasets: [{
          data: dadosFiltro.todas.pie,
          backgroundColor: ['#2563eb', '#16a34a', '#d97706', '#9333ea']
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

    // Inicializa o Gráfico 2 (Barras)
    graficoBarras = new Chart(ctxBar.getContext('2d'), {
      type: 'bar',
      data: {
        labels: ['Olham Imediatamente', 'Esperam Pausa', 'Ignoram até o Fim'],
        datasets: [{
          label: 'Nº de Estudantes',
          data: dadosFiltro.todas.bar,
          backgroundColor: ['#dc2626', '#eab308', '#0d9488']
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

    // Conecta o evento de alteração do Filtro Interativo
    const selectElement = document.getElementById('filtroNotificacao');
    if (selectElement) {
      selectElement.onchange = function() {
        const selecao = dadosFiltro[this.value];
        if (selecao && graficoPizza && graficoBarras) {
          graficoPizza.data.datasets[0].data = selecao.pie;
          graficoPizza.update();

          graficoBarras.data.datasets[0].data = selecao.bar;
          graficoBarras.update();
        }
      };
    }
  }
};