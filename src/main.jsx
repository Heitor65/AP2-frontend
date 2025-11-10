<<<<<<< HEAD
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
=======
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
>>>>>>> 58d8738bf7a95102650c73f25c9fc3d8fc3d40de
