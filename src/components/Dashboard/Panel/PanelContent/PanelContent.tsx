import React, { useEffect } from "react";
import PanelContentHeader from "./PanelContentHeader/PanelContentHeader";
import PanelContentSettings from "./PanelContentSettings/PanelContentSettings";
import { useGlobalElement } from "../../../../context/SelectedGobalElementContext";
import { getHeadersByElementType } from "../../../../helpers/getHeadersByElementType";
const PanelContent = () => {
  const { selectedGlobalElement } = useGlobalElement();

  const headerPropsArray = selectedGlobalElement
    ? getHeadersByElementType(selectedGlobalElement)
    : [];

  useEffect(() => {
    console.log("Selected Element:", selectedGlobalElement);
    console.log(headerPropsArray);
  }, [selectedGlobalElement]);

  return (
    <>
      <div className="content">
        <PanelContentHeader headers={headerPropsArray} />
        <PanelContentSettings />
      </div>
    </>
  );
};

export default PanelContent;
