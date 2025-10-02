import React from 'react';
import SidebarProfile from './SidebarProfile';
import MainContent from './MainContent';
import RightSidebar from './RightSidebar';

export default function Layout() {
  return (
    <div className="w3-container w3-content" style={{ maxWidth: '1400px', marginTop: '80px' }}>
      <div className="w3-row">
        <SidebarProfile />
        <MainContent />
        <RightSidebar />
      </div>
    </div>
  );
}
