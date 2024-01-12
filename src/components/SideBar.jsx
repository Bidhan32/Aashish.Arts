// Sidebar.jsx

import React from 'react';
import { Link } from 'react-router-dom';


const SideBar = () => {
  return (
    <div id="sidebar" className='container'>
      <div className="sidebar-header">
        <h3>Choose Category</h3>
      </div>
      <ul className="list-unstyled components">
        <li>
          <Link to="#cricket" className="nav-link">
            Cricket
          </Link>
        </li>
        <li>
          <Link to="#football" className="nav-link">
            Football
          </Link>
        </li>
        <li>
          <Link to="#maxwell" className="nav-link">
            Glenn Maxwell
          </Link>
        </li>
        <li>
          <Link to="#brettLee" className="nav-link">
            Brett Lee
          </Link>
        </li>
      </ul>

       
    </div>
  );
}

export default SideBar;
