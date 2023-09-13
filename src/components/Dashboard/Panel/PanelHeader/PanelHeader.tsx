import { faBars, faLeftLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useAuth } from "../../../../hooks/UseAuth";
import { useNavigate } from "react-router-dom";

const PanelHeader = () => {
  const { setAuth } = useAuth();
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("authToken");
    setAuth({ isAuthenticated: false });
    navigate("/login");
  };
  return (
    <div className="header">
      <div className="content">
        <button className="svg-button">
          <div className="icon">
            <FontAwesomeIcon
              icon={faLeftLong}
              size="2xl"
              style={{ color: "#ecedef" }}
            />{" "}
          </div>
        </button>
        <div className="app-name">BUNDLER</div>
        <button className="svg-button">
          <div className="icon">
            <FontAwesomeIcon
              icon={faBars}
              size="2xl"
              style={{ color: "#ffffff" }}
            />{" "}
          </div>
        </button>
      </div>
    </div>
  );
};

export default PanelHeader;
