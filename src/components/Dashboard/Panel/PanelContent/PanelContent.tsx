import React from "react";
import PanelContentHeader from "./PanelContentHeader/PanelContentHeader";
import PanelContentSettings from "./PanelContentSettings/PanelContentSettings";

const PanelContent = () => {
  return (
    <>
      <div className="content">
        <PanelContentHeader />
        <PanelContentSettings />
      </div>
    </>
  );
};

export default PanelContent;
