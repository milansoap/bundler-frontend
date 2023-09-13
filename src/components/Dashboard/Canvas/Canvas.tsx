import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import Modal from "../../shared/Modal";

export const Canvas = () => {
  const [elements, setElements] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="canvas">
      {isOpen && <Modal closeModal={closeModal} elements={[]} />}
      <div className="web-content"></div>
      <div className="creator-container">
        <div className="icon">
          <button
            className="svg-button"
            onClick={() => {
              setIsOpen(true);
            }}
          >
            <FontAwesomeIcon
              icon={faPlus}
              size="2xl"
              style={{ color: "white" }}
            />
          </button>
        </div>
        <div className="text mt-2">Click Here To Add Your Content</div>
      </div>
    </div>
  );
};
