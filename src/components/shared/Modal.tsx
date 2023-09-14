import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { MyElement } from "../../models/MyElement";
import ElementService from "../../services/ElementService";
import ElementList from "../ElementList/ElementList";
import { Configuration } from "../../models/Configuration";
import { useGlobalElement } from "../../context/SelectedGobalElementContext";

interface ModalProps {
  closeModal: () => void;
}

const Modal: React.FC<ModalProps> = ({ closeModal }) => {
  const [elements, setElements] = useState<MyElement[]>([]);
  const [selectedElement, setSelectedElement] = useState<MyElement | null>(
    null
  );
  const { setSelectedGlobalElement } = useGlobalElement();

  useEffect(() => {
    ElementService.fetchAllNonCustomElements()
      .then((data) => setElements(data))
      .catch((error) => console.log("Error fetching elements: ", error));
    console.log(selectedElement);
  }, []);

  useEffect(() => {
    console.log(selectedElement);
  }, [selectedElement]);

  function insertElementToCanvas(element: MyElement | null) {
    if (element === null) {
      console.error("Element is null, cannot proceed.");
      return;
    }

    const config: Configuration = element.configuration;
    const newDiv = document.createElement(config.element_type || "div");

    newDiv.style.color = config.text_color;
    newDiv.style.backgroundColor = config.background_color;
    newDiv.style.borderColor = config.border_color;
    newDiv.style.fontSize = config.font_size;
    newDiv.style.fontFamily = config.font_family;
    newDiv.innerHTML = config.content;
    newDiv.style.margin = config.margin;
    newDiv.style.padding = config.padding;
    newDiv.style.borderWidth = config.border_width;
    newDiv.style.borderStyle = config.border_style;
    newDiv.style.borderRadius = config.border_radius;
    newDiv.classList.add("hoverable");
    newDiv.addEventListener("click", () => {
      console.log("Element clicked");
      setSelectedGlobalElement(element);
    });

    // newDiv.addEventListener("click", () => {
    //   displayConfigInPanel(config);
    // });

    const canvasEditor = document.getElementById("web-content");

    if (!newDiv) {
      console.log("I DONT EXIST");
    }

    if (canvasEditor && newDiv) {
      canvasEditor.appendChild(newDiv);
    } else {
      console.error("Canvas editor or newDiv element not found");
    }
  }

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
          <ElementList
            elements={elements}
            setSelectedElement={setSelectedElement}
            selectedElement={selectedElement}
          />
        </div>
        <div className="footer-modal">
          <button
            className="btn btn__primary w-full"
            onClick={() => {
              insertElementToCanvas(selectedElement);
            }}
          >
            Pick Element
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
