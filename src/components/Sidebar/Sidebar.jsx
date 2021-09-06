import React from 'react';
import { Link } from "react-router-dom";

import  './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Link to="/performance">Performance</Link>
      <Link to="/aprendizaje">Aprendizaje</Link>
    </div>
  )
}

export default Sidebar;