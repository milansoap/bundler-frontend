import React, { useState } from "react";
import { MyElement } from "../../../models/MyElement";
import pic from "../../../assets/images/catalog.png";

interface ElementListItemProps {
  element: MyElement;
  setSelectedElement: (element: MyElement) => void;
  isSelected: boolean;
}

const ElementListItem: React.FC<ElementListItemProps> = ({
  element,
  setSelectedElement,
  isSelected,
}) => {
  return (
    <div
      className={`element-item ${isSelected ? "element-item__selected" : ""}`}
      onClick={() => setSelectedElement(element)}
    >
      <img
        src={pic}
        alt={element.name}
        style={{ width: "100px", height: "100px" }}
      />
      <div>{element.name}</div>
    </div>
  );
};

export default ElementListItem;
