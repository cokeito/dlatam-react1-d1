import React from 'react'
import "./Card.css"

const Card = (props) => {
  return (
    <div className="card">
      <img src={props.url} alt="Imagen" className="img-card"></img>
      <div className="container">
        <h5 className="card-title"><b>{props.title}</b></h5>
        <p className="card-description"> Network: {props.description}</p>
      </div>
    </div>
  )
}

export default Card