import React from 'react';
import DashboardBodyMain from '../dashboard_body_main/dashboard_body_main';
import DashboardBodySidebar from '../dashboard_body_sidebar/dashboard_body_sidebar';

const DashboardBody = () => {
  return(
    <div className='db-body'>
      <DashboardBodySidebar/>
      <DashboardBodyMain/>
    </div>
  )
}

export default DashboardBody;