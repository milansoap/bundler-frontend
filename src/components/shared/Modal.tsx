import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Element } from "../../models/Element";
import ElementService from "../../services/ElementService";
import ElementList from "../ElementList/ElementList";

interface ModalProps {
  closeModal: () => void;
}

const Modal: React.FC<ModalProps> = ({ closeModal }) => {
  const [elements, setElements] = useState<Element[]>([]); // Add this state

  useEffect(() => {
    ElementService.fetchAllNonCustomElements()
      .then((data) => setElements(data))
      .catch((error) => console.log("Error fetching elements: ", error));
  }, []);
  console.log(elements);
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
        <div className="body">
          <ElementList elements={elements} />
        </div>
        <div className="footer-modal">
          <button className="btn btn__primary w-full">Pick Element</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
