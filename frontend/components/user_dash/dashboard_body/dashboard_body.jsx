import React from 'react';
import DashboardBodyMain from '../dashboard_body_main/dashboard_body_main';
import DashboardBodySidebar from '../dashboard_body_sidebar/dashboard_body_sidebar';

const DashboardBody = (props) => {
  return(
    <div className='db-body'>
      <DashboardBodySidebar mounted={props.mounted}/>
      <DashboardBodyMain mounted={props.mounted}/>
    </div>
  )
}

export default DashboardBody;