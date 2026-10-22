// Dados REAIS extraídos da sua pesquisa (27 alunos)
const dadosPesquisa = {
  // Gráfico 1: Notificações que mais tiram a atenção
  notificacoes: {
    labels: [
      'Mensagens/Grupos (WhatsApp)', 
      'Nenhuma (Ignora todas)', 
      'Jogos/E-mails/Notícias', 
      'Redes Sociais (TikTok/Insta)'
    ],
    valores: [12, 10, 3, 2] // 12 (44.4%), 10 (37%), 3 (11.1%), 2 (7.4%)
  },
  
  // Gráfico 2: Reação ao telemóvel tocar na aula
  reacaoAula: {
    labels: [
      'Olham imediatamente', 
      'Esperam pausa do professor', 
      'Ignoram até ao final'
    ],
    valores: [14, 7, 6] // 14 (51.9%), 7 (25.9%), 6 (22.2%)
  }
};

// Configuração do Gráfico 1 (Pizza - Tipos de Notificação)
const ctxPizza = document.getElementById('graficoPizza').getContext('2d');
const graficoPizza = new Chart(ctxPizza, {
  type: 'pie',
  data: {
    labels: dadosPesquisa.notificacoes.labels,
    datasets: [{
      data: dadosPesquisa.notificacoes.valores,
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

// Configuração do Gráfico 2 (Barras - Reação durante a Aula)
const ctxBarras = document.getElementById('graficoBarras').getContext('2d');
const graficoBarras = new Chart(ctxBarras, {
  type: 'bar',
  data: {
    labels: dadosPesquisa.reacaoAula.labels,
    datasets: [{
      label: 'Quantidade de Alunos',
      data: dadosPesquisa.reacaoAula.valores,
      backgroundColor: ['#ef5350', '#ffca28', '#26a69a']
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: { beginAtZero: true, max: 20 }
    },
    plugins: {
      legend: { display: false }
    }
  }
});