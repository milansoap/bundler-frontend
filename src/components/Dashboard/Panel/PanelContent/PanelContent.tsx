import React, { useEffect, useState } from "react";
import PanelContentHeader from "./PanelContentHeader/PanelContentHeader";
import PanelContentSettings from "./PanelContentSettings/PanelContentSettings";
import { useGlobalElement } from "../../../../context/SelectedGobalElementContext";
import { getHeadersByElementType } from "../../../../helpers/getHeadersByElementType";
import { Header } from "../../../../models/settings/Header";
import { usePanelContext } from "../../../../context/PanelContext";
import PageList from "./PanelContentSettings/PageList/PageList";
import Logs from "./PanelContentSettings/Logs/Logs";
const PanelContent = () => {
  const { activePanel } = usePanelContext();

  const { selectedGlobalElement } = useGlobalElement();
  const [selectedHeader, setSelectedHeader] = useState<Header | null>(null);

  const headerPropsArray = selectedGlobalElement
    ? getHeadersByElementType(selectedGlobalElement)
    : [];

  useEffect(() => {
    const headerPropsArray = selectedGlobalElement
      ? getHeadersByElementType(selectedGlobalElement)
      : [];
    // setting default header
    if (!selectedHeader && headerPropsArray.length > 0) {
      setSelectedHeader(headerPropsArray[2]);
    }
  }, [selectedGlobalElement, selectedHeader]);

  return (
    <>
      <div className="content">
        {activePanel === "ElementEditor" && (
          <>
            <PanelContentHeader
              headers={headerPropsArray}
              setSelectedHeader={setSelectedHeader}
              selectedHeader={selectedHeader}
            />
            <PanelContentSettings selectedHeader={selectedHeader} />
          </>
        )}
        {activePanel === "DatabasePages" && <PageList />}
        {activePanel === "Logs" && <Logs />}

      </div>
    </>
  );
};

export default PanelContent;
