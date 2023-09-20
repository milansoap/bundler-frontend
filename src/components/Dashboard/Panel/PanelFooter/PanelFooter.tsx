import React from "react";
import { useAuth } from "../../../../hooks/UseAuth";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFloppyDisk, faRotateLeft } from "@fortawesome/free-solid-svg-icons";
import { useCurrentPage } from "../../../../context/CurrentPageProvider";
import { useElementsContext } from "../../../../context/ElementsFromCurrentContext";
import PagesService from "../../../../services/PagesService";
import { usePanelContext } from "../../../../context/PanelContext";
import toast, { Toaster } from "react-hot-toast";

const PanelFooter = () => {
  const { currentPageElements } = useElementsContext();
  const { pageId } = useCurrentPage();
  const { setActivePanel } = usePanelContext();
  const openLogsList = () => {
    setActivePanel("Logs");
  };

  const handleSaveClick = async () => {
    if (currentPageElements && pageId !== null) {
      try {
        await PagesService.saveElements(currentPageElements, pageId);
        console.log("Elements saved successfully.");
        toast("Elements saved successfully.", {
          icon: "✔️",
          style: {
            borderRadius: "10px",
            background: "green",
            color: "#fff",
          },
        });
      } catch (error) {
        console.log("Failed to save elements:", error);
        toast("Failed to save elements.", {
          icon: "❌",
          style: {
            borderRadius: "10px",
            background: "red",
            color: "#fff",
          },
        });
      }
    }
  };

  return (
    <>
      <div className="footer">
        <Toaster />
        <div className="content">
          <div className="history">
            <button className="svg-button" onClick={openLogsList}>
              <FontAwesomeIcon icon={faRotateLeft} size="2xl" />
            </button>
          </div>
          <div className="publish">
            <button className="svg-button" onClick={handleSaveClick}>
              <FontAwesomeIcon icon={faFloppyDisk} size="2xl" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PanelFooter;
