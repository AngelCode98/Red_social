import React from 'react';

export default function SidebarProfile() {
  return (
    <div className="w3-col m3">
      <div className="w3-card w3-round w3-white">
        <div className="w3-container">
          <h4 className="w3-center">Mi Perfil</h4>
          <p className="w3-center">
            <img
              src="https://www.w3schools.com/w3images/avatar3.png"
              alt="Avatar"
              className="w3-circle"
              style={{ height: '106px', width: '106px' }}
            />
          </p>
          <hr />
          <p><i className="fa fa-pencil fa-fw w3-margin-right w3-text-theme"></i> Web Developer</p>
          <p><i className="fa fa-home fa-fw w3-margin-right w3-text-theme"></i> Colombia</p>
          <p><i className="fa fa-birthday-cake fa-fw w3-margin-right w3-text-theme"></i> 26 años</p>
        </div>
      </div>
      <br />
    </div>
  );
}
