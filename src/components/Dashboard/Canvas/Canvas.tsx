import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import Modal from "../../shared/Modal";
import { useGlobalElement } from "../../../context/SelectedGobalElementContext";
import { MyElement } from "../../../models/MyElement";
import { usePanelContext } from "../../../context/PanelContext";
import { useCurrentPage } from "../../../context/CurrentPageProvider";
import { Page } from "../../../models/Page";
import PagesService from "../../../services/PagesService";
import { useElementsContext } from "../../../context/ElementsFromCurrentContext";

interface CanvasProps {
  pageId: number;
}

export const Canvas = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { setActivePanel } = usePanelContext();
  const [currentPage, setCurrentPage] = useState<Page | null>(null);
  const { currentPageElements, setCurrentPageElements } = useElementsContext();

  const { selectedGlobalElement, setSelectedGlobalElement } =
    useGlobalElement();

  const [updatedElements, setUpdatedElements] = useState([]);

  const { pageId } = useCurrentPage();

  const closeModal = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (currentPageElements) {
      const canvasEditor = document.getElementById("web-content");
      if (canvasEditor) {
        canvasEditor.innerHTML = ""; // Clear the canvas first
      }
      currentPageElements.forEach((element: MyElement) => {
        if (element.configuration && canvasEditor) {
          const newDiv = document.createElement(
            element.configuration.element_type || "div"
          );

          const uniqueDomId = `element-${Date.now()}`;
          newDiv.id = uniqueDomId;
          newDiv.style.color = element.configuration.text_color;
          newDiv.style.backgroundColor = element.configuration.background_color;
          newDiv.style.borderColor = element.configuration.border_color;
          newDiv.style.fontSize = element.configuration.font_size;
          newDiv.style.fontFamily = element.configuration.font_family;
          newDiv.innerHTML = element.configuration.content;
          newDiv.style.margin = element.configuration.margin;
          newDiv.style.padding = element.configuration.padding;
          newDiv.style.borderWidth = element.configuration.border_width;
          newDiv.style.borderStyle = element.configuration.border_style;
          newDiv.style.borderRadius = element.configuration.border_radius;

          const updatedElement = { ...element, dom_id: uniqueDomId };

          newDiv.classList.add("hoverable");
          newDiv.addEventListener("click", () => {
            console.log("Element clicked");
            setSelectedGlobalElement(updatedElement);
          });

          canvasEditor.appendChild(newDiv);
        }
      });
    }
  }, [currentPageElements]);

  const handleElementClick = (element: MyElement) => {
    setSelectedGlobalElement(element);
  };

  const handleCanvasClick = (e: React.MouseEvent<HTMLDivElement>) => {
    setActivePanel("ElementEditor");
  };

  useEffect(() => {
    if (selectedGlobalElement && currentPageElements) {
      const updatedElementIndex = currentPageElements.findIndex(
        (element) => element.id === selectedGlobalElement.id
      );

      if (updatedElementIndex !== -1) {
        // Create a copy of the updated element with the new configuration
        const updatedElement = {
          ...currentPageElements[updatedElementIndex],
          configuration: selectedGlobalElement.configuration,
        };

        // Create a copy of the current elements array and update the specific element
        const updatedElements = [...currentPageElements];
        updatedElements[updatedElementIndex] = updatedElement;

        // Update the state with the modified elements
        setCurrentPageElements(updatedElements);
      }

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

  useEffect(() => {
    console.log("NOVI ITEMI");

    console.log(currentPageElements);
  }, [currentPageElements]);

  // useEffect(() => {
  //   if (selectedGlobalElement) {
  //     console.log("PROMENA");
  //     const canvasEditor = document.getElementById("web-content");
  //     if (!canvasEditor) return;

  //     const elementToUpdate = Array.from(canvasEditor.children).find(
  //       (child: Element) => child.id == selectedGlobalElement.dom_id
  //     ) as HTMLElement;

  //     if (elementToUpdate) {
  //       console.log("PRONASLI SMO GA");
  //       for (let key in selectedGlobalElement.configuration) {
  //         // Convert your custom property names to CamelCase if needed
  //         let cssKey = key.replace(/_([a-z])/g, (g) => g[1].toUpperCase());
  //         (elementToUpdate.style as any)[cssKey] = (
  //           selectedGlobalElement.configuration as any
  //         )[key];
  //       }
  //     }
  //   }
  // }, [selectedGlobalElement]);

  return (
    <div className="canvas" onClick={handleCanvasClick}>
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
