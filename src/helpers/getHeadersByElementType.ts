import { optionsForDiv } from "./options/optionsForDiv";
import { MyElement } from "../models/MyElement";

export const getHeadersByElementType = (selectedElement: MyElement) => {
  if (!selectedElement) return [];

  const elementType = selectedElement.configuration.element_type;

  switch (elementType) {
    case "div":
      return optionsForDiv(selectedElement);
    default:
      return [];
  }
};
