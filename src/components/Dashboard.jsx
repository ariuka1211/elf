import React from 'react'
import '../css/dashboard.css'
import Menu from './Menu'
import MainTable from './MainTable'

function Dashboard() {
  return (
    <div className='main'>
        <Menu />
        <MainTable />
    </div>
  )
}

export default Dashboard