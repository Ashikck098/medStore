import React from 'react'
import "./DashboardBody.css"
import AddProduct from './AddProduct'
import Orders from './Orders'

const DashboardBody = ({activeTab}) => {


  return (
    <div className='dashboardBody_main'>
      {activeTab === "tab1" && ( <AddProduct/>)}

      {activeTab === "tab2" && ( <Orders/>)}
    </div>
  )
}

export default DashboardBody