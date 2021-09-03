import React from 'react'

export default (props) => {
  const between = Math.floor(Math.random() * (props.max - props.min +1)) + props.min
  return (
    <div>
      <h2><strong>Valor Aleatório</strong></h2>
      <h3>Valor mínimo: {props.min}</h3>
      <h3>Valor mínimo: {props.max}</h3>
      <h3>Valor aleatório: {between}</h3>
    </div>
  )
}