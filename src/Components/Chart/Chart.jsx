import React from 'react'
import ChartBar from './ChartBar'
import './Chart.css'
export default function Chart({dataPoints}) {
  return (
    <div>
      {dataPoints.map(datapoint => 
      <ChartBar
      key = {dataPoint.label}
      value={datapoint.value}
      max = {null}
      label={datapoint.label}
      />)}
    </div>
  )
}
