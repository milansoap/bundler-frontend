import React, { useEffect, useState } from "react";
import PanelContentHeader from "./PanelContentHeader/PanelContentHeader";
import PanelContentSettings from "./PanelContentSettings/PanelContentSettings";
import { useGlobalElement } from "../../../../context/SelectedGobalElementContext";
import { getHeadersByElementType } from "../../../../helpers/getHeadersByElementType";
import { Header } from "../../../../models/settings/Header";
const PanelContent = () => {
  const { selectedGlobalElement } = useGlobalElement();
  const [selectedHeader, setSelectedHeader] = useState<Header | null>(null); // Here is where the state is defined

  const headerPropsArray = selectedGlobalElement
    ? getHeadersByElementType(selectedGlobalElement)
    : [];
  useEffect(() => {
    console.log("Selected Element:", selectedGlobalElement);
    console.log(headerPropsArray);
    console.log("SELECTED HEADER" + selectedHeader?.title);
  }, [selectedGlobalElement, selectedHeader]);

  return (
    <>
      <div className="content">
        <PanelContentHeader
          headers={headerPropsArray}
          setSelectedHeader={setSelectedHeader}
        />
        <PanelContentSettings selectedHeader={selectedHeader} />
      </div>
    </>
  );
};

export default PanelContent;
