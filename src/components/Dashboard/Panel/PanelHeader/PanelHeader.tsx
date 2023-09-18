import { faBars, faLeftLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useAuth } from "../../../../hooks/UseAuth";
import { useNavigate } from "react-router-dom";
import { usePanelContext } from "../../../../context/PanelContext";

const PanelHeader = () => {
  const { setAuth } = useAuth();
  const navigate = useNavigate();
  const { setActivePanel } = usePanelContext(); // Assuming you have setActivePanel in your context

  const openDatabasePagesList = () => {
    setActivePanel("DatabasePages"); // or whatever panel you want to switch to
  };
  // const logout = () => {
  //   localStorage.removeItem("authToken");
  //   setAuth({ isAuthenticated: false });
  //   navigate("/login");
  // };

  return (
    <div className="header">
      <div className="content">
        <button className="svg-button" onClick={openDatabasePagesList}>
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
