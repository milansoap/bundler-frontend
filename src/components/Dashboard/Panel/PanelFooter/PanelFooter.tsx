import React from "react";
import { useAuth } from "../../../../hooks/UseAuth";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFloppyDisk, faRotateLeft } from "@fortawesome/free-solid-svg-icons";

const PanelFooter = () => {
  return (
    <>
      <div className="footer">
        <div className="content">
          <div className="history">
            <button className="svg-button">
              <FontAwesomeIcon icon={faRotateLeft} size="2xl" />
            </button>
          </div>
          <div className="publish">
            <button className="svg-button">
              <FontAwesomeIcon icon={faFloppyDisk} size="2xl" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PanelFooter;
