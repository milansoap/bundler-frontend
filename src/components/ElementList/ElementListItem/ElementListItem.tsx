import React from "react";
import { Element } from "../../../models/Element";
import pic from "../../../assets/images/catalog.png";

interface ElementListItemProps {
  element: Element;
}

const ElementListItem: React.FC<ElementListItemProps> = ({ element }) => {
  return (
    <div className="container">
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
