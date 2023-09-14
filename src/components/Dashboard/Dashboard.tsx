import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // if you are using react-router-dom
import { AuthContext } from "../../context/AuthProvider";
import { useAuth } from "../../hooks/UseAuth";
import WithAuth from "../../wrappers/WithAuth";
import EditorSettings from "./Panel/Panel";
import { Canvas } from "./Canvas/Canvas";
import Panel from "./Panel/Panel";
import { GlobalElementProvider } from "../../context/SelectedGobalElementContext";

const Dashboard = () => {
  const [currentSettings, setCurrentSettings] = useState(null);

  return (
    <>
      <GlobalElementProvider>
        <div className="dashboard-container">
          <div className="panel">
            <Panel />
          </div>
          <Canvas />
        </div>
      </GlobalElementProvider>
    </>
  );
};

export default WithAuth(Dashboard);
