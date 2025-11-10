// src/main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
// Importa o componente principal HomeCases da sua nova pasta Home
import HomeCases from './pages/Home/index.jsx' 
// Não precisamos importar CSS global aqui, pois você importa em index.jsx

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* O componente HomeCases é renderizado como a página principal */}
    <HomeCases />
  </React.StrictMode>,
)