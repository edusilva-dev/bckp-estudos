import './App.css'
import React from 'react'

import Card from './components/layout/Card'
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Aleatorio from './components/basicos/Aleatorio'

export default props => {
  return (
    <div className="app">
      <h1>Fundamentos React (Arrow)</h1>

      <div className="cards">
        <Card titulo="#3 - Desafio Aleatório" color="#080">
          <Aleatorio max={255} min={100} />
        </Card>

        <Card titulo="#2 - Com Parâmetro" color="#000">
          <ComParametro titulo="Segundo componente" subtitulo="Aprender é legal" />
        </Card>

        <Card titulo="#1 - Primeiro Componente">
          <Primeiro />
        </Card>
      </div>
    </div>
  )
}