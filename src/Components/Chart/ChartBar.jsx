import React from 'react'
import './ChartBar.css'
export default function ChartBar({label,value,max}) {
  let barFilledColor = '0%';
  if(max > 0) {
    barFilledColor = Math.round((value/max) * 100) + '%';
  }
  return (
    <div className='outerBar'>
      <div className="innerBar">
        <div className="barFill" style={{height: barFilledColor}}></div>
      </div>
      <div className="barLabel">{label}</div>
    </div>
  )
}
