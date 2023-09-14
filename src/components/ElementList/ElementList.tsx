import React, { useState } from "react";
import { MyElement } from "../../models/MyElement";
import ElementListItem from "./ElementListItem/ElementListItem";

interface ElementListProps {
  elements: MyElement[];
  setSelectedElement: (element: MyElement) => void;
  selectedElement: MyElement | null;
}

const ElementList: React.FC<ElementListProps> = ({
  elements,
  setSelectedElement,
  selectedElement,
}) => {
  return (
    <div className="element-list">
      {elements.map((element, index) => (
        <ElementListItem
          key={index}
          element={element}
          isSelected={element === selectedElement}
          setSelectedElement={setSelectedElement}
        />
      ))}
    </div>
  );
};

export default ElementList;
