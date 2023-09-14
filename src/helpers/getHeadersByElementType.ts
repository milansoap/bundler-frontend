import { MyElement } from "../models/MyElement";

export const getHeadersByElementType = (selectedElement: MyElement) => {
  if (!selectedElement) return [];

  const elementType = selectedElement.configuration.element_type;

  switch (elementType) {
    case "div":
      return [
        {
          title: "Content",
          settings: {
            "Font Size": { type: "slider", min: 10, max: 36 },
            "Text Color": { type: "colorPicker" },
          },
        },
        {
          title: "Style",
          settings: {
            "Background Color": { type: "colorPicker" },
            Margin: { type: "slider", min: 0, max: 50 },
            Padding: { type: "slider", min: 0, max: 50 },
          },
        },
        {
          title: "Advanced",
          settings: {
            "CSS Class": { type: "textInput" },
          },
        },
      ];
    case "anotherType":
      return [
        {
          title: "Another Content Header",
          settings: {
            // ...
          },
        },
        // more headers
      ];
    default:
      return [];
  }
};
