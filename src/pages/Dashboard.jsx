import React, { useState } from 'react'
import DashboardHeader from '../components/DashboardHeader/DashboardHeader'
import DashboardBody from '../components/DashboardBody/DashboardBody'

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
  return (
    <div>
        <DashboardHeader activeTab={activeTab} handleTabChange={handleTabChange}/>
        <DashboardBody activeTab={activeTab}/>
    </div>
  )
}

export default Dashboard