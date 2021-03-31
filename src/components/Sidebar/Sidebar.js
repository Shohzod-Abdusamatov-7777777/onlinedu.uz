import React from "react";
import { Link } from "react-router-dom";
import { SidebarContainer, SidebarWrapper } from "./SidebarElements";

const Sidebar = (props) => {
  const { setSideOpen, sideOpen } = props;

  return (
    <SidebarContainer sideOpen={sideOpen} onClick={() => setSideOpen(false)}>
      <SidebarWrapper sideOpen={sideOpen}>
        <div className="my-2">
          <button className="btn btn-outline-primary mr-2">Ru</button>
          <button className="btn btn-primary">Uzb</button>
        </div>
        <ul>
          <li>
            <Link to="/courses/1?category=25" className="dropdown-item">
              Aniq fanlar
            </Link>
          </li>
          <li>
            <Link to="/courses/1?category=26" className="dropdown-item">
              Tabiiy fanlar
            </Link>
          </li>
          <li>
            <Link to="/courses/1?category=27" className="dropdown-item">
              Xorijiy tillar
            </Link>
          </li>
        </ul>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
