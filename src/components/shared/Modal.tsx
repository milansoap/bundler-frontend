import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Element } from "../../models/Element";

interface ModalProps {
  closeModal: () => void;
  elements: Element[];
}

const Modal: React.FC<ModalProps> = ({ closeModal, elements }) => {
  return (
    <div className="modal-background">
      <div className="modal-container">
        <div className="modal-container__title">
          <div className="modal-container__title__text">Pick your Block</div>
          <div className="modal-container__title__exit">
            <button className="svg-button" onClick={closeModal}>
              <FontAwesomeIcon
                icon={faX}
                size="2xl"
                style={{ color: "#ffffff" }}
              />
            </button>
          </div>
        </div>
        <hr></hr>
        <div className="body">FETCHED ITEMS</div>
        <div className="footer-modal">
          <button className="btn btn__primary w-full">Pick Element</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
