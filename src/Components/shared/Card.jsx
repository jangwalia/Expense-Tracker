import React from 'react'
import './Card.css'
export default function Card(props) {
  const styles = 'CardStyle ' + props.className;
  return (
    <div className= {styles}>
     { props.children}
    </div>
  )
}
