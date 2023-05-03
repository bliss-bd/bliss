import React from 'react';
import { Outlet } from 'react-router-dom';
import Navber from '../../Pages/Shared/Navber/Navber';
import Footer from '../../Pages/Shared/Footer/Footer';
import DashBoardHome from '../../DashboardPages/DashboardHome/DashBoardHome';

const Dashboard = () => {
  return (
    <div>
      <>
      <Navber></Navber>
      <DashBoardHome></DashBoardHome>
      </>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Dashboard;