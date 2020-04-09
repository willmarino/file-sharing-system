import React from 'react';
// import DashboardBodyMain from '../dashboard_body_main/dashboard_body_main';
import DashboardBodyMainContainer from '../dashboard_body_main/dashboard_body_main_container';
import DashboardBodySidebar from '../dashboard_body_sidebar/dashboard_body_sidebar';

const DashboardBody = (props) => {
  return(
    <div className='db-body'>
      <DashboardBodySidebar mounted={props.mounted}/>
      <DashboardBodyMainContainer mounted={props.mounted}/>
    </div>
  )
}

export default DashboardBody;