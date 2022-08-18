import React from 'react';
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import Grid from './Grid/Grid';

const Layout = () => {
  return (
    <div className="layout">
      <Header />
      <Sidebar />
      <Grid />
    </div>
  );
};

export default Layout;
