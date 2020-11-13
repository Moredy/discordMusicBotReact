import React from 'react';




const Header = ({ handdleLogout }) => {
  



  return (
    <div>
      <h2>Welcome</h2>
      <button onClick={handdleLogout}>Logout</button>

    </div>

  );
}

export default Header
