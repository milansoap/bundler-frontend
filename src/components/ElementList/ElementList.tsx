import React from "react";
import { Element } from "../../models/Element";
import ElementListItem from "./ElementListItem/ElementListItem";

interface ElementListProps {
  elements: Element[];
}

const ElementList: React.FC<ElementListProps> = ({ elements }) => {
  return (
    <div>
      {elements.map((element, index) => (
        <ElementListItem key={index} element={element} />
      ))}
    </div>
  );
};

export default ElementList;
