import React, { useEffect, useState } from 'react'
import {
  PieChart, Pie, Sector, Cell, LabelList
} from 'recharts'

import styles from './styles.module.css'

const Stats = (props) => {
  const { data } = props
  const COLORS = ['#48d4ff', '#ff4e4e', '#FFBB28', '#FF8042']

  const RADIAN = Math.PI / 180
  const renderCustomizedLabel = ({
    cx, cy, midAngle, innerRadius, outerRadius, percent, index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5
    const x = cx + radius * Math.cos(-midAngle * RADIAN)
    const y = cy + radius * Math.sin(-midAngle * RADIAN)
    return (
      <text x={x} y={y} fill="black" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    )
  }

  return (
    <>
      <PieChart width={400} height={400}>
        <Pie
          data={data}
          cx={200}
          cy={200}
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
          nameKey="name"
          legendType="line"
          animationDuration={1500}
          isAnimationActive={false}
        >
          <LabelList dataKey="name" position="outside" angle="0" fill={'black'} stroke={'none'}  />
          {
            data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
          }
        </Pie>
      </PieChart>
    </>
  )
}

export default Stats
