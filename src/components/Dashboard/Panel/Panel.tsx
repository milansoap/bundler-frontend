import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../hooks/UseAuth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faLeftLong } from "@fortawesome/free-solid-svg-icons";
import PanelHeader from "./PanelHeader/PanelHeader";
import PanelFooter from "./PanelFooter/PanelFooter";
import PanelContent from "./PanelContent/PanelContent";

const Panel = () => {
  return (
    <>
      <PanelHeader />
      <PanelContent />
      <PanelFooter />
    </>
  );
};

export default Panel;
