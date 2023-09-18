import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // if you are using react-router-dom
import { AuthContext } from "../../context/AuthProvider";
import { useAuth } from "../../hooks/UseAuth";
import WithAuth from "../../wrappers/WithAuth";
import EditorSettings from "./Panel/Panel";
import { Canvas } from "./Canvas/Canvas";
import Panel from "./Panel/Panel";
import { GlobalElementProvider } from "../../context/SelectedGobalElementContext";
import { PanelProvider } from "../../context/PanelContext";
import { CurrentPageProvider } from "../../context/CurrentPageProvider";
import { ElementsProvider } from "../../context/ElementsFromCurrentContext";

const Dashboard = () => {
  const [currentSettings, setCurrentSettings] = useState(null);

  return (
    <>
      <PanelProvider>
        <GlobalElementProvider>
          <CurrentPageProvider>
            <ElementsProvider>
              <div className="dashboard-container">
                <div className="panel">
                  <Panel />
                </div>
                <Canvas />
              </div>
            </ElementsProvider>
          </CurrentPageProvider>
        </GlobalElementProvider>
      </PanelProvider>
    </>
  );
};

export default WithAuth(Dashboard);
