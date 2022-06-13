import React from 'react'
import ChartBar from './ChartBar'
import './Chart.css'
export default function Chart({dataPoints}) {
  const valueArray = dataPoints.map(datapoint=>datapoint.value)
  const maxValue = Math.max(...valueArray);
  return (
    <div className='chart'>
      {dataPoints.map(datapoint => 
      <ChartBar
      key = {datapoint.label}
      value={datapoint.value}
      max = {maxValue}
      label={datapoint.label}
      />)}
    </div>
  )
}
