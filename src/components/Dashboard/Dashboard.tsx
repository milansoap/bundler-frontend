import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // if you are using react-router-dom
import { AuthContext } from "../../context/AuthProvider";
import { useAuth } from "../../hooks/UseAuth";
import WithAuth from "../../wrappers/WithAuth";
import EditorSettings from "./Panel/Panel";
import { Canvas } from "./Canvas/Canvas";
import Panel from "./Panel/Panel";

const Dashboard = () => {
  return (
    <>
      <div></div>
      <div className="dashboard-container">
        <div className="panel">
          <Panel />
        </div>
          <Canvas />
      </div>
    </>
  );
};

export default WithAuth(Dashboard);
