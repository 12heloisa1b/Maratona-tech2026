* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

/* Fundo azul médio mais vivo e corporativo */
body {
  background-color: #bcd8ec;
  color: #1e293b;
  padding: 30px 15px;
}

.container {
  max-width: 1050px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 22px;
}

/* Cabeçalho Azul Marinho Profundo */
.main-header {
  text-align: center;
  background: #1e3a8a;
  color: #ffffff;
  padding: 25px;
  border-radius: 14px;
  box-shadow: 0 6px 18px rgba(30, 58, 138, 0.25);
}

.main-header h1 {
  font-size: 1.8rem;
  font-weight: 700;
}

.main-header .tagline {
  font-size: 1rem;
  opacity: 0.9;
  margin-top: 6px;
}

/* Cartões com fundo azul muito suave para contrastar com o fundo principal */
.card {
  background: #f1f7fc;
  border-radius: 14px;
  padding: 22px;
  border: 1px solid #93c5fd;
  box-shadow: 0 4px 12px rgba(15, 23, 42, 0.08);
}

.card h2 {
  font-size: 1.2rem;
  color: #1e3a8a;
  margin-bottom: 14px;
  border-bottom: 2px solid #cbd5e1;
  padding-bottom: 8px;
}

.grid-3 {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 16px;
}

.grid-2 {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 22px;
}

.info-box {
  background: #ffffff;
  padding: 14px;
  border-left: 5px solid #2563eb;
  border-radius: 8px;
  font-size: 0.95rem;
  box-shadow: 0 2px 5px rgba(0,0,0,0.03);
}

/* Filtro Interativo com realce em azul */
.filter-bar {
  background: #ffffff;
  padding: 18px 22px;
  border-radius: 12px;
  border: 2px solid #3b82f6;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 12px;
}

select {
  padding: 10px 16px;
  border-radius: 8px;
  border: 1px solid #64748b;
  background-color: #f8fafc;
  font-size: 0.95rem;
  color: #0f172a;
  font-weight: 600;
  outline: none;
  cursor: pointer;
}

.charts-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  gap: 22px;
}

.chart-card h3 {
  font-size: 1.05rem;
  color: #1d4ed8;
  text-align: center;
  margin-bottom: 15px;
}

/* Garante que o Chart.js encontre altura e largura para desenhar */
.chart-wrapper {
  position: relative;
  height: 280px;
  width: 100%;
}

.badge-success {
  background-color: #dcfce7;
  color: #15803d;
  padding: 4px 10px;
  border-radius: 6px;
  font-weight: 700;
  font-size: 0.9rem;
}

.espaco-topo {
  margin-top: 10px;
}