import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import Modal from "../../shared/Modal";
import { useGlobalElement } from "../../../context/SelectedGobalElementContext";
import { MyElement } from "../../../models/MyElement";

export const Canvas = () => {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => {
    setIsOpen(false);
  };

  const { selectedGlobalElement, setSelectedGlobalElement } =
    useGlobalElement();
  const handleElementClick = (element: MyElement) => {
    setSelectedGlobalElement(element);
  };

  useEffect(() => {
    if (selectedGlobalElement) {
      const canvasEditor = document.getElementById("web-content");
      if (!canvasEditor) return;

      const elementToUpdate = Array.from(canvasEditor.children).find(
        (child: Element) => child.id == selectedGlobalElement.dom_id
      ) as HTMLElement;

      if (elementToUpdate) {
        console.log("PRONASLI SMO GA");
        for (let key in selectedGlobalElement.configuration) {
          // Convert your custom property names to CamelCase if needed
          let cssKey = key.replace(/_([a-z])/g, (g) => g[1].toUpperCase());
          (elementToUpdate.style as any)[cssKey] = (
            selectedGlobalElement.configuration as any
          )[key];
        }
      }
    }
  }, [selectedGlobalElement]);

  return (
    <div className="canvas">
      {isOpen && <Modal closeModal={closeModal} />}
      <div className="web-content" id="web-content"></div>
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
